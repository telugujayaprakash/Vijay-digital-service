import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { PenTool, Users, Search, BarChart3, Share2, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentMarketingPage = () => {
  const strategies = [
    {
      icon: PenTool,
      title: 'Content Strategy',
      description: 'Develop comprehensive content strategies that align with your business goals and audience needs.',
      details: ['Content audit and analysis', 'Editorial calendar creation', 'Content pillar development', 'Audience persona creation']
    },
    {
      icon: Search,
      title: 'SEO Content',
      description: 'Create optimized content that ranks well in search engines while providing value to readers.',
      details: ['Keyword research integration', 'On-page SEO optimization', 'Content structure planning', 'Internal linking strategy']
    },
    {
      icon: Share2,
      title: 'Content Distribution',
      description: 'Amplify your content reach through strategic distribution across multiple channels.',
      details: ['Multi-platform publishing', 'Social media promotion', 'Email marketing campaigns', 'Influencer partnerships']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track content performance and optimize strategies based on data-driven insights.',
      details: ['Traffic and engagement metrics', 'Conversion tracking', 'Content performance analysis', 'ROI measurement']
    }
  ];

  const contentTypes = [
    'Blog Posts & Articles',
    'White Papers & E-books',
    'Case Studies',
    'Video Content',
    'Infographics',
    'Podcasts',
    'Social Media Content',
    'Email Newsletters'
  ];

  const benefits = [
    'Establish thought leadership in your industry',
    'Generate high-quality organic traffic',
    'Build long-term customer relationships',
    'Cost-effective compared to paid advertising',
    'Improve SEO rankings and visibility',
    'Create valuable marketing assets'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Content <span className="text-green-600">Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Tell your story through compelling content that educates, engages, and converts.
                We create comprehensive content strategies that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:border-green-400/70">
                  Content Strategy Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-400/50 text-green-300 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/70 hover:text-white font-semibold shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
                  View Content Samples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Content Types We <span className="text-green-600">Create</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We produce engaging content across all formats to connect with your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-600">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-emerald-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                Content Marketing <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                End-to-end content marketing solutions that drive engagement and conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/50 shadow-lg hover:shadow-2xl hover:shadow-green-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-green-400/30 group-hover:shadow-green-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
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
                  Why Content <span className="text-green-600">Marketing Works</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Content marketing builds trust, authority, and long-term customer relationships.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Start Content Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Content Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">5x</p>
                    <p className="text-sm text-gray-400">More Organic Traffic</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">300%</p>
                    <p className="text-sm text-gray-400">Lead Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">68%</p>
                    <p className="text-sm text-gray-400">Engagement Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">2.4x</p>
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
              Ready to Create Compelling Content?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's develop a content strategy that positions your brand as an industry leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:border-green-400/70">
                  Get Content Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 border border-emerald-400/50 hover:border-emerald-400/70">
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

export default ContentMarketingPage;
