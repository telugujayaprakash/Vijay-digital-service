import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import Features from '@/components/Features';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <Features />
        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
