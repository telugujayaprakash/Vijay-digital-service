import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Megaphone, Target, Users, Palette, BarChart3, Lightbulb, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandStrategyPage = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Brand Positioning',
      description: 'Define your unique market position and differentiate from competitors.',
      details: ['Market research and analysis', 'Competitor positioning study', 'Unique value proposition', 'Brand personality development']
    },
    {
      icon: Palette,
      title: 'Visual Identity',
      description: 'Create a cohesive visual brand identity that resonates with your audience.',
      details: ['Logo design and guidelines', 'Color palette development', 'Typography system', 'Brand asset creation']
    },
    {
      icon: Users,
      title: 'Audience Strategy',
      description: 'Develop detailed audience personas and targeting strategies.',
      details: ['Customer persona creation', 'Audience segmentation', 'Communication strategy', 'Channel selection']
    },
    {
      icon: Lightbulb,
      title: 'Brand Messaging',
      description: 'Craft compelling brand messages that connect with your target audience.',
      details: ['Brand voice and tone', 'Key messaging framework', 'Storytelling strategy', 'Content guidelines']
    }
  ];

  const deliverables = [
    'Brand Strategy Document',
    'Visual Identity Guidelines',
    'Brand Voice & Messaging Guide',
    'Logo & Brand Assets',
    'Brand Implementation Roadmap',
    'Marketing Collateral Templates'
  ];

  const benefits = [
    'Clear brand differentiation in the market',
    'Consistent brand experience across all touchpoints',
    'Stronger customer loyalty and recognition',
    'Improved marketing effectiveness',
    'Higher perceived value and pricing power',
    'Foundation for scalable growth'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <Megaphone className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Brand <span className="text-blue-600">Strategy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Build a memorable brand that resonates with your audience and drives business growth.
                We create comprehensive brand strategies that establish market leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
                  Brand Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-500/20 hover:border-blue-400/70 hover:text-white font-semibold shadow-lg shadow-blue-400/20 hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105">
                  View Brand Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                What You <span className="text-blue-600">Get</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive brand deliverables that provide everything you need for successful brand implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md text-center hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-600">{deliverable}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                Brand Strategy <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Framework</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our systematic approach to building powerful, differentiated brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/50 shadow-lg hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-400/30 group-hover:shadow-blue-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Stats */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Brand Strategy <span className="text-blue-600">Benefits</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  A strong brand strategy is the foundation for all successful marketing efforts.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Build Your Brand
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Brand Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">23%</p>
                    <p className="text-sm text-gray-400">Revenue Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">40%</p>
                    <p className="text-sm text-gray-400">Customer Loyalty</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">65%</p>
                    <p className="text-sm text-gray-400">Brand Recognition</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">3.2x</p>
                    <p className="text-sm text-gray-400">Market Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Brand Strategy <span className="text-blue-600">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A collaborative process that uncovers your brand's true potential.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Research and brand audit' },
                { step: '02', title: 'Strategy', desc: 'Brand positioning and messaging' },
                { step: '03', title: 'Design', desc: 'Visual identity creation' },
                { step: '04', title: 'Implementation', desc: 'Brand rollout and guidelines' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build a Powerful Brand?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a brand strategy that establishes your market leadership and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
                  Start Brand Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 border border-indigo-400/50 hover:border-indigo-400/70">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandStrategyPage;
