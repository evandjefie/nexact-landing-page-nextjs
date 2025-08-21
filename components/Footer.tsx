import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5454c2] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-6">
              {/* <div className="text-2xl font-bold text-white mb-4">NEXACT</div> */}
              <img src='/img/logo nexact blanc.svg' alt="NEXACT Logo" className=" h-8 w-16 h-full" />
              <p className="text-white opacity-80 leading-relaxed">
                Évaluez, développez et certifiez vos compétences numériques, du débutant à l'expert.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Pourquoi</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Avantages</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Comment ça marche</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Témoignages</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6">Restez au courant</h3>
              <p className="text-white opacity-80 mb-4">
                Recevez les dernières mises à jour sur les compétences numériques, les évaluations et les nouvelles fonctionnalités, directement dans votre boîte de réception.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="w-full bg-[#ff7e14] hover:bg-[#e6711a] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Abonnez-vous maintenant
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white opacity-70 text-sm">
              © 2025 NEXACT. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                Mentions légales
              </a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                Plan du site
              </a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                Accessibilité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;