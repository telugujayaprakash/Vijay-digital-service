import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Users, Target, CheckCircle, ArrowRight, BarChart3, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOPage = () => {
  const strategies = [
    {
      icon: Search,
      title: 'Keyword Research & Analysis',
      description: 'Comprehensive keyword research to identify high-value search terms and long-tail keywords that drive targeted traffic.',
      details: ['Competitor keyword analysis', 'Search volume assessment', 'SERP feature opportunities', 'Seasonal keyword trends']
    },
    {
      icon: BarChart3,
      title: 'Technical SEO Optimization',
      description: 'Optimize your website\'s technical foundation for better search engine crawling and indexing.',
      details: ['Site speed optimization', 'Mobile-friendliness', 'XML sitemap creation', 'Schema markup implementation']
    },
    {
      icon: Globe,
      title: 'On-Page SEO',
      description: 'Optimize individual pages with targeted keywords, meta tags, and content structure.',
      details: ['Title tag optimization', 'Meta description crafting', 'Header tag hierarchy', 'Internal linking strategy']
    },
    {
      icon: TrendingUp,
      title: 'Link Building Strategy',
      description: 'Develop high-quality backlink profiles through ethical and sustainable link building techniques.',
      details: ['Content-driven link acquisition', 'Guest posting campaigns', 'Local citation building', 'Broken link reclamation']
    }
  ];

  const benefits = [
    'Increased organic search visibility',
    'Higher website traffic and conversions',
    'Improved user experience',
    'Long-term sustainable results',
    'Competitive advantage',
    'Better ROI than paid advertising'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                SEO <span className="text-orange-600">Optimization</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Dominate search engine results with our comprehensive SEO strategies.
                We combine technical expertise with data-driven insights to boost your online visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 border border-orange-400/50 hover:border-orange-400/70">
                  Get SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-400/50 text-orange-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:border-orange-400/70 hover:text-white font-semibold shadow-lg shadow-orange-400/20 hover:shadow-orange-400/30 transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                Our SEO <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We employ proven methodologies and cutting-edge techniques to improve your search rankings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/50 shadow-lg hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-400/30 group-hover:shadow-orange-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
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
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-orange-600">SEO Services?</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our SEO strategies are designed to deliver long-term, sustainable results that grow your business.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Start Your SEO Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Average Results</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">300%</p>
                    <p className="text-sm text-gray-400">Traffic Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">150%</p>
                    <p className="text-sm text-gray-400">Keyword Rankings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">250%</p>
                    <p className="text-sm text-gray-400">Lead Generation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">6-12</p>
                    <p className="text-sm text-gray-400">Months ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our SEO <span className="text-orange-600">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a systematic approach to ensure maximum results and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Audit & Analysis', desc: 'Comprehensive website and competitor analysis' },
                { step: '02', title: 'Strategy Development', desc: 'Custom SEO strategy based on your goals' },
                { step: '03', title: 'Implementation', desc: 'Execute optimizations and content improvements' },
                { step: '04', title: 'Monitoring & Optimization', desc: 'Track results and continuously optimize' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-orange-600">{item.step}</span>
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
              Ready to Dominate Search Results?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our SEO strategies can help your business achieve top search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 border border-orange-400/50 hover:border-orange-400/70">
                  Get Free SEO Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 border border-red-400/50 hover:border-red-400/70">
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

export default SEOPage;
