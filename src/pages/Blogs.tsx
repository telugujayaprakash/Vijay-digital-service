import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  User,
  Search,
  Tag,
  TrendingUp,
  Clock,
} from "lucide-react";

const blogs = [
  {
    title: "AI-Powered SEO: The Future of Search Optimization",
    excerpt:
      "Discover how artificial intelligence is revolutionizing SEO strategies and what it means for your website rankings.",
    category: "SEO",
    author: "Sarah Williams",
    date: "Jan 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "TikTok Marketing: From Viral to Profitable",
    excerpt:
      "Learn proven strategies to turn TikTok engagement into real business growth and measurable ROI.",
    category: "Social Media",
    author: "Michael Chen",
    date: "Jan 12, 2025",
    readTime: "12 min read",
  },
  {
    title: "Personalization in Email Marketing: Beyond Basic Segmentation",
    excerpt:
      "Master advanced email personalization techniques that boost open rates and conversions by 300%.",
    category: "Email Marketing",
    author: "Emily Davis",
    date: "Jan 10, 2025",
    readTime: "10 min read",
  },
  {
    title: "Google Ads 2025: New Features and Optimization Tips",
    excerpt:
      "Stay ahead of the competition with the latest Google Ads features and advanced bidding strategies.",
    category: "PPC",
    author: "John Anderson",
    date: "Jan 8, 2025",
    readTime: "15 min read",
  },
  {
    title: "Video Content Marketing: Strategies That Convert",
    excerpt:
      "From YouTube to TikTok, learn how to create video content that drives traffic and sales.",
    category: "Content",
    author: "Sarah Williams",
    date: "Jan 5, 2025",
    readTime: "7 min read",
  },
  {
    title: "Advanced Google Analytics 4: Beyond Basic Reporting",
    excerpt:
      "Unlock the full potential of GA4 with advanced tracking, custom events, and predictive analytics.",
    category: "Analytics",
    author: "Michael Chen",
    date: "Jan 3, 2025",
    readTime: "9 min read",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="container mx-auto px-4 text-center relative z-10 animate-slide-in">
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span className="text-sm font-semibold text-slate-600">
                Our Blog
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
              Marketing <span className="text-primary">Insights & Tips</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in
              digital marketing from our expert team.
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
        <section className="py-12 md:py-8 bg-background relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article
                  key={index}
                  className="card-soft overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100 group-hover:bg-primary/5 transition-colors duration-500">
                    <span className="text-3xl font-bold text-slate-300 group-hover:text-primary/40 transition-colors duration-300">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-4 text-slate-400">
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
            <div className="mt-6 card-soft p-8 md:p-8 md:p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
              <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                      Featured Article
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight">
                    The Ultimate Guide to Digital Marketing Success
                  </h3>
                  <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                    Learn the comprehensive strategies that have helped our
                    clients achieve remarkable growth in their digital marketing
                    efforts.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8 pt-6 border-t border-slate-100">
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
                  <Button className="btn-primary-soft inline-flex items-center">
                    Read Full Article{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="lg:w-96 h-72 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-primary/5 transition-colors duration-500">
                  <TrendingUp className="w-24 h-24 text-slate-300 group-hover:text-primary/40 transition-colors duration-500" />
                </div>
              </div>
            </div>

            {/* Newsletter Signup Inline */}
            <div className="mt-6 card-soft p-8 md:p-8 md:p-6 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
                  Stay Updated with Latest Insights
                </h3>
                <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                  Get weekly digital marketing tips, industry insights, and
                  exclusive content delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                  />
                  <Button className="btn-primary-soft px-8 py-4 h-auto rounded-xl">
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
