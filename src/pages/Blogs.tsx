import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Search, Tag, TrendingUp, Clock } from 'lucide-react';

const blogs = [
  {
    title: 'AI-Powered SEO: The Future of Search Optimization',
    excerpt: 'Discover how artificial intelligence is revolutionizing SEO strategies and what it means for your website rankings.',
    category: 'SEO',
    author: 'Sarah Williams',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
  },
  {
    title: 'TikTok Marketing: From Viral to Profitable',
    excerpt: 'Learn proven strategies to turn TikTok engagement into real business growth and measurable ROI.',
    category: 'Social Media',
    author: 'Michael Chen',
    date: 'Jan 12, 2025',
    readTime: '12 min read',
  },
  {
    title: 'Personalization in Email Marketing: Beyond Basic Segmentation',
    excerpt: 'Master advanced email personalization techniques that boost open rates and conversions by 300%.',
    category: 'Email Marketing',
    author: 'Emily Davis',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
  },
  {
    title: 'Google Ads 2025: New Features and Optimization Tips',
    excerpt: 'Stay ahead of the competition with the latest Google Ads features and advanced bidding strategies.',
    category: 'PPC',
    author: 'John Anderson',
    date: 'Jan 8, 2025',
    readTime: '15 min read',
  },
  {
    title: 'Video Content Marketing: Strategies That Convert',
    excerpt: 'From YouTube to TikTok, learn how to create video content that drives traffic and sales.',
    category: 'Content',
    author: 'Sarah Williams',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
  },
  {
    title: 'Advanced Google Analytics 4: Beyond Basic Reporting',
    excerpt: 'Unlock the full potential of GA4 with advanced tracking, custom events, and predictive analytics.',
    category: 'Analytics',
    author: 'Michael Chen',
    date: 'Jan 3, 2025',
    readTime: '9 min read',
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-transparent to-blue-50/50"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-600 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/20">
              Our Blog
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Marketing Insights & Tips
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in digital marketing from our expert team.
            </p>
          </div>
        </section>

        {/* Search & Categories */}
       {/* <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              Search Bar 
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300"
                />
              </div>

              Categories
              <div className="flex flex-wrap gap-3">
                {['All', 'SEO', 'Social Media', 'Email Marketing', 'PPC', 'Content', 'Analytics'].map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-white border border-cyan-200 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Blog Grid */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article key={index} className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl overflow-hidden border border-cyan-200/50 hover:border-cyan-400/70 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 card-hover group transition-all duration-500 hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center border-b border-cyan-200/50">
                    <span className="text-3xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300">{blog.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-500" />
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/50 text-cyan-600 text-xs font-medium shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-4 text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Featured Article */}
            <div className="mt-16 bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 md:p-12 border border-cyan-200/50 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm font-medium text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                      Featured Article
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    The Ultimate Guide to Digital Marketing Success
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Learn the comprehensive strategies that have helped our clients achieve remarkable growth in their digital marketing efforts.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Vijay Digital Services
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Jan 2025
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      15 min read
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 hover:border-cyan-400/70">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                <div className="lg:w-80 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-20 h-20 text-cyan-500" />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 via-blue-700/20 to-purple-700/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Stay Updated with Latest Insights
                </h3>
                <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Get weekly digital marketing tips, industry insights, and exclusive content delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-cyan-200 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all"
                  />
                  <Button className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold shadow-lg px-8 py-3 rounded-lg transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
