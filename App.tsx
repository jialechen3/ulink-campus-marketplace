
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import InboxScreen from './screens/InboxScreen';
import ListingDetailScreen from './screens/ListingDetailScreen';
import CreateListingScreen from './screens/CreateListingScreen';
import CollegeSelectionScreen from './screens/CollegeSelectionScreen';
import LoginScreen from './screens/LoginScreen';
import Navbar from './components/Navbar';
import { User, Product } from './types';
import { MOCK_PRODUCTS } from './constants';
import { api } from './api';
import GuestModal from './components/GuestModal';


const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [listings, setListings] = useState<Product[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [guestModal, setGuestModal] = useState<{ isOpen: boolean; actionText: string }>({ isOpen: false, actionText: '' });


  useEffect(() => {
    const savedUser = localStorage.getItem('campus_market_user');

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);

      // Fetch fresh user data from API to ensure sync (e.g. avatar updates)
      api.auth.me(parsedUser.id)
        .then(freshUser => {
          setUser(freshUser);
          localStorage.setItem('campus_market_user', JSON.stringify(freshUser));
        })
        .catch(err => console.error("Failed to refresh user data", err));
    }

    // Fetch listings from API
    api.listings.getAll()
      .then(fetchedListings => {
        // Merge with MOCK_PRODUCTS to ensure always having demo data
        const merged = [...MOCK_PRODUCTS, ...fetchedListings];
        // Use a Map to ensure uniqueness by ID, preferring API data if IDs clash
        const uniqueMap = new Map();
        merged.forEach(p => uniqueMap.set(p.id, p));
        setListings(Array.from(uniqueMap.values()));
      })
      .catch(err => {
        console.error("Failed to fetch listings", err);
        setListings(MOCK_PRODUCTS); // Fallback to mocks
      })
      .finally(() => setInitialized(true));
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('campus_market_user', JSON.stringify(newUser));
    // Explicitly navigate based on onboard status to avoid race conditions or stuck state
    if (newUser.isOnboarded) {
      navigate('/');
    } else {
      navigate('/select-college');
    }
  };

  const handleOnboard = async (collegeId: string) => {
    if (!user) return;
    try {
      if (user.isGuest) {
        const updatedUser = { ...user, collegeId, isOnboarded: true };
        setUser(updatedUser);
        localStorage.setItem('campus_market_user', JSON.stringify(updatedUser));
        navigate('/');
        return;
      }
      const updatedUser = await api.auth.updateProfile(user.id, { collegeId, isOnboarded: true });
      setUser(updatedUser);
      localStorage.setItem('campus_market_user', JSON.stringify(updatedUser));
      navigate('/');
    } catch (e) {
      console.error("Failed to update profile", e);
      alert("Failed to save college selection.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('campus_market_user');
    navigate('/login');
  };

  const handleCreateListing = async (productData: Partial<Product>) => {
    try {
      if (!user) return;

      // Prepare payload for API
      // We need to match ProductCreate model in backend
      const payload = {
        name: productData.name,
        price: productData.price,
        category: productData.category,
        description: productData.description || '',
        condition: productData.condition,
        images: productData.images || [],
        collegeId: user.collegeId || '1',
        sellerId: user.id, // Ensure we send this
        sellerName: user.name,
        sellerAvatar: user.avatar
      };

      const createdProduct = await api.listings.create(payload);

      setListings(prev => [createdProduct, ...prev]);

      // Update user's listing count locally if needed (or refetch user)
      if (user) {
        const updatedUser = { ...user, listingsCount: user.listingsCount + 1 };
        setUser(updatedUser);
        localStorage.setItem('campus_market_user', JSON.stringify(updatedUser));
      }

      navigate('/');
    } catch (e) {
      console.error("Failed to create listing:", e);
      alert("Failed to create listing. Please try again.");
    }
  };

  const handleUpdateListing = async (listingId: string, productData: Partial<Product>) => {
    try {
      if (!user) return;
      const updatedProduct = await api.listings.update(listingId, productData);
      setListings(prev => prev.map(p => p.id === listingId ? updatedProduct : p));
      navigate(`/listing/${listingId}`);
    } catch (e) {
      console.error("Failed to update listing:", e);
      alert("Failed to update listing. Please try again.");
    }
  };

  const handleDeleteListing = async (listingId: string) => {
    try {
      if (!user) return;
      await api.listings.delete(listingId);
      setListings(prev => prev.filter(p => p.id !== listingId));
      navigate('/profile');
    } catch (e) {
      console.error("Failed to delete listing:", e);
      alert("Failed to delete listing.");
    }
  };

  const checkGuestAction = (action: string) => {
    if (user?.isGuest) {
      setGuestModal({ isOpen: true, actionText: action });
      return false;
    }
    return true;
  };

  const handleGuestSignUp = () => {
    setGuestModal({ isOpen: false, actionText: '' });
    navigate('/login');
  };


  if (!initialized) return null;

  // Routing Logic
  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  if (user && !user.isOnboarded && location.pathname !== '/select-college') {
    return <Navigate to="/select-college" replace />;
  }

  const showNavbar = user?.isOnboarded &&
    !['/select-college', '/create-listing', '/login'].includes(location.pathname) &&
    !location.pathname.startsWith('/listing/');

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-brand-bg text-white overflow-x-hidden">
      <div className="flex-1 pb-20">
        <Routes>
          <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
          <Route path="/" element={<HomeScreen user={user} listings={listings} />} />
          <Route path="/select-college" element={<CollegeSelectionScreen onSelect={handleOnboard} />} />
          <Route path="/profile" element={<ProfileScreen user={user} listings={listings} onLogout={handleLogout} onGuestAction={checkGuestAction} />} />
          <Route path="/user/:userId" element={<ProfileScreen user={user} listings={listings} onLogout={handleLogout} onGuestAction={checkGuestAction} />} />
          <Route path="/inbox" element={<InboxScreen user={user} />} />
          <Route path="/listing/:id" element={<ListingDetailScreen user={user} listings={listings} onDelete={handleDeleteListing} onGuestAction={checkGuestAction} />} />
          <Route path="/create-listing" element={<CreateListingScreen
            user={user}
            onCreate={(data) => {
              if (checkGuestAction('post a listing')) {
                handleCreateListing(data);
              }
            }}
          />} />
          <Route path="/edit-listing/:id" element={<CreateListingScreen
            user={user}
            listings={listings}
            onUpdate={(id, data) => {
              if (checkGuestAction('edit listings')) {
                handleUpdateListing(id, data);
              }
            }}
          />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {showNavbar && <Navbar user={user} onGuestAction={checkGuestAction} />}

      <GuestModal
        isOpen={guestModal.isOpen}
        onClose={() => setGuestModal({ ...guestModal, isOpen: false })}
        onSignUp={handleGuestSignUp}
        actionText={guestModal.actionText}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
