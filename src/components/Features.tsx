import { Search, Share2, Mail, Target, PenTool, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies that drive organic traffic and boost visibility.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build an engaged community and amplify your brand voice across all major social platforms.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Convert leads into loyal customers with personalized email campaigns that deliver results.',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description: 'Maximize your ad spend ROI with data-driven paid campaigns across Google, Meta, and beyond.',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Tell your story through compelling content that educates, engages, and converts your audience.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics and transparent performance reporting.',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-transparent to-blue-50/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-600 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Everything You Need to Grow Online</h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital marketing solutions tailored to your business goals.
            We blend creativity with data to deliver measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 card-hover border border-cyan-200/50 hover:border-cyan-400/70 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
