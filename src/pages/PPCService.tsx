import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Target, DollarSign, Users, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PPCPage = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Campaign Strategy',
      description: 'Develop comprehensive PPC campaigns across Google, Meta, and other platforms.',
      details: ['Multi-platform campaigns', 'Budget optimization', 'Bid strategy selection', 'Ad scheduling']
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description: 'Precisely target your ideal customers with advanced audience segmentation.',
      details: ['Demographic targeting', 'Interest-based audiences', 'Lookalike audiences', 'Retargeting campaigns']
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor campaign performance with detailed analytics and conversion tracking.',
      details: ['Conversion tracking setup', 'ROI measurement', 'A/B testing', 'Performance reporting']
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Maximize your ad spend efficiency with smart budget allocation and bidding strategies.',
      details: ['Cost-per-acquisition optimization', 'Budget pacing', 'Bid adjustments', 'Seasonal budgeting']
    }
  ];

  const platforms = [
    { name: 'Google Ads', icon: 'G', color: 'bg-blue-500' },
    { name: 'Meta Ads', icon: 'f', color: 'bg-blue-600' },
    { name: 'Microsoft Ads', icon: 'M', color: 'bg-green-600' },
    { name: 'Amazon Ads', icon: 'A', color: 'bg-orange-500' },
    { name: 'LinkedIn Ads', icon: 'in', color: 'bg-blue-700' },
    { name: 'Twitter Ads', icon: 't', color: 'bg-gray-800' }
  ];

  const benefits = [
    'Immediate traffic and lead generation',
    'Precise audience targeting',
    'Measurable ROI and performance tracking',
    'Scalable advertising budget',
    'Quick results and fast implementation',
    'Complete control over ad spend'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-cyan-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                PPC <span className="text-cyan-600">Advertising</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Maximize your ad spend ROI with data-driven paid advertising campaigns.
                We optimize across all major platforms to deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 hover:border-cyan-400/70">
                  Free PPC Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/70 hover:text-white font-semibold shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                Platforms We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Optimize</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We manage paid advertising campaigns across all major platforms for maximum reach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2 group text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-white font-bold text-lg">{platform.icon}</span>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                PPC <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Advanced PPC techniques that maximize your advertising budget and drive conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
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
                  Why PPC <span className="text-cyan-600">Advertising Works</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  PPC delivers immediate results and precise targeting for your marketing goals.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 hover:border-cyan-400/70">
                  Launch PPC Campaigns
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">ROI Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">$4.20</p>
                    <p className="text-sm text-gray-400">Cost per Acquisition</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">320%</p>
                    <p className="text-sm text-gray-400">ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">2.8%</p>
                    <p className="text-sm text-gray-400">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">45%</p>
                    <p className="text-sm text-gray-400">Lower CPA</p>
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
              Ready to Maximize Your Ad Spend?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create high-performing PPC campaigns that deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 hover:border-cyan-400/70">
                  Get PPC Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
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

export default PPCPage;
