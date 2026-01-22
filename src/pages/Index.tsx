import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import OurServicesSection from '@/components/OurServicesSection';
import HowWeSolve from '@/components/HowWeSolve';
import HowWeCompete from '@/components/HowWeCompete';
import OurTeam from '@/components/OurTeam';
import CEOFounder from '@/components/CEOFounder';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <HeroCarousel />
        <OurServicesSection />
        <HowWeSolve />
        <HowWeCompete />
        <OurTeam />
        <CEOFounder />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
