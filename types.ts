
export interface User {
  id: string;
  email: string;
  name: string;
  handle: string;
  avatar: string;
  collegeId?: string;
  isOnboarded: boolean;
  joined: string;
  listingsCount: number;
  followersCount: number;
  followingCount: number;
  isGuest?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  images: string[];
  description: string;
  sellerId: string;
  sellerName: string;
  sellerAvatar: string;
  condition: string;
  collegeId: string;
  created_at?: string;
}

export interface Seller {
  name: string;
  handle: string;
  joined: string;
  avatar: string;
  listingsCount: number;
  followersCount: number;
  followingCount: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  avatar: string;
  text: string;
  time: string;
  unread?: boolean;
}

export interface Conversation {
  id: string;
  listingId?: string; // Optional if we just rely on listingName/Image
  otherUserId: string;
  otherUserName: string;
  otherUserAvatar: string;
  listingName: string;
  listingImage: string | null;
  lastMessage?: string;
  updatedAt: string; // Changed from timestamp to match backend
}

export interface College {
  id: string;
  name: string;
  location: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
