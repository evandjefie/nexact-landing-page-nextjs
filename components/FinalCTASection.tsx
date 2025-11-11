import React from 'react';
import Image from 'next/image';
import MotionSection from './MotionSection';

const FinalCTASection: React.FC = () => {
  // Array of profile images for the circular display
  const profileImages = [
    "/img/nexact-student (1).svg",
    "/img/nexact-student (2).svg",
    "/img/nexact-student (3).svg",
    "/img/nexact-student (4).svg",
    "/img/nexact-student (5).svg",
    "/img/nexact-student (6).svg",
    "/img/nexact-student (7).svg",
    "/img/nexact-student (8).svg",
    "/img/nexact-student (9).svg",
    // "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    // "/img/nexact-student (2).jpg",
    // "/img/nexact-student (4).jpg",
    // "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
    // "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    // "/img/nexact-student (3).jpg",
    // "/img/nexact-student (1).jpg",
  ];

  return (
    <MotionSection className="py-16 lg:py-24 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-6">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] leading-tight">
                Commencer dès maintenant à vous évaluer
              </h2>
              <p className="text-[#282828] opacity-70 leading-relaxed">
                Faites le premier pas vers la croissance en mesurant vos compétences dès aujourd’hui.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.nexact.ci/login"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1" style={{ backgroundColor: 'var(--primary)' }}
              >
                C&apos;est parti
              </a>
            </div>
          </div>

          {/* Right Column - Circular Profile Layout */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 ">
                {profileImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-auto bg-gray-200 rounded-full"
                    style={{
                      transform: index === 4 ? 'scale(1.2)' : 'scale(1)'
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Professional ${index + 1}`}
                      className="w-full h-full bg-gray-200 object-cover rounded-full object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default FinalCTASection;