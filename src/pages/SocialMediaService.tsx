import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Share2, Users, Heart, MessageCircle, TrendingUp, Target, CheckCircle, ArrowRight, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaPage = () => {
  const strategies = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Create engaged communities around your brand through authentic interactions and valuable content.',
      details: ['Audience persona development', 'Community management', 'Engagement strategy', 'Brand advocacy programs']
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Develop compelling content calendars that resonate with your target audience and drive engagement.',
      details: ['Content pillar creation', 'Platform-specific content', 'Visual content strategy', 'Storytelling frameworks']
    },
    {
      icon: BarChart3,
      title: 'Paid Social Advertising',
      description: 'Maximize your reach and engagement with data-driven paid social media campaigns.',
      details: ['Audience targeting', 'A/B testing campaigns', 'Retargeting strategies', 'Performance optimization']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Track performance metrics and optimize strategies based on real-time data insights.',
      details: ['Performance dashboards', 'ROI tracking', 'Competitive analysis', 'Trend monitoring']
    }
  ];

  const platforms = [
    { name: 'Facebook', reach: '2.9B+', color: 'bg-blue-600' },
    { name: 'Instagram', reach: '1.5B+', color: 'bg-pink-500' },
    { name: 'LinkedIn', reach: '900M+', color: 'bg-blue-700' },
    { name: 'Twitter/X', reach: '500M+', color: 'bg-gray-800' },
    { name: 'TikTok', reach: '1.5B+', color: 'bg-black' },
    { name: 'YouTube', reach: '2.5B+', color: 'bg-red-600' }
  ];

  const benefits = [
    'Increased brand awareness and recognition',
    'Higher website traffic and lead generation',
    'Improved customer engagement and loyalty',
    'Cost-effective compared to traditional advertising',
    'Real-time customer feedback and insights',
    'Direct communication with your audience'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-pink-50 to-rose-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-10 h-10 text-pink-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Social Media <span className="text-pink-600">Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Build meaningful connections with your audience across all social platforms.
                We create engaging content and strategies that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 border border-pink-400/50 hover:border-pink-400/70">
                  Social Media Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-pink-400/50 text-pink-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-400/70 hover:text-white font-semibold shadow-lg shadow-pink-400/20 hover:shadow-pink-400/30 transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Platforms We <span className="text-pink-600">Master</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We leverage the power of all major social media platforms to reach your target audience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
                  <div className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-pink-600 font-bold text-sm">{platform.name[0]}</span>
                  </div>
                  <h3 className="font-bold mb-2">{platform.name}</h3>
                  <p className="text-gray-400 text-sm">{platform.reach} users</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 via-transparent to-purple-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                Our Social Media <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive strategies designed to build your brand presence and engage your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/50 shadow-lg hover:shadow-2xl hover:shadow-pink-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-pink-400/30 group-hover:shadow-pink-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pink-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Social Media <span className="text-pink-600">Marketing Matters?</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Social media is where your customers are. We help you connect, engage, and convert.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 border border-pink-400/50 hover:border-pink-400/70">
                  Grow Your Social Presence
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Engagement Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-pink-400">85%</p>
                    <p className="text-sm text-gray-400">Engagement Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-pink-400">3.2x</p>
                    <p className="text-sm text-gray-400">Reach Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-pink-400">45%</p>
                    <p className="text-sm text-gray-400">Lead Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-pink-400">2.8M</p>
                    <p className="text-sm text-gray-400">Impressions</p>
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
                Our Social Media <span className="text-pink-600">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to maximize your social media ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Strategy & Audit', desc: 'Analyze your current presence and competitors' },
                { step: '02', title: 'Content Planning', desc: 'Create engaging content calendars' },
                { step: '03', title: 'Community Management', desc: 'Build and nurture your online community' },
                { step: '04', title: 'Growth & Analytics', desc: 'Scale presence and measure performance' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-pink-600">{item.step}</span>
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
              Ready to Build Your Social Presence?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that connects with your audience and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 border border-pink-400/50 hover:border-pink-400/70">
                  Get Social Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 border border-purple-400/50 hover:border-purple-400/70">
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

export default SocialMediaPage;
