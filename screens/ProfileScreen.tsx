import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ICONS, DEFAULT_AVATAR, DEFAULT_PRODUCT_IMAGE, LEGACY_DEFAULT_PRODUCT_IMAGE } from '../constants';
import { User, Product } from '../types';
import { api } from '../api';

interface Props {
  user: User | null; // Current logged in user
  listings: Product[];
  onLogout: () => void;
  onGuestAction?: (action: string) => void;
}

const ProfileScreen: React.FC<Props> = ({ user: currentUser, listings: allListings, onLogout, onGuestAction }) => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const [activeTab, setActiveTab] = useState<'Listings' | 'Reviews'>('Listings');

  // State for the user whose profile we are viewing
  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [profileListings, setProfileListings] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const isOwnProfile = !userId || userId === currentUser?.id;

  useEffect(() => {
    if (isOwnProfile) {
      setProfileUser(currentUser);
      setProfileListings(allListings.filter(item => item.sellerId === currentUser?.id));
      setLoading(false);
    } else if (userId) {
      setLoading(true);
      // Fetch public user data
      api.auth.getUser(userId)
        .then(u => setProfileUser(u))
        .catch(err => console.error(err));

      // Fetch user listings
      api.listings.getByUser(userId)
        .then(items => setProfileListings(items))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [userId, currentUser, allListings, isOwnProfile]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && currentUser) {
      try {
        const file = e.target.files[0];
        const avatarUrl = await api.auth.uploadAvatar(currentUser.id, file);

        // Sync local storage immediately so reload picks it up
        const updatedUser = { ...currentUser, avatar: avatarUrl };
        localStorage.setItem('campus_market_user', JSON.stringify(updatedUser));

        window.location.reload();
      } catch (err) {
        console.error("Failed to upload avatar", err);
        alert("Failed to upload avatar");
      }
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="text-brand-muted mt-4 font-medium">Loading profile...</p>
    </div>
  );

  if (!profileUser) return (
    <div className="flex flex-col items-center justify-center h-full py-20 px-8 text-center">
      <p className="text-white text-xl font-bold mb-2">User Not Found</p>
      <p className="text-brand-muted mb-6">The user you are looking for doesn't exist or has been removed.</p>
      <button onClick={() => navigate(-1)} className="text-primary font-bold">Go Back</button>
    </div>
  );

  if (!currentUser) return null;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-brand-bg/95 backdrop-blur-md z-10 border-b border-brand-input/20">
        <div className="flex w-12 items-center">
          {!isOwnProfile && (
            <button onClick={() => navigate(-1)} className="h-10 w-10 flex items-center justify-center text-white">
              {ICONS.ArrowLeft}
            </button>
          )}
        </div>
        <h2 className="text-white text-lg font-bold flex-1 text-center truncate">
          {isOwnProfile ? 'Profile' : profileUser.name}
        </h2>
        <div className="flex w-12 items-center justify-end">
          {isOwnProfile && (
            <button onClick={onLogout} className="h-12 w-12 flex items-center justify-center text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path></svg>
            </button>
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="relative group">
          <div
            className="aspect-square w-32 rounded-full bg-cover bg-center border-4 border-brand-input shadow-xl"
            style={{ backgroundImage: `url("${profileUser.avatar || DEFAULT_AVATAR}")` }}
          />
          {isOwnProfile && !currentUser.isGuest && (
            <>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-white shadow-lg transform transition-transform hover:scale-110 active:scale-95"
              >
                {ICONS.Pencil}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          )}
        </div>
        <div className="text-center">
          <p className="text-white text-[22px] font-bold">{profileUser.name}</p>
          <p className="text-brand-muted text-base">{profileUser.isGuest ? 'Viewing as Guest' : profileUser.handle}</p>
          <p className="text-brand-muted text-base">Joined in {profileUser.joined?.split('-')[0] || '2024'}</p>
        </div>

        {currentUser.isGuest && isOwnProfile ? (
          <div className="flex flex-col items-center gap-3 w-full max-w-sm mt-2">
            <p className="text-brand-muted text-sm text-center">Sign up to customize your profile, track your listings, and connect with others!</p>
            <button
              className="w-full h-11 rounded-xl bg-primary text-white font-bold text-sm shadow-lg active:scale-[0.98] transition-all"
              onClick={() => navigate('/login')}
            >
              Sign Up Now
            </button>
          </div>
        ) : !isOwnProfile && (
          <button
            className="w-full max-w-[200px] h-11 rounded-xl bg-primary text-white font-bold text-sm shadow-lg active:scale-[0.98] transition-all"
            onClick={() => {
              if (currentUser.isGuest) {
                onGuestAction?.("message sellers");
              } else {
                alert(`You can message ${profileUser.name} through any of their listings below!`);
              }
            }}
          >
            Message
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 px-4 py-3">
        {[
          { label: 'Listings', val: profileListings.length },
          { label: 'Followers', val: profileUser.followersCount || 0 },
          { label: 'Following', val: profileUser.followingCount || 0 }
        ].map((stat) => (
          <div key={stat.label} className="flex flex-1 flex-col gap-2 rounded-xl border border-brand-border p-3 items-center text-center">
            <p className="text-white text-2xl font-bold">{stat.val}</p>
            <p className="text-brand-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-brand-border px-4 gap-8">
        {['Listings', 'Reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex flex-col items-center border-b-[3px] py-4 transition-colors ${activeTab === tab ? 'border-primary text-white font-bold' : 'border-transparent text-brand-muted'
              }`}
          >
            <p className="text-sm tracking-[0.015em]">{tab}</p>
          </button>
        ))}
      </div>


      {/* List Items */}
      <div className="flex flex-col">
        {activeTab === 'Listings' ? (
          profileListings.length === 0 ? (
            <div className="p-12 text-center text-brand-muted">
              <p>{isOwnProfile ? "You haven't posted anything yet." : `${profileUser.name} hasn't posted anything yet.`}</p>
              {isOwnProfile && (
                <button
                  onClick={() => navigate('/create-listing')}
                  className="text-primary font-bold mt-2"
                >
                  Create your first listing
                </button>
              )}
            </div>
          ) : (
            profileListings.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-stretch justify-between gap-4 border-b border-brand-border/30 hover:bg-brand-input cursor-pointer transition-colors"
                onClick={() => navigate(`/listing/${item.id}`)}
              >
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-brand-muted text-xs uppercase font-bold">{item.category}</p>
                  <p className="text-white text-base font-bold">{item.name}</p>
                  <p className="text-primary text-sm font-bold">{item.price}</p>
                </div>
                <div
                  className="flex-1 aspect-video bg-cover bg-center rounded-lg shadow-sm"
                  style={{
                    backgroundImage: `url("${(item.images?.[0] && item.images[0] !== LEGACY_DEFAULT_PRODUCT_IMAGE && item.images[0].trim() !== "")
                      ? item.images[0]
                      : DEFAULT_PRODUCT_IMAGE
                      }")`
                  }}
                />
              </div>
            ))
          )
        ) : (

          <div className="flex flex-col p-8 items-center justify-center text-center opacity-50">
            <p className="text-brand-muted">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
