import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <HeroCarousel />
        <Features />
        <Stats />
        <WhyChooseUs />
        <Clients />
        <CTA />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
