import { Check } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Check,
      title: 'Sans carte bancaire',
    },
    {
      icon: Check,
      title: 'Résultats immédiats',
    },
    {
      icon: Check,
      title: 'Compatible smartphone',    }
  ];

  return (
    <section id="features" className="py-12" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 text-white">
              <div className="p-3">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-nunito font-semibold text-lg">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;