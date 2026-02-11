from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from backend.models import Product, ProductCreate, ProductUpdate
from backend.main import supabase

router = APIRouter(prefix="/listings", tags=["listings"])

@router.get("/", response_model=List[Product])
async def get_listings(category: Optional[str] = None):
    try:
        query = supabase.table("products").select("*, profiles!seller_id(name, avatar)")
        if category and category != "All":
            query = query.eq("category", category)
        
        # Order by newest
        data, count = query.order("created_at", desc=True).execute()
        
        # Map profiles data to seller_name/avatar
        results = []
        for item in data[1]:
            profile = item.get('profiles', {}) or {}
            item['seller_name'] = profile.get('name', 'Unknown')
            item['seller_avatar'] = profile.get('avatar', '')
            results.append(item)
            
        return results
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{listing_id}", response_model=Product)
async def get_listing(listing_id: str):
    try:
        data, count = supabase.table("products").select("*, profiles!seller_id(name, avatar)").eq("id", listing_id).single().execute()
        if not data[1]:
            raise HTTPException(status_code=404, detail="Listing not found")
            
        item = data[1]
        profile = item.get('profiles', {}) or {}
        item['seller_name'] = profile.get('name', 'Unknown')
        item['seller_avatar'] = profile.get('avatar', '')
        
        return item
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/", response_model=Product)
async def create_listing(product: ProductCreate):
    try:
        # In real app, get user_id from auth token. Here we rely on payload.
        # We use by_alias=False because Supabase DB columns are snake_case (e.g. college_id)
        # while Frontend sends camelCase (collegeId) which is handled by Pydantic aliases.
        product_data = product.model_dump(by_alias=False)
        
        # Remove fields that are not in the products table
        if 'seller_name' in product_data:
            del product_data['seller_name']
        if 'seller_avatar' in product_data:
            del product_data['seller_avatar']
        
        data, count = supabase.table("products").insert(product_data).execute()
        created_item = data[1][0]
        
        # We need to return the full object including seller info for the frontend
        # We can just attach what was passed in the request since we know it
        created_item['seller_name'] = product.seller_name
        created_item['seller_avatar'] = product.seller_avatar
        
        return created_item
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/{listing_id}", response_model=Product)
async def update_listing(listing_id: str, product: ProductUpdate):
    try:
        product_data = product.model_dump(by_alias=False, exclude_unset=True)
        
        data, count = supabase.table("products").update(product_data).eq("id", listing_id).execute()
        if not data[1]:
            raise HTTPException(status_code=404, detail="Listing not found")
            
        # Get the full product to return (including joined fields)
        return await get_listing(listing_id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.delete("/{listing_id}")
async def delete_listing(listing_id: str):
    try:
        # Ideally check if user requesting delete is the owner
        data, count = supabase.table("products").delete().eq("id", listing_id).execute()
        return {"message": "Listing deleted"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
