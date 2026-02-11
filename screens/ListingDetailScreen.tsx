
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ICONS, MOCK_COLLEGES, DEFAULT_AVATAR, DEFAULT_PRODUCT_IMAGE, LEGACY_DEFAULT_PRODUCT_IMAGE } from '../constants';
import { User, Product } from '../types';
import { api } from '../api';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for Leaflet default icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  user: User | null;
  listings: Product[];
  onDelete?: (id: string) => void;
  onGuestAction?: (action: string) => void;
}

const ListingDetailScreen: React.FC<Props> = ({ user, listings, onDelete, onGuestAction }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = listings.find(p => p.id === id) || listings[0];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Sanitize images: filter out null, empty strings, and placeholders
  const validImages = React.useMemo(() => {
    if (!product?.images) return [];
    return product.images.filter(img =>
      img &&
      img !== LEGACY_DEFAULT_PRODUCT_IMAGE &&
      img.trim() !== ""
    );
  }, [product?.images]);

  if (!product) return null;

  const isOwner = user?.id === product.sellerId;

  const currentImage = validImages.length > 0
    ? (validImages[currentImgIndex] || validImages[0])
    : DEFAULT_PRODUCT_IMAGE;

  const college = MOCK_COLLEGES.find(c => c.id === product.collegeId);
  const locationText = college ? college.location : 'Unknown Location';
  // Default to US center if no coordinates
  const position: [number, number] = college?.coordinates ? [college.coordinates.lat, college.coordinates.lng] : [39.8283, -98.5795];

  const handleEdit = () => {
    navigate(`/edit-listing/${product.id}`);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete?.(product.id);
    setShowDeleteConfirm(false);
  };

  const handleMessage = async () => {
    if (!user) {
      alert("Please login to message the seller.");
      navigate('/login');
      return;
    }
    if (user.isGuest) {
      onGuestAction?.("message sellers");
      return;
    }
    if (isOwner) {
      alert("You cannot message yourself!");
      return;
    }

    try {
      // Start or get existing conversation
      await api.chat.startConversation(product.id, product.sellerId, user.id);
      navigate('/inbox');
    } catch (e) {
      console.error(e);
      alert("Failed to start conversation");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black overflow-hidden relative">
      {/* Close Button (Fixed Top Left) */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 flex items-center justify-center size-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors border border-white/10 backdrop-blur-sm"
      >
        {ICONS.X}
      </button>

      {/* Left Column: Image Viewer */}
      <div className="flex-1 relative flex flex-col items-center justify-center bg-[#18191a] group">
        {/* Background Blur Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 transition-all duration-500"
          style={{ backgroundImage: `url("${currentImage}")` }}
        />

        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImgIndex(prev => (prev === 0 ? validImages.length - 1 : prev - 1));
              }}
              className="absolute left-4 z-30 p-2 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImgIndex(prev => (prev === validImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 z-30 p-2 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            </button>
          </>
        )}

        {/* Main Image Container */}
        <div className="relative z-10 h-full w-full max-h-[85vh] flex items-center justify-center p-4">
          <img
            src={currentImage}
            className={`max-w-full max-h-full object-contain shadow-2xl rounded-sm transition-all duration-300 ${validImages.length === 0 ? 'opacity-50 grayscale' : ''}`}
            alt={product.name}
          />
        </div>

        {/* Thumbnails (Actual Uploaded Images Only) */}
        {validImages.length > 1 && (
          <div className="absolute bottom-6 flex gap-2 z-30 px-4 overflow-x-auto no-scrollbar max-w-full">
            {validImages.map((img, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(i);
                }}
                className={`size-14 rounded-lg border-2 overflow-hidden shrink-0 cursor-pointer transition-all ${currentImgIndex === i ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Details Panel */}
      <div className="w-full lg:w-[420px] shrink-0 bg-[#242526] flex flex-col h-full border-l border-white/5 shadow-2xl">
        <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
          {/* Header Info */}
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-white text-2xl font-bold leading-tight">{product.name}</h1>
            <p className="text-white text-xl font-bold">{product.price}</p>
            <p className="text-[#b0b3b8] text-sm mt-1">
              Listed {product.sellerId === '1' ? '2 weeks ago' : 'Recently'} in {product.collegeId === '1' ? 'Stanford, CA' : 'Your Campus'}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mb-6">
            {!isOwner ? (
              <>
                <button
                  onClick={handleMessage}
                  className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-semibold transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Z"></path></svg>
                  Message
                </button>
                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-semibold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"></path></svg>
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEdit}
                  className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-colors"
                >
                  <span className="scale-75">{ICONS.Pencil}</span>
                  Edit Listing
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-red-600/10 hover:bg-red-600/20 text-red-500 font-semibold transition-colors border border-red-500/20"
                >
                  <span className="scale-75">{ICONS.Trash}</span>
                </button>
              </>
            )}
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-semibold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,120a32,32,0,0,0-23.32,10.08l-75.12-37.56a32,32,0,1,0,0-29l75.12-37.56A32,32,0,1,0,184,40a32,32,0,0,0,8.68,22.44L117.56,100a32,32,0,1,0,0,56l75.12,37.56A32,32,0,1,0,224,160,32,32,0,0,0,216,120Z"></path></svg>
              Share
            </button>
          </div>

          {/* Details Section */}
          <div className="border-t border-white/10 pt-4 mb-6">
            <h3 className="text-white text-lg font-bold mb-3">Details</h3>
            <div className="grid grid-cols-[100px_1fr] gap-2 items-center mb-4">
              <span className="text-[#b0b3b8] text-sm">Condition</span>
              <span className="text-white text-sm font-medium">{product.condition}</span>
            </div>
            <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
              {product.description}
            </p>
          </div>

          {/* Map Preview */}
          <div className="border-t border-white/10 pt-4 mb-4">
            <div className="rounded-xl overflow-hidden relative border border-white/10 aspect-[16/9] mb-3 z-0">
              <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {college && (
                  <Marker position={position}>
                    <Popup>
                      {college.name}
                    </Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
            <p className="text-white text-sm font-bold">{locationText}</p>
            <p className="text-[#b0b3b8] text-xs">Location is approximate</p>
          </div>

          {/* Seller Section */}
          <div className="border-t border-white/10 pt-4 mb-6">
            <h3 className="text-white text-lg font-bold mb-4">Seller Information</h3>
            <div
              className="flex items-center gap-3 cursor-pointer group/seller"
              onClick={() => navigate(`/user/${product.sellerId}`)}
            >
              <div
                className="size-12 rounded-full bg-cover bg-center border border-white/10 group-hover/seller:border-primary transition-colors"
                style={{ backgroundImage: `url("${product.sellerAvatar || DEFAULT_AVATAR}")` }}
              />
              <div className="flex flex-col">
                <p className="text-white font-bold group-hover/seller:text-primary transition-colors">{product.sellerName}</p>
                <p className="text-[#b0b3b8] text-sm group-hover/seller:text-brand-muted transition-colors">Joined {product.sellerId === '1' ? '2 weeks ago' : 'Recently'}</p>
              </div>
            </div>
          </div>
        </div>


        {/* Sticky Footer Message Button */}
        <div className="p-4 bg-[#242526] border-t border-white/10">
          {isOwner ? (
            <div className="flex gap-3">
              <button
                onClick={handleEdit}
                className="flex-1 h-12 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-base transition-colors shadow-lg active:scale-[0.98]"
              >
                Edit Listing
              </button>
              <button
                onClick={handleDelete}
                className="h-12 w-12 rounded-lg bg-red-600/10 hover:bg-red-600/20 text-red-500 flex items-center justify-center transition-colors border border-red-500/20"
              >
                {ICONS.Trash}
              </button>
            </div>
          ) : (
            <button
              onClick={handleMessage}
              className="w-full h-12 rounded-lg font-bold text-base transition-colors shadow-lg active:scale-[0.98] bg-primary hover:bg-primary/90 text-white"
            >
              Message
            </button>
          )}
        </div>
      </div>

      {/* Custom Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowDeleteConfirm(false)}
          />
          <div className="relative bg-[#242526] w-full max-w-sm rounded-2xl border border-white/10 p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Delete Listing?</h3>
                <p className="text-[#b0b3b8] text-sm leading-relaxed">
                  Are you sure you want to delete <span className="text-white font-medium">"{product.name}"</span>? This action cannot be undone.
                </p>
              </div>
              <div className="flex flex-col w-full gap-3 mt-4">
                <button
                  onClick={confirmDelete}
                  className="h-12 w-full rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-colors active:scale-[0.98]"
                >
                  Delete Listing
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="h-12 w-full rounded-xl bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-bold transition-colors active:scale-[0.98]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetailScreen;
