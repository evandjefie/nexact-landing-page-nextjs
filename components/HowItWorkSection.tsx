
import React from 'react';
import Image from 'next/image';

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
    <section id="howitwork" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur pour le contenu et l'image (anciennement grid lg:grid-cols-2) */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contenu */}
          <div className="flex-1 space-y-6">
            <h2 className="font-clash text-3xl lg:text-4xl font-bold text-text-primary">
              Comment ça marche
            </h2>
            <p className="font-nunito text-lg text-text-secondary leading-relaxed">
              Nous avons conçu un parcours fluide, étape par étape, qui élimine le stress du démarrage, en vous guidant à travers chaque étape avec clarté afin que vous puissiez vous concentrer sur ce qui compte vraiment : obtenir des résultats en toute simplicité.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="aspect-video w-full bg-gray-200 rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Bibliothèque et étude"
                className="w-full object-contain rounded-lg shadow-md"
                width={500}
                height={300}
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
              <h3 className="font-clash text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-nunito text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;