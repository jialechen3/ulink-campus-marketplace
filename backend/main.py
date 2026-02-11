from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from supabase import create_client, Client

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = FastAPI(title="ULink API")

# CORS setup
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase Client
url: str = os.environ.get("SUPABASE_URL", "")
key: str = os.environ.get("SUPABASE_KEY", "")
supabase: Client = create_client(url, key)

from backend.routers import auth, listings, chat

from fastapi.staticfiles import StaticFiles

app.include_router(auth.router)
app.include_router(listings.router)
app.include_router(chat.router)

# Ensure uploads directory exists
os.makedirs("backend/uploads/avatars", exist_ok=True)

# Mount static files
app.mount("/static", StaticFiles(directory="backend/uploads"), name="static")

@app.get("/")
def read_root():
    return {"message": "Welcome to ULink API"}

# Import and include routers here later
# from .routers import auth, listings, chat
# app.include_router(auth.router)
# ...
