
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONS, MOCK_COLLEGES, DEFAULT_PRODUCT_IMAGE, LEGACY_DEFAULT_PRODUCT_IMAGE } from '../constants';
import { User, Product } from '../types';

interface Props {
  user: User | null;
  listings: Product[];
}

const HomeScreen: React.FC<Props> = ({ user, listings }) => {
  const navigate = useNavigate();
  const categories = ['All', 'Books', 'Electronics', 'Furniture', 'Clothing'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price_low' | 'price_high'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCollege = MOCK_COLLEGES.find(c => c.id === user?.collegeId);

  const filteredListings = useMemo(() => {
    let result = [...listings];

    // Filter by College
    if (user?.collegeId) {
      result = result.filter(item => item.collegeId === user.collegeId);
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'price_low') {
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      } else if (sortBy === 'price_high') {
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      } else {
        // newest (default)
        if (a.created_at && b.created_at) {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        return 0;
      }
    });

    return result;
  }, [listings, user?.collegeId, selectedCategory, sortBy, searchQuery]);



  return (
    <div className="flex flex-col min-h-full pb-20">
      {/* Header */}
      <div className="flex items-center bg-brand-bg p-4 pb-2 justify-between sticky top-0 z-20 backdrop-blur-md bg-brand-bg/95 border-b border-brand-input/50">
        <div className="flex flex-col">
          <p className="text-brand-muted text-xs uppercase font-bold tracking-widest">At your campus</p>
          <h2 className="text-white text-lg font-bold leading-tight truncate max-w-[200px]">
            {currentCollege?.name || 'Marketplace'}
          </h2>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button
            onClick={() => {
              if (user?.isGuest) {
                navigate('/login');
              } else {
                navigate('/inbox');
              }
            }}
            className="h-12 w-12 flex items-center justify-center bg-transparent text-white"
          >
            {ICONS.Tray}
          </button>
        </div>
      </div>

      {/* Guest Signup Hint */}
      {user?.isGuest && (
        <div className="mx-4 mt-2 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">Guest Mode</p>
            <p className="text-white text-sm">Sign up to post items and message sellers!</p>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-lg shadow-primary/20"
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Search */}
      <div className="px-4 py-3">
        <div className="flex h-12 w-full items-stretch rounded-xl bg-brand-input">
          <div className="text-brand-muted flex items-center justify-center pl-4">
            {ICONS.MagnifyingGlass}
          </div>
          <input
            placeholder={`Search ${currentCollege?.name || 'Campus'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-transparent text-white focus:ring-0 placeholder:text-brand-muted px-4 pl-2 text-base font-normal"
          />
        </div>
      </div>

      {/* Chips */}
      <div className="flex gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex h-8 shrink-0 items-center justify-center rounded-lg px-4 cursor-pointer transition-colors border ${selectedCategory === cat
              ? 'bg-primary border-primary text-white'
              : 'bg-brand-input border-transparent text-brand-muted hover:bg-brand-border'
              }`}
          >
            <p className="text-sm font-medium">{cat}</p>
          </div>
        ))}
      </div>

      {/* Sorting Control */}
      <div className="flex px-4 py-2 justify-end items-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="bg-transparent text-brand-muted text-sm border-none focus:ring-0 cursor-pointer font-medium"
        >
          <option value="newest">Newest first</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>

      {/* Main Feed Grid */}
      <div className="flex-1 px-4">
        {filteredListings.length === 0 ? (
          <div className="py-20 text-center text-brand-muted">
            <p>No listings found.</p>
            <button
              onClick={() => navigate('/create-listing')}
              className="text-primary font-bold mt-2"
            >
              Post something!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 pb-4">
            {filteredListings.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-2 cursor-pointer group"
                onClick={() => navigate(`/listing/${product.id}`)}
              >
                <div
                  className="w-full aspect-square bg-cover bg-center rounded-2xl shadow-lg transition-transform group-hover:scale-[1.02] border border-white/5"
                  style={{
                    backgroundImage: `url("${(product.images?.[0] && product.images[0] !== LEGACY_DEFAULT_PRODUCT_IMAGE && product.images[0].trim() !== "")
                      ? product.images[0]
                      : DEFAULT_PRODUCT_IMAGE
                      }")`
                  }}
                />
                <div className="px-1">
                  <p className="text-white text-[11px] font-bold truncate leading-tight">{product.name}</p>
                  <p className="text-brand-muted text-[10px] mt-0.5 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
