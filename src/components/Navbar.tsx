import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, MapPin, Store, MessageSquare } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClasses = (path: string) =>
    `flex items-center ${
      location.pathname === path ? 'text-green-600 font-semibold' : 'hover:text-green-600'
    }`;

  return (
    <nav className="relative bg-white shadow-sm py-4 px-6 md:px-10 flex items-center justify-between z-50">
      <Link to="/" className="flex items-center">
        <span className="text-primary font-bold text-xl">Smart Tourism Jharkhand</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/itinerary" className={linkClasses('/itinerary')}>
          <Calendar size={18} className="mr-1" /> Itinerary
        </Link>
        <Link to="/places" className={linkClasses('/places')}>
          <MapPin size={18} className="mr-1" /> Places
        </Link>
        <Link to="/marketplace" className={linkClasses('/marketplace')}>
          <Store size={18} className="mr-1" /> Marketplace
        </Link>
        <Link to="/feedback" className={linkClasses('/feedback')}>
          <MessageSquare size={18} className="mr-1" /> Feedback
        </Link>
        <Link
          to="/admin"
          className={`${
            location.pathname === '/admin'
              ? 'bg-orange-600 text-white'
              : 'bg-accent hover:bg-orange-600 text-black'
          } px-5 py-2 rounded-lg font-medium`}
        >
          Admin
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-4 space-y-2 z-50 animate-slideDown">
          <Link
            to="/itinerary"
            className={linkClasses('/itinerary')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar size={18} className="mr-1" /> Itinerary
          </Link>
          <Link
            to="/places"
            className={linkClasses('/places')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MapPin size={18} className="mr-1" /> Places
          </Link>
          <Link
            to="/marketplace"
            className={linkClasses('/marketplace')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Store size={18} className="mr-1" /> Marketplace
          </Link>
          <Link
            to="/feedback"
            className={linkClasses('/feedback')}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageSquare size={18} className="mr-1" /> Feedback
          </Link>
          <Link
            to="/admin"
            className={`${
              location.pathname === '/admin'
                ? 'bg-orange-600 text-white'
                : 'bg-accent hover:bg-orange-600 text-black'
            } px-5 py-2 rounded-lg font-medium`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
