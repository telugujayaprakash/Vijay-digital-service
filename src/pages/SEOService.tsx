import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const SEOPage = () => {
  const strategies = [
    {
      icon: Search,
      title: "Keyword Research & Analysis",
      description:
        "Comprehensive keyword research to identify high-value search terms and long-tail keywords that drive targeted traffic.",
      details: [
        "Competitor keyword analysis",
        "Search volume assessment",
        "SERP feature opportunities",
        "Seasonal keyword trends",
      ],
    },
    {
      icon: BarChart3,
      title: "Technical SEO Optimization",
      description:
        "Optimize your website's technical foundation for better search engine crawling and indexing.",
      details: [
        "Site speed optimization",
        "Mobile-friendliness",
        "XML sitemap creation",
        "Schema markup implementation",
      ],
    },
    {
      icon: Globe,
      title: "On-Page SEO",
      description:
        "Optimize individual pages with targeted keywords, meta tags, and content structure.",
      details: [
        "Title tag optimization",
        "Meta description crafting",
        "Header tag hierarchy",
        "Internal linking strategy",
      ],
    },
    {
      icon: TrendingUp,
      title: "Link Building Strategy",
      description:
        "Develop high-quality backlink profiles through ethical and sustainable link building techniques.",
      details: [
        "Content-driven link acquisition",
        "Guest posting campaigns",
        "Local citation building",
        "Broken link reclamation",
      ],
    },
  ];

  const benefits = [
    "Increased organic search visibility",
    "Higher website traffic and conversions",
    "Improved user experience",
    "Long-term sustainable results",
    "Competitive advantage",
    "Better ROI than paid advertising",
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
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                SEO <span className="text-primary">Optimization</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                Dominate search engine results with our comprehensive SEO
                strategies. We combine technical expertise with data-driven
                insights to boost your online visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg"
                >
                  Get SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our <span className="text-primary">SEO Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We employ proven methodologies and cutting-edge techniques to
                improve your search rankings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="card-soft p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <strategy.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {strategy.description}
                  </p>
                  <ul className="space-y-3">
                    {strategy.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                      >
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
        <section className="py-12 md:py-8 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 tracking-tight">
                  Why Choose Our{" "}
                  <span className="text-primary">SEO Services?</span>
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Our SEO strategies are designed to deliver long-term,
                  sustainable results that grow your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-600 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Start Your SEO Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 tracking-tight">
                    Average Results
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">300%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Traffic Increase
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">150%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Keyword Rankings
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">250%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Lead Generation
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">6-12</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Months ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our SEO <span className="text-primary">Process</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We follow a systematic approach to ensure maximum results and
                transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Analysis",
                  desc: "Comprehensive website and competitor analysis",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  desc: "Custom SEO strategy based on your goals",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Execute optimizations and content improvements",
                },
                {
                  step: "04",
                  title: "Monitoring",
                  desc: "Track results and continuously optimize",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300 relative">
                    <span className="text-xl font-bold text-primary">
                      {item.step}
                    </span>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-slate-200 -z-10 -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-8 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto card-soft p-8 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                  Ready to Dominate{" "}
                  <span className="text-primary">Search Results?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how our SEO strategies can help your business
                  achieve top search rankings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                    >
                      Get Free SEO Consultation
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto"
                    >
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

export default SEOPage;
