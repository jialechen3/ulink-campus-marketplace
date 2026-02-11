
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ICONS } from '../constants';
import { User } from '../types';

interface Props {
  user: User | null;
  onGuestAction?: (action: string) => void;
}

const Navbar: React.FC<Props> = ({ user, onGuestAction }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: ICONS.House },
    { label: 'Post', path: '/create-listing', icon: ICONS.PlusSquare },
    { label: 'Inbox', path: '/inbox', icon: ICONS.Tray },
    { label: 'Profile', path: '/profile', icon: ICONS.User },
  ];

  const handleNav = (item: typeof navItems[0]) => {
    if (user?.isGuest && (item.label === 'Post' || item.label === 'Inbox')) {
      onGuestAction?.(item.label === 'Post' ? 'post items' : 'view your inbox');
      return;
    }
    navigate(item.path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-brand-nav px-4 pb-6 pt-2">
      <div className="flex gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive ? 'text-white' : 'text-brand-muted'
                }`}
            >
              <div className="flex h-8 items-center justify-center">
                {item.icon}
              </div>
              <p className="text-xs font-medium leading-normal tracking-[0.015em]">
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
