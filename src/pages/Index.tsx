import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <ContactSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
