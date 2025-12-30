import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogs = [
  {
    title: '10 SEO Strategies That Will Dominate in 2024',
    excerpt: 'Discover the latest SEO techniques that are driving results for top-performing websites.',
    category: 'SEO',
    author: 'Sarah Williams',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
  },
  {
    title: 'The Complete Guide to Social Media Marketing',
    excerpt: 'Learn how to build an engaged community and grow your brand on social media platforms.',
    category: 'Social Media',
    author: 'Michael Chen',
    date: 'Dec 12, 2024',
    readTime: '12 min read',
  },
  {
    title: 'Email Marketing: Converting Subscribers to Customers',
    excerpt: 'Master the art of email marketing with proven strategies that drive conversions.',
    category: 'Email Marketing',
    author: 'Emily Davis',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
  },
  {
    title: 'PPC Advertising: Maximizing Your ROI',
    excerpt: 'A comprehensive guide to running successful paid advertising campaigns.',
    category: 'PPC',
    author: 'John Anderson',
    date: 'Dec 8, 2024',
    readTime: '15 min read',
  },
  {
    title: 'Content Marketing Trends for 2024',
    excerpt: 'Stay ahead of the curve with these emerging content marketing trends.',
    category: 'Content',
    author: 'Sarah Williams',
    date: 'Dec 5, 2024',
    readTime: '7 min read',
  },
  {
    title: 'Analytics: Making Data-Driven Decisions',
    excerpt: 'Learn how to leverage analytics to improve your marketing performance.',
    category: 'Analytics',
    author: 'Michael Chen',
    date: 'Dec 2, 2024',
    readTime: '9 min read',
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-red-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/20 to-red-500/20 border border-orange-400/30 text-red-300 font-medium text-sm mb-4 shadow-lg shadow-orange-400/10">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
              Marketing Insights
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in digital marketing.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-gray-900/10"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-400/20 hover:border-slate-400/50 shadow-lg hover:shadow-2xl hover:shadow-slate-400/20 card-hover group transition-all duration-500 hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-slate-600/50 to-slate-800/50 flex items-center justify-center border-b border-slate-400/20">
                    <span className="text-4xl font-bold text-slate-300/60 group-hover:text-slate-200 transition-colors duration-300">{blog.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-600/20 border border-slate-400/30 text-slate-300 text-xs font-medium mb-4 shadow-sm">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-slate-100 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                        <User className="w-4 h-4 text-slate-400" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {blog.date}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-semibold shadow-lg shadow-slate-500/30 hover:shadow-slate-500/50 transition-all duration-300 transform hover:scale-105 border border-slate-400/50 hover:border-slate-400/70" size="lg">
                Load More Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
