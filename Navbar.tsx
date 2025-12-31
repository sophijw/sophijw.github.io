
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHome ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md border-b border-zinc-800'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-6">
          {!isHome && (
            <Link 
              to="/" 
              className="p-2 -ml-2 rounded-full text-zinc-500 hover:text-blue-600 hover:bg-zinc-900 transition-all group flex items-center gap-2"
              aria-label="Back to home"
            >
              <ArrowLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-black uppercase tracking-widest hidden md:inline">
                Back
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;