import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Play,
  Video,
  Eye,
  ThumbsUp,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const YouTubePromotionPage = () => {
  const strategies = [
    {
      icon: Video,
      title: "Content Optimization",
      description:
        "Optimize your videos for maximum visibility and engagement on YouTube's algorithm.",
      details: [
        "Video SEO optimization",
        "Thumbnail and title optimization",
        "Description and tags strategy",
        "End screen and cards setup",
      ],
    },
    {
      icon: Target,
      title: "Audience Growth",
      description:
        "Develop targeted strategies to attract and retain your ideal audience.",
      details: [
        "Audience research and analysis",
        "Subscriber acquisition campaigns",
        "Retention optimization",
        "Cross-platform promotion",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance",
      description:
        "Track and analyze your channel performance to drive continuous improvement.",
      details: [
        "Performance dashboards",
        "ROI tracking",
        "A/B testing campaigns",
        "Competitive analysis",
      ],
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Build and nurture a loyal community around your YouTube channel.",
      details: [
        "Comment management",
        "Live stream strategy",
        "Community building",
        "Fan engagement programs",
      ],
    },
  ];

  const platforms = [
    { name: "YouTube", reach: "2.5B+", color: "bg-red-600" },
    { name: "TikTok", reach: "1.5B+", color: "bg-slate-800" },
    { name: "Instagram", reach: "1.5B+", color: "bg-pink-500" },
    { name: "Twitter/X", reach: "500M+", color: "bg-slate-300" },
    { name: "Facebook", reach: "2.9B+", color: "bg-blue-600" },
    { name: "LinkedIn", reach: "900M+", color: "bg-blue-500" },
  ];

  const benefits = [
    "Increased video views and watch time",
    "Higher subscriber growth and engagement",
    "Improved search rankings and discoverability",
    "Monetization opportunities and revenue growth",
    "Brand awareness and audience expansion",
    "Valuable audience insights and analytics",
  ];

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 animate-slide-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                YouTube <span className="text-primary">Promotion</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                Maximize your YouTube channel's potential with expert promotion
                strategies. We help you grow your audience, increase engagement,
                and monetize your content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto">
                  Channel Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Multi-Platform <span className="text-primary">Promotion</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We leverage multiple platforms to drive traffic and engagement
                to your YouTube channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="card-soft p-6 group hover:-translate-y-1 transition-transform duration-500 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm group-hover:bg-primary/5 transition-colors`}>
                    <span className="text-primary font-bold text-lg">
                      {platform.name[0]}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 text-slate-800">{platform.name}</h3>
                  <p className="text-slate-500 text-sm">
                    {platform.reach} users
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our YouTube <span className="text-primary">Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Comprehensive strategies designed to grow your YouTube presence
                and maximize engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="card-soft p-8 md:p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <strategy.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 transition-colors duration-300">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed transition-colors duration-300">
                    {strategy.description}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium transition-colors duration-300">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
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
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 tracking-tight">
                  Why YouTube{" "}
                  <span className="text-primary">Promotion Matters?</span>
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  YouTube is the second largest search engine. We help you
                  dominate video search and build a loyal audience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto">
                  Grow Your Channel
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>

                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 tracking-tight">
                    Channel Growth Metrics
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">300%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Subscriber Growth</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">5.2x</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Watch Time Increase
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">85%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Engagement Rate</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">2.1M</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Monthly Views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our YouTube <span className="text-primary">Process</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A systematic approach to maximize your YouTube channel's growth
                and monetization potential.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Channel Audit",
                  desc: "Analyze your current performance and identify opportunities",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  desc: "Create a customized growth and content strategy",
                },
                {
                  step: "03",
                  title: "Content Optimization",
                  desc: "Optimize existing and new content for maximum reach",
                },
                {
                  step: "04",
                  title: "Growth & Scaling",
                  desc: "Implement promotion campaigns and scale successful strategies",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300 relative">
                    <span className="text-xl font-bold text-primary">
                      {item.step}
                    </span>
                    {index < 3 && (
                      <div className='hidden md:block absolute top-1/2 left-full w-full h-px bg-slate-200 -z-10 -translate-y-1/2'></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-8 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className='max-w-4xl mx-auto card-soft p-8 md:p-6 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4'></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                  Ready to Grow Your <span className="text-primary">YouTube Channel?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's create a YouTube promotion strategy that drives views,
                  subscribers, and revenue for your channel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto">
                      Get YouTube Strategy
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto">
                      View All Services
                    </Button>
                  </Link>
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

export default YouTubePromotionPage;
