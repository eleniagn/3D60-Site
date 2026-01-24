import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="https://www.dropbox.com/scl/fi/mnb2v7f7qv33w3b546l9c/3d60-Final-V3.svg?rlkey=lztuzw6hjgi2ehwj28iq2kwha&st=28hr7mn5&raw=1" alt="3D60 Logo" className="h-24 w-auto object-contain" />
            <p className="mt-4 text-slate-400 text-sm">Professional - 3D⁶⁰ services.</p>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Services</span>
            <div className="space-y-2">
              <Link to="/3d-services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                3D Design
              </Link>
              <Link to="/3d-services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                3D Prototyping
              </Link>
              <Link to="/3d-services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                3D Printing
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Company</span>
            <div className="space-y-2">
              <Link to="/portfolio" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Get a Quote
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail size={16} />
                <span>3d60gr@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone size={16} />
                <span>+30 697 842 9627</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin size={16} />
                <span>Athens, Greece</span>
              </div>
            </div>
          </div>
        </div>

       <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400 text-sm relative flex flex-col sm:block">

          {/* Powered by */}
        <div className="text-center align-middle sm:absolute sm:left-0 ">
            Powered by{" "}
            <a href="https://entheum.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Entheum
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center mt-2 sm:mt-0">© 2026 3D⁶⁰. All rights reserved.</p>

        </div>

      </div>
    </footer>;
};
export default Footer;