import React, { useState } from 'react';
import { User } from '../types';
import { api } from '../api';

interface Props {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let user: User;
      if (isLogin) {
        user = await api.auth.login(email, password);
      } else {
        if (!name) {
          setError('Name is required for signup');
          setLoading(false);
          return;
        }
        user = await api.auth.signup(email, password, name);
      }
      onLogin(user);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex-1 min-w-[300px] bg-brand-input/30 backdrop-blur-sm border border-white/5 p-8 rounded-2xl flex flex-col gap-4">
      <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-brand-muted leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
              <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42c0,14.74,22.38,27.71,63,36.52,8.13,1.8,16.58,3.23,25.13,4.24,2.5,1.21,5,2.46,7.45,3.77a67.31,67.31,0,0,0,65,0c2.47-1.31,4.95-2.56,7.45-3.77,8.55-1,17-2.44,25.13-4.24,40.67-9,63-22.12,63-36.86v-48.42l27.76-14.81a8,8,0,0,0,0-14.12ZM128,41.22l95.21,50.78L128,142.78,32.79,92ZM224,166.29c0,5.85-18.06,16.71-55.13,24.87-11.45,2.54-24.1,4.42-37.5,5.6l-3.37,1.8a51.31,51.31,0,0,1-49.49,0l-3.37-1.8c-13.4-1.18-26.05-3.06-37.5-5.6C30.06,183,12,172.14,12,166.29V126.41l54.43,29a170.18,170.18,0,0,0,61.57,11.33,170.18,170.18,0,0,0,61.57-11.33l54.43-29Z"></path>
            </svg>
          </div>
          <span className="text-2xl font-black text-white tracking-tight">ULink</span>
        </div>
        <button
          onClick={() => { setIsLogin(true); setShowAuth(true); }}
          className="text-primary font-bold hover:text-primary/80 transition-colors"
        >
          Log In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background with Gradient Overlays */}
        <div className="absolute inset-4 rounded-[40px] overflow-hidden">
          <img
            src="/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Campus Background"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/20" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Your Campus<br />Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Buy and sell textbooks, dorm gear, and more with students at your university.
            </p>
          </div>

          <button
            onClick={() => { setIsLogin(false); setShowAuth(true); }}
            className="px-10 py-5 bg-primary rounded-2xl text-white font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign Up Right Now
          </button>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#4ade80" viewBox="0 0 256 256">
              <path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm-73.37,136a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,156.69l61.37-61.38a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Verified University Network</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto w-full px-8 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Why use ULink?</h2>
          <p className="text-xl text-brand-muted font-medium">The safest way to trade on campus.</p>
        </div>

        <div className="flex flex-wrap gap-6">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm-73.37,136a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,156.69l61.37-61.38a8,8,0,0,1,11.32,11.32Z"></path></svg>}
            title="Verified Students"
            desc="Only @edu emails allowed. Trade with confidence knowing everyone is a peer."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-80-56a12,12,0,1,1-12-12A12,12,0,0,1,128,152Z"></path></svg>}
            title="Secure Payments"
            desc="Integrated payment systems ensure your money is safe until you get the item."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.1,0A254.19,254.19,0,0,0,174,218.25c27.49-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,1,1,144,0C200,161.25,144.53,209,128,222Z"></path></svg>}
            title="Local Pickup"
            desc="Meet on campus at designated safe spots. No shipping, no wait times."
          />
        </div>
      </section>

      {/* Auth Modal/Overlay */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
          <div className="w-full max-w-md flex flex-col items-center gap-8 bg-brand-bg p-10 rounded-3xl border border-white/10 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-6 right-6 text-brand-muted hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
            </button>

            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl font-black text-white">{isLogin ? 'Welcome Back' : 'Join ULink'}</h2>
              <p className="text-brand-muted text-center">Enter your details to continue.</p>
            </div>

            <div className="w-full bg-brand-input/50 p-1 rounded-xl flex">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isLogin ? 'bg-brand-bg text-primary shadow-sm' : 'text-brand-muted'}`}
              >
                Log In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isLogin ? 'bg-brand-bg text-primary shadow-sm' : 'text-brand-muted'}`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleAuth} className="w-full flex flex-col gap-4">
              {!isLogin && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-brand-muted uppercase ml-1">Full Name</label>
                  <input
                    type="text"
                    required={!isLogin}
                    className="w-full h-14 rounded-xl bg-brand-input border-none text-white p-4 focus:ring-2 focus:ring-primary transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-brand-muted uppercase ml-1">University Email</label>
                <input
                  type="email"
                  required
                  className="w-full h-14 rounded-xl bg-brand-input border-none text-white p-4 focus:ring-2 focus:ring-primary transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-brand-muted uppercase ml-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full h-14 rounded-xl bg-brand-input border-none text-white p-4 focus:ring-2 focus:ring-primary transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 mt-4 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center p-0"
              >
                {loading ? <div className="animate-spin size-5 border-2 border-white border-t-transparent rounded-full" /> : (isLogin ? 'Log In' : 'Create Account')}
              </button>

              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-brand-input" />
                <span className="text-brand-muted text-xs font-bold uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-brand-input" />
              </div>

              <button
                type="button"
                onClick={() => {
                  onLogin({
                    id: 'guest',
                    name: 'Guest User',
                    email: 'guest@example.com',
                    handle: 'guest',
                    avatar: '',
                    collegeId: '',
                    isOnboarded: false,
                    joined: new Date().toISOString(),
                    listingsCount: 0,
                    followersCount: 0,
                    followingCount: 0,
                    isGuest: true
                  });
                }}
                className="w-full h-14 rounded-xl bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center border border-white/5"
              >
                Continue as Guest
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
