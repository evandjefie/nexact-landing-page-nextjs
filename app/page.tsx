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
      {/* SEO: SiteNavigationElement for sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': [
              {
                '@type': 'SiteNavigationElement',
                'name': 'Pourquoi Nexact',
                'url': 'https://nexact.ci/#about'
              },
              {
                '@type': 'SiteNavigationElement',
                'name': "S'inscrire",
                'url': 'https://app.nexact.ci/signup'
              },
              {
                '@type': 'SiteNavigationElement',
                'name': 'Se connecter',
                'url': 'https://app.nexact.ci/login'
              },
              {
                '@type': 'SiteNavigationElement',
                'name': 'Termes et conditions',
                'url': 'https://nexact.ci/terms'
              }
            ]
          })
        }}
      />
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