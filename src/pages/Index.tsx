import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import HelpSection from '@/components/HelpSection';
import TransparencySection from '@/components/TransparencySection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <HelpSection />
      <TransparencySection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
