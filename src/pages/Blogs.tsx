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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in digital marketing.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article key={index} className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover group">
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/30">{blog.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles <ArrowRight className="w-4 h-4" />
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
