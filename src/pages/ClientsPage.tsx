import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30 text-cyan-300 font-medium text-sm mb-4 shadow-lg shadow-blue-400/10">
              Our Clients
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
