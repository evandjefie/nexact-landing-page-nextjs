'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            {/* <div className="font-clash text-2xl font-bold text-[#5454c2]">NEXACT</div> */}
            <img src='/img/logo nexact.svg' alt="NEXACT Logo" className="ml-2 h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#hero" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Accueil
            </a>
            <a href="#about" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Pourquoi
            </a>
            <a href="#benefits" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Avantages
            </a>
            <a href="#howitwork" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Comment ça marche
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <select className="font-nunito bg-white rounded-full px-4 py-2 text-[#282828] text-sm focus:outline-none focus:ring-2 focus:ring-[#5454c2] focus:border-transparent appearance-none pr-8">
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <a 
              href="https://staging.nexact.ci/login"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nunito border-2 border-[#ff7e14] rounded-full text-[#ff7e14] px-6 py-2 hover:bg-[#ff7e14] hover:text-white transition-colors"
              >
              Se connecter
            </a>
            <a 
              href="https://staging.nexact.ci/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nunito bg-[#ff7e14] hover:bg-[#e6711a] text-white px-6 py-2 rounded-full transition-colors font-medium"
              >
              Créer un compte
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#282828] hover:text-[#5454c2] bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 px-4 bg-white rounded-2xl shadow-xl mt-4">
            <div className="flex flex-col space-y-6">
              <a href="#home" className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
                Accueil
              </a>
              <a href="#about" className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
                À propos
              </a>
              <a href="#features" className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
                Caractéristiques
              </a>
              <div className="flex flex-col space-y-4 pt-6 border-t border-gray-100">
                <select className="font-nunito w-full bg-white rounded-full px-4 py-3 text-[#282828] text-base focus:outline-none focus:ring-2 focus:ring-[#5454c2] focus:border-transparent appearance-none">
                  <option value="fr">French</option>
                  <option value="en">English</option>
                </select>
                <a 
                href="https://staging.nexact.ci/login"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nunito w-full border-2 border-[#ff7e14] rounded-full text-[#ff7e14] px-6 py-3 hover:bg-[#ff7e14] hover:text-white transition-colors text-center"
                >
                  Se connecter
                </a>
                <a 
                href="https://staging.nexact.ci/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nunito w-full bg-[#ff7e14] hover:bg-[#e6711a] text-white px-6 py-3 rounded-full transition-colors font-medium text-center"
                >
                  Créer un compte
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;