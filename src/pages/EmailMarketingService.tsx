import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailMarketingPage = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Audience Segmentation',
      description: 'Divide your audience into targeted segments for personalized messaging and higher engagement.',
      details: ['Behavioral segmentation', 'Demographic targeting', 'Purchase history analysis', 'Engagement-based groups']
    },
    {
      icon: Mail,
      title: 'Campaign Strategy',
      description: 'Develop comprehensive email campaigns that nurture leads and drive conversions.',
      details: ['Welcome sequences', 'Product promotions', 'Re-engagement campaigns', 'Seasonal campaigns']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track and analyze email campaign performance to optimize future strategies.',
      details: ['Open rate tracking', 'Click-through analysis', 'Conversion monitoring', 'A/B testing results']
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Set up automated email sequences that nurture leads and guide them through your funnel.',
      details: ['Lead nurturing flows', 'Welcome series', 'Cart abandonment', 'Re-engagement automation']
    }
  ];

  const benefits = [
    'Higher customer engagement and loyalty',
    'Cost-effective marketing channel',
    'Personalized customer experiences',
    'Direct communication with prospects',
    'Measurable ROI and performance tracking',
    'Automated lead nurturing capabilities'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-violet-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Email <span className="text-purple-600">Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Convert leads into loyal customers with personalized email campaigns.
                We create automated workflows that nurture prospects and drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 border border-purple-400/50 hover:border-purple-400/70">
                  Email Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 hover:border-purple-400/70 hover:text-white font-semibold shadow-lg shadow-purple-400/20 hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-105">
                  View Templates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                Email Marketing <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Advanced email marketing techniques that deliver results and build lasting customer relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-400/30 group-hover:shadow-purple-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
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
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Email Marketing <span className="text-purple-600">Benefits</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Email remains one of the most effective marketing channels for building customer relationships.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Start Email Campaigns
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Email Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">28%</p>
                    <p className="text-sm text-gray-400">Average Open Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">4.2%</p>
                    <p className="text-sm text-gray-400">Click Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">320%</p>
                    <p className="text-sm text-gray-400">ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">15%</p>
                    <p className="text-sm text-gray-400">Conversion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Email Campaigns?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create automated email sequences that nurture your leads and boost conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 border border-purple-400/50 hover:border-purple-400/70">
                  Get Email Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 border border-indigo-400/50 hover:border-indigo-400/70">
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

export default EmailMarketingPage;
