import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Play, Video, Eye, ThumbsUp, Users, TrendingUp, Target, CheckCircle, ArrowRight, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTubePromotionPage = () => {
  const strategies = [
    {
      icon: Video,
      title: 'Content Optimization',
      description: 'Optimize your videos for maximum visibility and engagement on YouTube\'s algorithm.',
      details: ['Video SEO optimization', 'Thumbnail and title optimization', 'Description and tags strategy', 'End screen and cards setup']
    },
    {
      icon: Target,
      title: 'Audience Growth',
      description: 'Develop targeted strategies to attract and retain your ideal audience.',
      details: ['Audience research and analysis', 'Subscriber acquisition campaigns', 'Retention optimization', 'Cross-platform promotion']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance',
      description: 'Track and analyze your channel performance to drive continuous improvement.',
      details: ['Performance dashboards', 'ROI tracking', 'A/B testing campaigns', 'Competitive analysis']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Build and nurture a loyal community around your YouTube channel.',
      details: ['Comment management', 'Live stream strategy', 'Community building', 'Fan engagement programs']
    }
  ];

  const platforms = [
    { name: 'YouTube', reach: '2.5B+', color: 'bg-red-600' },
    { name: 'TikTok', reach: '1.5B+', color: 'bg-black' },
    { name: 'Instagram', reach: '1.5B+', color: 'bg-pink-500' },
    { name: 'Twitter/X', reach: '500M+', color: 'bg-gray-800' },
    { name: 'Facebook', reach: '2.9B+', color: 'bg-blue-600' },
    { name: 'LinkedIn', reach: '900M+', color: 'bg-blue-700' }
  ];

  const benefits = [
    'Increased video views and watch time',
    'Higher subscriber growth and engagement',
    'Improved search rankings and discoverability',
    'Monetization opportunities and revenue growth',
    'Brand awareness and audience expansion',
    'Valuable audience insights and analytics'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-red-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-red-600 flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                YouTube <span className="text-red-600">Promotion</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Maximize your YouTube channel's potential with expert promotion strategies.
                We help you grow your audience, increase engagement, and monetize your content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 border border-red-400/50 hover:border-red-400/70">
                  Channel Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-red-400/50 text-red-300 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20 hover:border-red-400/70 hover:text-white font-semibold shadow-lg shadow-red-400/20 hover:shadow-red-400/30 transition-all duration-300 transform hover:scale-105">
                  View Success Stories
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
                Multi-Platform <span className="text-red-600">Promotion</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We leverage multiple platforms to drive traffic and engagement to your YouTube channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
                  <div className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-red-600 font-bold text-sm">{platform.name[0]}</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent">
                Our YouTube <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive strategies designed to grow your YouTube presence and maximize engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-red-400/20 hover:border-red-400/50 shadow-lg hover:shadow-2xl hover:shadow-red-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-red-400/30 group-hover:shadow-red-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
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
                  Why YouTube <span className="text-red-600">Promotion Matters?</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  YouTube is the second largest search engine. We help you dominate video search and build a loyal audience.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 border border-red-400/50 hover:border-red-400/70">
                  Grow Your Channel
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Channel Growth Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-400">300%</p>
                    <p className="text-sm text-gray-400">Subscriber Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-400">5.2x</p>
                    <p className="text-sm text-gray-400">Watch Time Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-400">85%</p>
                    <p className="text-sm text-gray-400">Engagement Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-400">2.1M</p>
                    <p className="text-sm text-gray-400">Monthly Views</p>
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
                Our YouTube <span className="text-red-600">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to maximize your YouTube channel's growth and monetization potential.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Channel Audit', desc: 'Analyze your current performance and identify opportunities' },
                { step: '02', title: 'Strategy Development', desc: 'Create a customized growth and content strategy' },
                { step: '03', title: 'Content Optimization', desc: 'Optimize existing and new content for maximum reach' },
                { step: '04', title: 'Growth & Scaling', desc: 'Implement promotion campaigns and scale successful strategies' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-red-600">{item.step}</span>
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
              Ready to Grow Your YouTube Channel?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a YouTube promotion strategy that drives views, subscribers, and revenue for your channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 border border-red-400/50 hover:border-red-400/70">
                  Get YouTube Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 border border-orange-400/50 hover:border-orange-400/70">
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

export default YouTubePromotionPage;
