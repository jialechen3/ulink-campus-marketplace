-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase Auth)
create table profiles (
  id uuid references auth.users not null primary key,
  email text,
  name text,
  handle text unique,
  avatar text,
  college_id text,
  is_onboarded boolean default false,
  joined timestamp with time zone default timezone('utc'::text, now()),
  listings_count int default 0,
  followers_count int default 0,
  following_count int default 0
);

-- RLS Policies for Profiles
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Products/Listings table
create table products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  price text not null, -- Storing as text for now to match frontend '$10' format, but ideally should be numeric
  category text,
  description text,
  condition text,
  images text[] default '{}',
  college_id text,
  seller_id uuid references profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- RLS Policies for Products
alter table products enable row level security;

create policy "Products are viewable by everyone."
  on products for select
  using ( true );

create policy "Users can insert their own products."
  on products for insert
  with check ( auth.uid() = seller_id );

-- Conversations table
create table conversations (
  id uuid default uuid_generate_v4() primary key,
  listing_id uuid references products(id),
  buyer_id uuid references profiles(id),
  seller_id uuid references profiles(id),
  last_message text,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  unique(listing_id, buyer_id, seller_id)
);

-- Messages table
create table messages (
  id uuid default uuid_generate_v4() primary key,
  conversation_id uuid references conversations(id),
  sender_id uuid references profiles(id),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  is_read boolean default false
);
