'use client';
import React from 'react';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-[#F4F4FB] py-20 lg:py-20 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center px-8 md:px-24">
          {/* Left Column - Text Content */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-6 max-w-xl">
              <div className="inline-block text-white px-6 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'var(--secondary)' }}>
                Avantages illimités
              </div>              
              <h1 className="font-clash text-4xl lg:text-5xl xl:text-6xl font-bold text-[#282828] leading-tight">
                Devenez un citoyen numérique actif et compétitif
              </h1>
              <p className="font-nunito text-lg text-[#282828] opacity-80 leading-relaxed">
                Évaluez, développez et certifiez vos compétences numériques pour être plus efficace au travail, plus autonome en ligne et plus engagé dans votre communauté.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://staging.nexact.ci/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1" style={{ backgroundColor: 'var(--primary)' }}
              >
                Commencer
              </a>
              <a 
                href="#howitwork"
                className="border-2 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:text-white"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
              >
                Comment ça fonctionne
              </a>
            </div>            
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="flex-1">
            <div className="aspect-video w-full bg-gray-200 rounded-2xl">
              <Image
                src="/img/nexact-dashboard.png"
                alt="Dashboard NEXACT"
                className="w-full object-contain rounded-lg"
                width={800}
                height={450}
              />
            </div>
          </div>
          {/* <div className="relative lg:absolute lg:right-0 lg:w-[45%] xl:w-[40%]">
            <div className="bg-white rounded-3xl shadow-2xl p-6 relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-[#5454c2]/20 to-[#ff7e14]/20 blur-3xl top-0 left-0 rounded-full"></div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-clash text-xl font-bold text-[#282828]">Vue d'ensemble</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#5454c2] rounded-xl flex items-center justify-center">
                      <BarChart3 size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#F5F9FF] to-white p-4 rounded-xl border border-[#5454c2]/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={18} className="text-[#5454c2]" />
                      <span className="text-sm font-medium text-[#282828]">Progression</span>
                    </div>
                    <div className="text-2xl font-bold text-[#5454c2]">85%</div>
                    <div className="text-sm text-green-500 flex items-center gap-1">
                      <TrendingUp size={14} />
                      +15%
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#FFF7ED] to-white p-4 rounded-xl border border-[#ff7e14]/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={18} className="text-[#ff7e14]" />
                      <span className="text-sm font-medium text-[#282828]">Temps</span>
                    </div>
                    <div className="text-2xl font-bold text-[#ff7e14]">12h</div>
                    <div className="text-sm text-green-500 flex items-center gap-1">
                      <TrendingUp size={14} />
                      +5h
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#5454c2] to-[#ff7e14] h-40 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative text-white text-center space-y-2">
                    <div className="font-clash text-lg font-bold">Statistiques en direct</div>
                    <p className="text-sm text-white/80">Mise à jour en temps réel</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;