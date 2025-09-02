import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-8 md:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mx-2 md:mx-16">
            {/* Left Column - Images */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Top left image */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/img/nexact-student (1).jpg"
                      alt="Professional man with tablet"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/img/nexact-student (2).jpg"
                      alt="Smiling woman"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                {/* Right side image */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/img/nexact-student (4).jpg"
                      alt="Professional woman in orange"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/img/nexact-student (3).jpg"
                      alt="Professional woman in orange"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="font-clash text-3xl lg:text-4xl font-bold text-[#282828] leading-tight">
                  Pourquoi c’est essentiel
                </h2>
                <p className="font-nunito font-regular text-lg text-[#282828] text-justify opacity-80 leading-relaxed">
                  Aujourd’hui, savoir utiliser le numérique ne suffit plus.<br/>
                  Il faut savoir protéger ses données, maîtriser les bons outils, analyser l’information et participer activement aux décisions.<br/>
                  Grâce à des évaluations interactives et des retours personnalisés, NEXACT rend le développement des compétences pratique et enrichissant, vous aidant à suivre vos progrès, à être reconnu et à rester compétitif dans un monde de plus en plus numérique.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="font-clash text-xl lg:text-2xl font-bold text-[#282828] leading-tight">
                  Notre référentiel de compétences
                </h4>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                <div className="space-y-2">
                  <h4 className="font-clash text-4xl lg:text-5xl font-bold text-[#282828] leading-tight">5</h4>
                  <div className="font-nunito text-lg text-[#282828] opacity-70">Domaines</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-clash text-4xl lg:text-5xl font-bold text-[#282828] leading-tight">20</h4>
                  <div className="font-nunito text-lg text-[#282828] opacity-70">Compétences</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-clash text-4xl lg:text-5xl font-bold text-[#282828] leading-tight">5</h4>
                  <div className="font-nunito text-lg text-[#282828] opacity-70">Niveau de certification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;