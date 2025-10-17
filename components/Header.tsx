"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Nouvel état pour le défilement

  // Utilise un effet pour gérer la classe de défilement
  useEffect(() => {
    const handleScroll = () => {
      // Détecte si la position de défilement verticale (Y) est supérieure à 0
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajoute l'écouteur d'événement au chargement du composant
    window.addEventListener('scroll', handleScroll);

    // Nettoie l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau vide [] garantit que l'effet ne s'exécute qu'une seule fois après le rendu initial

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#f0f3fa]'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 sm:px-6 lg:px-8">

        <div className="flex items-center">
          <Image src='/img/logo nexact.svg' alt="NEXACT Logo" className="h-14 w-auto" width={128} height={32} />
        </div>

        {/* Desktop Navigation & CTAs (hidden sur mobile) */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#hero" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Accueil
            </a>
            <a href="#about" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Pourquoi
            </a>
            <a href="#benefits" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Avantages
            </a>
            {/* <a href="#howitwork" className="font-nunito text-base text-[#282828] hover:text-[#5454c2] transition-colors">
              Comment ça marche
            </a> */}
          </nav>
          
          {/* Langue et boutons d'appel à l'action */}
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <div className="relative flex items-center">
              {/* <span className="text-gray-600 mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></span> */}
              {/* <Languages className='w-8 h-4 text-[#282828] opacity-70'/>
              <select className="font-nunito bg-transparent border-0 pr-6 text-[#282828] text-sm focus:outline-none focus:ring-0 appearance-none">
                <option value="fr">French</option>
                <option value="en">English</option>
              </select> */}
              {/* <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div> */}
            </div>

            {/* Boutons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://app.nexact.ci/login"
                rel="noopener noreferrer"
                className="font-nunito text-[#ff7e14] border border-[#ff7e14] px-6 py-2 rounded-full text-sm hover:bg-[#ff7e14] hover:text-white transition-colors"
              >
                Se connecter
              </a>
              <a
                href="https://app.nexact.ci/signup"
                rel="noopener noreferrer"
                className="font-nunito bg-[#ff7e14] hover:bg-[#e6711a] text-white px-6 py-2 rounded-full transition-colors text-sm font-medium"
              >
                Créer un compte
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu button (visible sur mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#282828] hover:text-[#5454c2] bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile (affiché ou masqué) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 w-full bg-white rounded-b-2xl shadow-lg transition-transform duration-300 transform">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
              Accueil
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
              Pourquoi
            </a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
              Avantages
            </a>
            {/* <a href="#howitwork" onClick={() => setIsMenuOpen(false)} className="font-nunito text-lg text-[#282828] hover:text-[#5454c2] transition-colors">
              Comment ça marche
            </a> */}
            <div className="flex flex-col space-y-4 pt-6 border-t border-gray-100">
                <a
                  href="https://app.nexact.ci/login"
                  rel="noopener noreferrer"
                  className="font-nunito text-center text-[#ff7e14] border border-[#ff7e14] px-8 py-4 rounded-full text-base hover:bg-[#ff7e14] hover:text-white transition-colors"
                >
                  Se connecter
                </a>
                <a
                  href="https://app.nexact.ci/signup"
                  rel="noopener noreferrer"
                  className="font-nunito text-center bg-[#ff7e14] hover:bg-[#e6711a] text-white px-8 py-4 rounded-full transition-colors font-medium"
                >
                  Créer un compte
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;