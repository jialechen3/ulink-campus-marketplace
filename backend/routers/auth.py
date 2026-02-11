from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Optional
from backend.models import User, UserCreate, UserBase, UserUpdate
from backend.main import supabase
from datetime import datetime

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/signup", response_model=User)
async def signup(user_data: UserCreate):
    # 1. Sign up with Supabase Auth
    try:
        auth_response = supabase.auth.sign_up({
            "email": user_data.email,
            "password": user_data.password,
            "options": {
                "data": {
                    "name": user_data.name,
                    "handle": user_data.handle
                }
            }
        })
        
        if not auth_response.user:
            raise HTTPException(status_code=400, detail="Signup failed")
            
        user_id = auth_response.user.id
        
        # 2. Create Profile in 'profiles' table (if trigger doesn't exist)
        # Note: If you set up a Supabase trigger to auto-create profiles, this might be redundant or fail.
        # For this implementation, we will explicitly create/update it to ensure data is there.
        
        profile_data = {
            "id": user_id,
            "email": user_data.email,
            "name": user_data.name,
            "handle": user_data.handle,
            "avatar": user_data.avatar,
            "college_id": user_data.college_id,
            "is_onboarded": False,
            "listings_count": 0,
            "followers_count": 0,
            "following_count": 0
        }
        
        data, count = supabase.table("profiles").upsert(profile_data).execute()
        
        # Return the created user object
        created_profile = data[1][0]
        created_profile['joined'] = datetime.now() # Mock for response if needed or fetch from DB
        
        return created_profile

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login", response_model=User)
async def login(credentials: LoginRequest):
    try:
        auth_response = supabase.auth.sign_in_with_password({
            "email": credentials.email,
            "password": credentials.password
        })
        
        if not auth_response.user:
            raise HTTPException(status_code=400, detail="Login failed")

        user_id = auth_response.user.id
        
        # Fetch profile
        data, count = supabase.table("profiles").select("*").eq("id", user_id).single().execute()
        
        if not data[1]:
             raise HTTPException(status_code=404, detail="User profile not found")
             
        return data[1]
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/me", response_model=User)
async def get_current_user(user_id: str): 
    # In a real app, we'd verify the JWT token here. 
    # For simplicity, we are passing user_id, but frontend commonly sends token.
    # We will assume frontend sends ID for now or implement JWT verify later.
    try:
         data, count = supabase.table("profiles").select("*").eq("id", user_id).single().execute()
         if not data[1]:
             raise HTTPException(status_code=404, detail="User not found")
         return data[1]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/{user_id}", response_model=User)
async def update_user(user_id: str, user_update: UserUpdate):
    try:
        # Pydantic handles camelCase -> snake_case alias matching for input
        # We need to dump it as snake_case for DB
        update_data = user_update.model_dump(exclude_unset=True, by_alias=False)
        
        data, count = supabase.table("profiles").update(update_data).eq("id", user_id).execute()
        
        if not data[1]:
             raise HTTPException(status_code=404, detail="User not found")
             
        return data[1][0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

from fastapi import UploadFile, File
import shutil
import os

@router.post("/{user_id}/avatar", response_model=str)
async def upload_avatar(user_id: str, file: UploadFile = File(...)):
    try:
        # Validate file type
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
            
        # Create filename
        extension = file.filename.split(".")[-1]
        filename = f"{user_id}_{int(datetime.now().timestamp())}.{extension}"
        file_path = f"backend/uploads/avatars/{filename}"
        
        # Save file locally
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Construct public URL
        # NOTE: In production, use env var for base URL. For now, hardcode localhost.
        avatar_url = f"http://localhost:8000/static/avatars/{filename}"
        
        # Update user profile in DB
        data, count = supabase.table("profiles").update({"avatar": avatar_url}).eq("id", user_id).execute()
        
        if not data[1]:
             raise HTTPException(status_code=404, detail="User not found")
             
        return avatar_url
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
