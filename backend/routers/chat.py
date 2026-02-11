from fastapi import APIRouter, HTTPException
from backend.models import MessageBaseResponse, MessageBase
from backend.main import supabase
from typing import List

router = APIRouter(prefix="/chat", tags=["chat"])

@router.get("/conversations/{user_id}")
async def get_conversations(user_id: str):
    try:
        # Fetch conversations where user is buyer OR seller
        # We fetch related data: listing details, buyer profile, seller profile
        
        # 1. As Buyer
        c1 = supabase.table("conversations").select(
            "*, listing:products(name, images), buyer:profiles!buyer_id(name, avatar), seller:profiles!seller_id(name, avatar)"
        ).eq("buyer_id", user_id).execute()
        
        # 2. As Seller
        c2 = supabase.table("conversations").select(
            "*, listing:products(name, images), buyer:profiles!buyer_id(name, avatar), seller:profiles!seller_id(name, avatar)"
        ).eq("seller_id", user_id).execute()
        
        all_convs = c1.data + c2.data
        
        # Format for frontend
        results = []
        for conv in all_convs:
            # Determine the "other" person
            is_buyer = conv['buyer_id'] == user_id
            other_user = conv['seller'] if is_buyer else conv['buyer']
            
            # Listing info
            listing = conv.get('listing', {}) or {}
            listing_name = listing.get('name', 'Unknown Item')
            listing_img = listing.get('images', [])
            listing_img = listing_img[0] if listing_img and len(listing_img) > 0 else None
            
            results.append({
                "id": conv['id'],
                "otherUserId": conv['seller_id'] if is_buyer else conv['buyer_id'],
                "otherUserName": other_user.get('name', 'Unknown'),
                "otherUserAvatar": other_user.get('avatar', ''),
                "listingName": listing_name,
                "listingImage": listing_img,
                "lastMessage": conv['last_message'],
                "updatedAt": conv['updated_at']
            })
            
        # Sort by updated_at desc
        results.sort(key=lambda x: x['updatedAt'], reverse=True)
        
        return results
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/messages/{conversation_id}", response_model=List[MessageBaseResponse])
async def get_messages(conversation_id: str):
    try:
        data, count = supabase.table("messages").select("*, sender:sender_id(name, avatar)").eq("conversation_id", conversation_id).order("created_at").execute()
        
        # Transform data to match response model if needed (flatten sender info)
        # We did a join: result has sender: {name, avatar}
        results = []
        for msg in data[1]:
            sender = msg.get('sender', {})
            results.append({
                "id": msg['id'],
                "senderId": msg['sender_id'],
                "senderName": sender.get('name', 'Unknown'),
                "avatar": sender.get('avatar', ''),
                "text": msg['content'],
                "time": msg['created_at'],
                "unread": msg['is_read']
            })
            
        return results
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/start")
async def start_conversation(listing_id: str, seller_id: str, buyer_id: str):
    try:
        if seller_id == buyer_id:
             raise HTTPException(status_code=400, detail="Cannot message yourself")

        # Check if ANY conversation already exists between these two users
        # We check both directions just in case, though usually roles are fixed per listing interaction.
        # Ideally, we want one thread per pair.
        
        # Check if conversation exists where I am buyer and they are seller
        existing = supabase.table("conversations").select("*")\
            .eq("buyer_id", buyer_id)\
            .eq("seller_id", seller_id)\
            .execute()
            
        if existing.data and len(existing.data) > 0:
            # Reuse existing conversation
            conv = existing.data[0]
            # Update the listing_id to the current one so context is fresh
            supabase.table("conversations").update({"listing_id": listing_id}).eq("id", conv['id']).execute()
            # Return updated conversation
            conv['listing_id'] = listing_id
            return conv
            
        # Check inverse (if I previously sold to them, meaning we have a chat where I am seller)
        # For simplicity in this MVP, we might keep roles distinct or merge.
        # If we want a strictly single thread, we check invalid direction too.
        # But our `get_conversations` logic separates logic slightly.
        # Let's stick to (buyer, seller) pair uniqueness for now to avoid complexity of swapping roles in same chat.
            
        # Create new
        new_conv = {
            "listing_id": listing_id,
            "buyer_id": buyer_id,
            "seller_id": seller_id,
            "last_message": "Started a conversation"
        }
        
        data, count = supabase.table("conversations").insert(new_conv).execute()
        return data[1][0]
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/{conversation_id}/send")
async def send_message(conversation_id: str, message: MessageBase):
    try:
        # Insert message
        msg_data = {
            "conversation_id": conversation_id,
            "sender_id": message.sender_id,
            "content": message.text,
            "is_read": False
        }
        
        data, count = supabase.table("messages").insert(msg_data).execute()
        
        # Update conversation last_message
        supabase.table("conversations").update({
            "last_message": message.text, 
            "updated_at": "now()"
        }).eq("id", conversation_id).execute()
        
        return data[1][0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
