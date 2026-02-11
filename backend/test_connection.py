import os
from dotenv import load_dotenv
from supabase import create_client, Client
import asyncio

load_dotenv(dotenv_path="backend/.env")

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

if not url or not key:
    print("Error: SUPABASE_URL or SUPABASE_KEY not found in .env")
    exit(1)

print(f"Connecting to Supabase at {url}...")
try:
    supabase: Client = create_client(url, key)
    # Try a simple query - even if table is empty it validates connection
    # Assuming 'profiles' table exists from schema, if not it might error but that confirms connection
    response = supabase.table("profiles").select("*", count="exact").limit(1).execute()
    print("Connection successful!")
    print(f"Result: {response}")
except Exception as e:
    print(f"Connection failed: {e}")
