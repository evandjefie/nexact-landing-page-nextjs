import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top left image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/img/nexact-student (1).jpg" 
                    alt="Professional man with tablet" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/img/nexact-student (2).jpg" 
                    alt="Smiling woman" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right side image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/img/nexact-student (4).jpg" 
                    alt="Professional woman in orange" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/img/nexact-student (3).jpg" 
                    alt="Professional woman in orange" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] leading-tight">
                Pourquoi c’est essentiel
              </h2>
              <p className="font-nunito font-regular text-lg text-[#282828] opacity-80 leading-relaxed">
                Aujourd’hui, savoir utiliser le numérique ne suffit plus.<br/>
                Il faut savoir protéger ses données, maîtriser les bons outils, analyser l’information et participer activement aux décisions.<br/>
                Grâce à des évaluations interactives et des retours personnalisés, NEXACT rend le développement des compétences pratique et enrichissant, vous aidant à suivre vos progrès, à être reconnu et à rester compétitif dans un monde de plus en plus numérique.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl lg:text-2xl font-bold text-[#282828] leading-tight">
                Notre référentiel de compétences
              </h4>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#282828] mb-2">5</div>
                <div className="text-sm text-[#282828] opacity-70">Domaines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#282828] mb-2">20</div>
                <div className="text-sm text-[#282828] opacity-70">Compétences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#282828] mb-2">5</div>
                <div className="text-sm text-[#282828] opacity-70">Niveau de certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;