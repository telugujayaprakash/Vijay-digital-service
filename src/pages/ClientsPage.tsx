import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Our Clients
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with amazing brands across industries.
            </p>
          </div>
        </section>

        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;
