import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="container mx-auto px-4 text-center relative z-10 animate-slide-in">
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span className="text-sm font-semibold text-slate-600">
                Our Clients
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
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
