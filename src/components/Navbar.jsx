import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: '3D Services', path: '/3d-services' },
    // { name: 'Drone Services', path: '/drone-services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://www.dropbox.com/scl/fi/mnb2v7f7qv33w3b546l9c/3d60-Final-V3.svg?rlkey=lztuzw6hjgi2ehwj28iq2kwha&st=28hr7mn5&raw=1"
              alt="3D60 Logo"
              className="h-24 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-800"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;