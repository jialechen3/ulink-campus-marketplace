import { User, Product, Message, Conversation } from './types';
import { MOCK_USERS } from './constants';

const API_URL = 'http://localhost:8000';

export const api = {
    auth: {
        signup: async (email: string, password: string, name: string): Promise<User> => {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    handle: `@${name.toLowerCase().replace(/\s+/g, '.')}`
                }),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        login: async (email: string, password: string): Promise<User> => {
            // Support for demo users
            const demoUser = MOCK_USERS.find(u => u.email === email && password === `pass_${u.handle}`);
            if (demoUser) {
                return demoUser;
            }

            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        me: async (userId: string): Promise<User> => {
            const response = await fetch(`${API_URL}/auth/me?user_id=${userId}`);
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        getUser: async (userId: string): Promise<User> => {
            const response = await fetch(`${API_URL}/auth/me?user_id=${userId}`); // Reusing me endpoint as it returns the profile
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        updateProfile: async (userId: string, updates: Partial<User> & { collegeId?: string, isOnboarded?: boolean }): Promise<User> => {
            const response = await fetch(`${API_URL}/auth/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        uploadAvatar: async (userId: string, file: File): Promise<string> => {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${API_URL}/auth/${userId}/avatar`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error(await response.text());
            return response.json();
        }
    },
    listings: {
        getAll: async (category?: string): Promise<Product[]> => {
            const query = category ? `?category=${category}` : '';
            const response = await fetch(`${API_URL}/listings/${query}`);
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        getByUser: async (userId: string): Promise<Product[]> => {
            const response = await fetch(`${API_URL}/listings/`);
            if (!response.ok) throw new Error(await response.text());
            const all: Product[] = await response.json();
            return all.filter(p => p.sellerId === userId);
        },
        create: async (product: any): Promise<Product> => {
            const response = await fetch(`${API_URL}/listings/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        update: async (listingId: string, updates: any): Promise<Product> => {
            const response = await fetch(`${API_URL}/listings/${listingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        delete: async (listingId: string): Promise<void> => {
            const response = await fetch(`${API_URL}/listings/${listingId}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error(await response.text());
        }
    },
    chat: {
        getConversations: async (userId: string): Promise<Conversation[]> => {
            const response = await fetch(`${API_URL}/chat/conversations/${userId}`);
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        startConversation: async (listingId: string, sellerId: string, buyerId: string): Promise<Conversation> => {
            const response = await fetch(`${API_URL}/chat/start?listing_id=${listingId}&seller_id=${sellerId}&buyer_id=${buyerId}`, {
                method: 'POST'
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        },
        sendMessage: async (conversationId: string, text: string, senderId: string, recipientId: string): Promise<any> => {
            const response = await fetch(`${API_URL}/chat/${conversationId}/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, senderId, recipient_id: recipientId }),
            });
            if (!response.ok) throw new Error(await response.text());
            return response.json();
        }
    }
};
