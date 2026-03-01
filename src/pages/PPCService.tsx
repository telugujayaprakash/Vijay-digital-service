import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  DollarSign,
  Users,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const PPCPage = () => {
  const strategies = [
    {
      icon: Target,
      title: "Campaign Strategy",
      description:
        "Develop comprehensive PPC campaigns across Google, Meta, and other platforms.",
      details: [
        "Multi-platform campaigns",
        "Budget optimization",
        "Bid strategy selection",
        "Ad scheduling",
      ],
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description:
        "Precisely target your ideal customers with advanced audience segmentation.",
      details: [
        "Demographic targeting",
        "Interest-based audiences",
        "Lookalike audiences",
        "Retargeting campaigns",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "Monitor campaign performance with detailed analytics and conversion tracking.",
      details: [
        "Conversion tracking setup",
        "ROI measurement",
        "A/B testing",
        "Performance reporting",
      ],
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description:
        "Maximize your ad spend efficiency with smart budget allocation and bidding strategies.",
      details: [
        "Cost-per-acquisition optimization",
        "Budget pacing",
        "Bid adjustments",
        "Seasonal budgeting",
      ],
    },
  ];

  const platforms = [
    { name: "Google Ads", icon: "G", color: "bg-blue-500" },
    { name: "Meta Ads", icon: "f", color: "bg-blue-600" },
    { name: "Microsoft Ads", icon: "M", color: "bg-green-600" },
    { name: "Amazon Ads", icon: "A", color: "bg-orange-500" },
    { name: "LinkedIn Ads", icon: "in", color: "bg-blue-700" },
    { name: "Twitter Ads", icon: "t", color: "bg-gray-800" },
  ];

  const benefits = [
    "Immediate traffic and lead generation",
    "Precise audience targeting",
    "Measurable ROI and performance tracking",
    "Scalable advertising budget",
    "Quick results and fast implementation",
    "Complete control over ad spend",
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
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                PPC <span className="text-primary">Advertising</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                Maximize your ad spend ROI with data-driven paid advertising
                campaigns. We optimize across all major platforms to deliver
                measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg"
                >
                  Free PPC Audit
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

        {/* Platforms Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Platforms We <span className="text-primary">Optimize</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We manage paid advertising campaigns across all major platforms
                for maximum reach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="card-soft p-6 group hover:-translate-y-1 transition-transform duration-500 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary/5 transition-colors duration-300`}
                  >
                    <span className="text-primary font-bold text-xl">
                      {platform.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">
                    {platform.name}
                  </h3>
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
                PPC <span className="text-primary">Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Advanced PPC techniques that maximize your advertising budget
                and drive conversions.
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

        {/* Benefits & Stats */}
        <section className="py-12 md:py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 tracking-tight">
                  Why PPC{" "}
                  <span className="text-primary">Advertising Works</span>
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  PPC delivers immediate results and precise targeting for your
                  marketing goals.
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
                  Launch PPC Campaigns
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 tracking-tight">
                    ROI Performance
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">
                      $4.20
                    </p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Cost per Acquisition
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">320%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      ROI Increase
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">2.8%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Conversion Rate
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">45%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Lower CPA
                    </p>
                  </div>
                </div>
              </div>
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
                  Ready to Maximize{" "}
                  <span className="text-primary">Your Ad Spend?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's create high-performing PPC campaigns that deliver
                  measurable ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                    >
                      Get PPC Strategy
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

export default PPCPage;
