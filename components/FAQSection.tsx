'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qui sommes-nous ?",
      answer: "L’Institut Delayam est une organisation à but non lucratif qui œuvre pour le renforcement des capacités des citoyens ivoiriens. À travers la plateforme NEXACT, nous voulons outiller chaque citoyen pour qu’il puisse agir, s’exprimer et collaborer, favorisant ainsi une participation citoyenne plus active et constructive."
    },
    {
      question: "Quelle est notre mission ?",
      answer: "L’Institut Delayam est une organisation à but non lucratif qui œuvre pour le renforcement des capacités des citoyens ivoiriens. À travers la plateforme NEXACT, nous voulons outiller chaque citoyen pour qu’il puisse agir, s’exprimer et collaborer, favorisant ainsi une participation citoyenne plus active et constructive."
    },
    {
      question: "Qu'est-ce que NEXACT et à qui s'adresse-t-il ?",
      answer: "NEXACT est une plateforme numérique qui aide les individus à évaluer, améliorer et certifier leurs compétences numériques. Elle s'adresse aux étudiants, aux professionnels, aux demandeurs d'emploi et aux citoyens souhaitant développer leurs compétences numériques."
    },
    {
      question: "Comment fonctionne la certification ?",
      answer: "Notre processus de certification comprend une évaluation initiale, un parcours de formation personnalisé, des examens pratiques et théoriques, puis la délivrance d'un certificat reconnu par plus de 1500 entreprises partenaires."
    },
    {
      question: "L'utilisation de NEXACT est-elle gratuite ?",
      answer: "NEXACT propose une version gratuite avec accès aux évaluations de base et aux badges. Des fonctionnalités premium sont disponibles avec nos plans payants pour un accompagnement plus poussé."
    },
    {
      question: "Dois-je terminer un cours avant de passer une évaluation ?",
      answer: "Non, vous pouvez passer une évaluation à tout moment. Nos tests adaptatifs s'ajustent à votre niveau actuel et vous proposent ensuite des parcours de formation personnalisés selon vos résultats."
    },
    {
      question: "Puis-je utiliser mon badge pour des candidatures ou des CV ?",
      answer: "Absolument ! Nos badges sont reconnus par l'industrie et peuvent être téléchargés, partagés sur LinkedIn, ou inclus dans vos candidatures pour démontrer vos compétences certifiées."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mx-8 md:mx-0">
          {/* Left Column - Header */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
              FAQ
            </h2>
            <p className="max-w-sm text-[#282828] opacity-70 leading-relaxed">
              Vous avez des questions ? Nous avons répondu aux questions les plus fréquentes de nos clients avant de commencer à utiliser NEXACT.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between py-4 hover:text-[#5454c2] transition-colors"
                >
                  <h3 className="text-lg font-medium text-[#282828] pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <Minus size={20} className="text-[#5454c2] flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-[#282828] opacity-50 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="pb-4">
                    <p className="text-[#282828] opacity-70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;