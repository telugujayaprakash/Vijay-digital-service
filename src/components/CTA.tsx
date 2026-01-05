import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const benefits = [
    "Free consultation & strategy session",
    "Custom digital marketing solutions",
    "Proven results & ROI tracking",
    "Dedicated account manager"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 via-transparent to-blue-100/20"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-600 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/20">
              Ready to Grow?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Transform Your Digital Presence Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have boosted their online growth with our expert digital marketing services.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-200/50 shadow-lg hover:shadow-xl hover:border-cyan-400/70 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors duration-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400/50 bg-white text-cyan-600 font-semibold rounded-xl shadow-lg hover:border-cyan-400/70 hover:bg-cyan-50 hover:shadow-xl transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
