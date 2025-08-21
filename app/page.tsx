import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorkSection from '@/components/HowItWorkSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
          <Header />
        
        {/* <main> */}
          <HeroSection />        
          <Features />
          <AboutSection />        
          <BenefitsSection />
          <HowItWorkSection />        
          <TestimonialsSection />
          <FAQSection />        
          <FinalCTASection />
        {/* </main> */}
        
        {/* Footer */}
        <Footer />
      </div>        
    </>
  );
}