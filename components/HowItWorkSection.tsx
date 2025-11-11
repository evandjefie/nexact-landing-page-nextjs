
import React from 'react';
import Image from 'next/image';
import MotionSection from './MotionSection';

const HowItWorkSection: React.FC = () => {
  const steps = [
    {
      number: "ÉTAPE 01",
      title: "Testez",
      description: "Évaluez vos compétences de façon ludique"
    },
    {
      number: "ÉTAPE 02",
      title: "Progressez",
      description: "Suivez un parcours simple, adapté à votre rythme"
    },
    {
      number: "ÉTAPE 03",
      title: "Obtenez votre badge",
      description: "Certificat valorisable dans votre CV et vos démarches"
    },
  ];
  
  return (
    <MotionSection id="howitwork" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 ">
        {/* Conteneur pour le contenu et l'image (anciennement grid lg:grid-cols-2) */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contenu */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
              Comment ça marche
            </h2>
            <p className="text-[#282828] opacity-70 text-lg font-medium leading-relaxed">
              Nous avons conçu un parcours fluide, étape par étape, qui élimine le stress du démarrage, en vous guidant à travers chaque étape avec clarté afin que vous puissiez vous concentrer sur ce qui compte vraiment : obtenir des résultats en toute simplicité.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="aspect-video w-full rounded-2xl">
              <Image
                src="/img/nexact-how-it-works.svg"
                alt="Bibliothèque et étude"
                className="w-full object-cover rounded-lg"
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
        
        {/* Conteneur pour les étapes (anciennement grid md:grid-cols-2 lg:grid-cols-3) */}
        <div className="flex flex-wrap gap-8 max-w-7xl mx-auto mt-16">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 min-w-[300px] bg-[#F2F5F7] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full bg-purple-primary/10 rounded-2xl flex items-center mb-6">
                <span className="bg-[#ff7e14] text-white px-3 py-1 rounded text-sm font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#282828] text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-[#282828] opacity-70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default HowItWorkSection;