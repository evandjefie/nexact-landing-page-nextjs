'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "En quelques semaines, j’ai appris à sécuriser mes comptes et j’ai pu participer à une campagne citoyenne en ligne.",
      name: "Aïcha",
      role: "Etudiante - Abidjan",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "L'intégration de NEXACT à mon programme de cours a été une véritable révolution. Mes élèves maîtrisent mieux les outils numériques et apprécient de suivre leurs progrès grâce au système de feedback de la plateforme.",
      name: "M. Kouadio Richard",
      role: "Professeur de Lycée",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "NEXACT m'a permis de reprendre confiance en moi comprendre où j'en étais sur le plan numérique et m'a guidé sur mes axes d'amélioration. Les évaluations étaient pratiques, et obtenir un badge m'a procuré un réel sentiment d'accomplissement !",
      name: "Ouattara",
      role: "University Student",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "L'intégration de NEXACT à mon programme de cours a été une véritable révolution. Mes élèves maîtrisent mieux les outils numériques et apprécient de suivre leurs progrès grâce au système de feedback de la plateforme.",
      name: "Mme. Attoumgbre Benedi",
      role: "School Teacher",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Helper function to get the next testimonial index safely
  const getNextIndex = (current: number) => {
    return (current + 1) % testimonials.length;
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
            Témoignages
          </h2>
          <p className="text-[#282828] opacity-70 leading-relaxed max-w-2xl mx-auto">
            Nous sommes fiers de compter un nombre croissant de clients satisfaits. Voici ce qu'ils pensent de leur collaboration avec le NEXACT
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative flex items-center justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[currentTestimonial, getNextIndex(currentTestimonial)].map((index) => (
              <div key={index} className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[200px] flex items-center transform transition-all duration-300 hover:scale-105">
                <div className="w-full">
                  <blockquote className="font-nunito text-[#282828] opacity-80 leading-relaxed mb-8 text-lg">
                    "{testimonials[index].text}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[index].avatar} 
                      alt={testimonials[index].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-clash font-semibold text-[#282828]">
                        {testimonials[index].name}
                      </div>
                      <div className="font-nunito text-sm text-[#282828] opacity-70">
                        {testimonials[index].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#021A0A] text-white transition-colors"
          >
            <ChevronLeft size={20} className="text-[#282828] hover:text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#021A0A] text-white transition-colors"
          >
            <ChevronRight size={20} className="text-[#282828] hover:text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-[#5454c2]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="font-nunito text-[#5454C2]">
            Note moyenne: ★★★★☆ 4.6/5 (1,542) - Basé sur les retours de nos premiers testeurs.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;