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

  const benefits = [
    "Weekly digital marketing tips & strategies",
    "Exclusive case studies & success stories",
    "Early access to new services & tools",
    "Industry insights & trend analysis"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 via-blue-700/20 to-purple-700/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium text-sm mb-4 shadow-lg shadow-white/10 backdrop-blur-sm">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get Digital Marketing Insights
            </h2>
            <p className="text-lg text-cyan-100 max-w-2xl mx-auto">
              Join thousands of marketers who receive our weekly newsletter with expert tips, industry trends, and exclusive content.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {!isSubscribed ? (
              <>
                <div className="text-center mb-8">
                  <Mail className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-cyan-100">
                    Get valuable insights delivered straight to your inbox
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      Subscribe
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/30">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome to Our Community!
                </h3>
                <p className="text-cyan-100 mb-6">
                  Thank you for subscribing. Check your inbox for a confirmation email.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                  Back
                </button>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-cyan-200 mb-4">
              Join 5,000+ marketers who trust our insights
            </p>
            <div className="flex justify-center items-center gap-8 text-cyan-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
