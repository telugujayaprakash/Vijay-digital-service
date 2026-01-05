import { Shield, Zap, Users, TrendingUp, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: '8+ years of digital marketing experience with a track record of delivering exceptional results for businesses across industries.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Data-Driven Approach',
      description: 'Every strategy is backed by analytics and insights. We use advanced tools to optimize campaigns for maximum ROI.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Work directly with experienced professionals who become an extension of your marketing team.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Transparent reporting with clear KPIs and metrics. You see exactly how your investment is performing.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Quick Implementation',
      description: 'Get started quickly with our streamlined processes. Most campaigns launch within 7-14 days.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in digital marketing with multiple industry awards and certifications.',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-600 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Your Success is Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            Discover what sets Vijay Digital Services apart and why businesses choose us for their digital marketing needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 border border-cyan-200/50 hover:border-cyan-400/70 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg shadow-cyan-400/20 group-hover:shadow-xl group-hover:shadow-cyan-400/30 group-hover:scale-110 transition-all duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white via-cyan-50/50 to-white backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-cyan-200/50 shadow-2xl shadow-cyan-400/10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-cyan-600 font-medium">
                <Shield className="w-5 h-5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI Results</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 font-medium">
                <Users className="w-5 h-5" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
