import { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-12 md:py-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-8 animate-slide-in">
            <span className="inline-block px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 inline-block rounded-full bg-primary mr-2"></span>
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight">
              Get Digital Marketing <span className="text-primary">Insights</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Join thousands of marketers who receive our weekly newsletter with expert tips, industry trends, and exclusive content.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="card-soft rounded-3xl p-8 md:p-8 md:p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>

            {!isSubscribed ? (
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-slate-500">
                    Get valuable insights delivered straight to your inbox
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-sm"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary-soft sm:w-auto w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 relative z-10 animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Welcome to Our Community!
                </h3>
                <p className="text-slate-500 mb-8">
                  Thank you for subscribing. Check your inbox for a confirmation email.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:text-primary hover:border-primary/20 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Back
                </button>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-500 mb-4 font-medium">
              Join 5,000+ marketers who trust our insights
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <span className="text-sm">Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400/40 rounded-full"></div>
                <span className="text-sm">No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400/40 rounded-full"></div>
                <span className="text-sm">Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
