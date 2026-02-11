import React, { useState, useEffect, useRef } from 'react';
import { ICONS, DEFAULT_AVATAR } from '../constants';
import { User, Conversation, Message } from '../types';
import { api } from '../api';

interface Props {
  user: User | null;
}

const InboxScreen: React.FC<Props> = ({ user }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      loadConversations();
    }
  }, [user]);

  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation.id);
      // Poll for new messages every 3s (simple MVP real-time)
      const interval = setInterval(() => loadMessages(selectedConversation.id), 3000);
      return () => clearInterval(interval);
    }
  }, [selectedConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadConversations = async () => {
    try {
      if (!user) return;
      const data = await api.chat.getConversations(user.id);
      setConversations(data);
    } catch (e) {
      console.error("Failed to load conversations", e);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (convId: string) => {
    try {
      // We assume api.chat.getMessages exists or we need to add/update types
      // Wait, we need to check if getMessages is in api.ts?
      // Yes, I saw it in api.ts earlier, let's verify usage.
      // It returns raw, we might need to map it or api.ts handles it?
      // api.ts calls /chat/messages/{id} which returns MessageBaseResponse
      const response = await fetch(`http://localhost:8000/chat/messages/${convId}`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation || !user) return;

    try {
      await api.chat.sendMessage(selectedConversation.id, newMessage, user.id, selectedConversation.otherUserId);
      setNewMessage('');
      loadMessages(selectedConversation.id);
      loadConversations(); // Update last message in list
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // If a conversation is selected, show Chat View
  if (selectedConversation) {
    return (
      <div className="flex flex-col h-[calc(100vh-5rem)] bg-brand-bg relative">
        {/* Chat Header */}
        <div className="flex items-center p-4 border-b border-brand-input bg-brand-bg sticky top-0 z-10">
          <button
            onClick={() => setSelectedConversation(null)}
            className="mr-3 p-2 rounded-full hover:bg-brand-input transition-colors text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
          </button>

          <div className="flex items-center flex-1 gap-3">
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center border border-white/10"
              style={{ backgroundImage: `url("${selectedConversation.otherUserAvatar || DEFAULT_AVATAR}")` }}
            />
            <div>
              <h3 className="text-white font-bold text-base leading-none">{selectedConversation.otherUserName}</h3>
              <p className="text-brand-muted text-xs mt-1">{selectedConversation.listingName}</p>
            </div>
          </div>
        </div>

        {/* Messages List - adjust height to account for header and input */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {messages.map((msg) => {
            const isMe = msg.senderId === user?.id;
            return (
              <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${isMe
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-brand-input text-white rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-brand-bg/95 backdrop-blur border-t border-brand-input safe-area-bottom">
          <form onSubmit={handleSendMessage} className="flex items-end gap-3 max-w-4xl mx-auto w-full relative">
            <div className="flex-1 bg-brand-input/50 focus-within:bg-brand-input transition-colors rounded-3xl border border-white/5 focus-within:border-primary/50 relative overflow-hidden flex flex-col min-h-[48px]">
              <textarea
                ref={(el) => {
                  if (el) {
                    el.style.height = 'auto'; // Reset height
                    el.style.height = Math.min(el.scrollHeight, 120) + 'px'; // Set new height capped at 120px
                  }
                }}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                maxLength={300}
                rows={1}
                className="w-full bg-transparent text-white placeholder-brand-muted/50 text-[15px] focus:outline-none resize-none overflow-hidden no-scrollbar py-3 pl-4 pr-12 leading-relaxed"
                style={{ maxHeight: '120px' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              {/* Character Limit Indicator */}
              <div className="absolute bottom-2 right-3 pointer-events-none p-1 rounded bg-brand-bg/50 backdrop-blur-md border border-white/5">
                <span className={`text-[11px] font-bold font-mono transition-colors ${newMessage.length > 250 ? 'text-amber-400' : 'text-brand-muted'}`}>
                  {newMessage.length} / 300
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="mb-1 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62a16,16,0,0,0,14.49,9.15,15.74,15.74,0,0,0,4.89-.78l.15,0,58.26-191.94A16,16,0,0,0,227.32,28.68ZM141.56,220.93,107.08,148.1a8,8,0,0,0-3.18-3.18L51.07,110.44,198.81,65.37Z"></path></svg>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Conversation List View
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold flex-1 text-center pl-12">Inbox</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="h-12 w-12 flex items-center justify-center text-white">
            {ICONS.Pencil}
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {loading ? (
          <p className="text-center text-brand-muted mt-8">Loading chats...</p>
        ) : conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 px-6 text-center">
            <div className="size-16 rounded-full bg-brand-input flex items-center justify-center mb-4 text-brand-muted">
              {ICONS.Chat}
            </div>
            <p className="text-white font-bold mb-1">No messages yet</p>
            <p className="text-brand-muted text-sm">Start a conversation from a listing!</p>
          </div>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className="flex items-center gap-4 px-4 py-4 justify-between hover:bg-brand-input transition-colors cursor-pointer border-b border-brand-input/50"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-14 w-14 rounded-full bg-cover bg-center shrink-0 border border-white/10"
                  style={{ backgroundImage: `url("${conv.otherUserAvatar || DEFAULT_AVATAR}")` }}
                />
                <div className="flex flex-col">
                  <p className="text-white text-base font-medium">{conv.otherUserName}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-brand-input px-1.5 py-0.5 rounded text-brand-muted border border-white/5">{conv.listingName}</span>
                  </div>
                  <p className="text-brand-muted text-sm line-clamp-1 mt-1">{conv.lastMessage}</p>
                </div>
              </div>
              <div className="shrink-0 self-start mt-1">
                <p className="text-brand-muted text-xs">
                  {new Date(conv.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InboxScreen;
