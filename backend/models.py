from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

# User Models
class UserBase(BaseModel):
    email: EmailStr
    name: str
    handle: str
    avatar: Optional[str] = None
    college_id: Optional[str] = Field(None, alias="collegeId")

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    college_id: Optional[str] = Field(None, alias="collegeId")
    is_onboarded: Optional[bool] = Field(None, alias="isOnboarded")
    avatar: Optional[str] = None

class User(UserBase):
    id: str
    is_onboarded: bool = Field(False, alias="isOnboarded")
    joined: datetime
    listings_count: int = Field(0, alias="listingsCount")
    followers_count: int = Field(0, alias="followersCount")
    following_count: int = Field(0, alias="followingCount")

    class Config:
        populate_by_name = True

# Product Models
class ProductBase(BaseModel):
    name: str
    price: str
    category: str
    description: str
    condition: str
    images: List[str] = []
    college_id: str = Field(..., alias="collegeId")

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    condition: Optional[str] = None
    images: Optional[List[str]] = None
    college_id: Optional[str] = Field(None, alias="collegeId")

    class Config:
        populate_by_name = True

class ProductCreate(ProductBase):
    seller_id: str = Field(..., alias="sellerId")
    seller_name: str = Field(..., alias="sellerName")
    seller_avatar: Optional[str] = Field(None, alias="sellerAvatar")

class Product(ProductBase):
    id: str
    seller_id: str = Field(..., alias="sellerId")
    seller_name: str = Field(..., alias="sellerName")
    seller_avatar: Optional[str] = Field(None, alias="sellerAvatar")
    created_at: datetime

    class Config:
        populate_by_name = True

# Message Models
class MessageBase(BaseModel):
    text: str = Field(..., max_length=300)
    recipient_id: str
    sender_id: str = Field(..., alias="senderId")

class MessageBaseResponse(BaseModel):
    id: str
    sender_id: str = Field(..., alias="senderId")
    sender_name: str = Field(..., alias="senderName")
    avatar: Optional[str] = None
    text: str
    time: datetime
    unread: bool = False

    class Config:
        populate_by_name = True
