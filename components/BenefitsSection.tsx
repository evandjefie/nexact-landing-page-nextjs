import { 
  GraduationCap, 
  User, 
  Trophy, 
  Award, 
  Target 
} from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: 'Certification progressive (5 niveaux)',
      description: 'Passez du niveau débutant à expert citoyen'
    },
    {
      icon: User,
      title: 'Parcours personnalisé',
      description: 'Un plan sur mesure selon vos résultats'
    },
    {
      icon: Trophy,
      title: 'Compétences pratiques',
      description: 'Outils et cas d’usage adaptés à la Côte d’Ivoire'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Certificats valorisants pour votre CV et réseaux pro'
    },
    {
      icon: Target,
      title: 'Impact citoyen',
      description: 'Un plan sur mesure selon vos résultats'
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
            Vos avantages immédiats
          </h2>
          <p className="text-lg text-[#282828] opacity-70 max-w-3xl mx-auto">
            Bénéficiez d’avantages que vous pouvez ressentir immédiatement, conçus pour rendre votre voyage plus fluide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap gap-8 max-w-7xl mx-auto justify-center">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex-1 max-w-[450px] min-w-[300px] bg-[#F2F5F7] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#5454C2] rounded-full w-16 h-16 flex items-center justify-center mx-4">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-clash font-semibold text-lg mb-3 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600 font-nunito text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;