'use client';
import React from 'react';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
      <section id="hero" className="bg-[#F4F4FB] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 mx-8 md:mx-0">
            {/* Left Column - Text Content */}
            <div className="relative z-10 space-y-8 flex-1">
              <div className="space-y-6 max-w-xl">
                <div className="inline-block text-white px-6 py-2 rounded-full text-sm font-medium mb-6 bg-[#5454c2]">
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
                  href="https://app.nexact.ci/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 bg-[#ff7e14] hover:bg-[#e6711a]"
                >
                  Commencer
                </a>
                <a
                  href="#howitwork"
                  className="border-2 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:text-white border-[#ff7e14] text-[#ff7e14] hover:bg-[#ff7e14]"
                >
                  Comment ça fonctionne
                </a>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative z-10 flex-1 space-y-8">
              <div className="aspect-video w-full h-auto bg-gray-200 rounded-lg">
                <Image
                  src="/img/nexact-dashboard.svg"
                  alt="Dashboard NEXACT"
                  className="w-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;