import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Users,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmailMarketingPage = () => {
  const strategies = [
    {
      icon: Target,
      title: "Audience Segmentation",
      description:
        "Divide your audience into targeted segments for personalized messaging and higher engagement.",
      details: [
        "Behavioral segmentation",
        "Demographic targeting",
        "Purchase history analysis",
        "Engagement-based groups",
      ],
    },
    {
      icon: Mail,
      title: "Campaign Strategy",
      description:
        "Develop comprehensive email campaigns that nurture leads and drive conversions.",
      details: [
        "Welcome sequences",
        "Product promotions",
        "Re-engagement campaigns",
        "Seasonal campaigns",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track and analyze email campaign performance to optimize future strategies.",
      details: [
        "Open rate tracking",
        "Click-through analysis",
        "Conversion monitoring",
        "A/B testing results",
      ],
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description:
        "Set up automated email sequences that nurture leads and guide them through your funnel.",
      details: [
        "Lead nurturing flows",
        "Welcome series",
        "Cart abandonment",
        "Re-engagement automation",
      ],
    },
  ];

  const benefits = [
    "Higher customer engagement and loyalty",
    "Cost-effective marketing channel",
    "Personalized customer experiences",
    "Direct communication with prospects",
    "Measurable ROI and performance tracking",
    "Automated lead nurturing capabilities",
  ];

  return (
    <div className="min-h-screen bg-background text-slate-800">
      \n <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                Email <span className="text-primary">Marketing</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8">
                Convert leads into loyal customers with personalized email
                campaigns. We create automated workflows that nurture prospects
                and drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Email Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto"
                >
                  View Templates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Email Marketing <span className="text-primary">Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Advanced email marketing techniques that deliver results and
                build lasting customer relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="card-soft p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-400/30 group-hover:shadow-purple-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary transition-colors duration-300">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed transition-colors duration-300">
                    {strategy.description}
                  </p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-600 font-medium transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
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
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Email Marketing <span className="text-primary">Benefits</span>
                </h2>
                <p className="text-slate-600 mb-8">
                  Email remains one of the most effective marketing channels for
                  building customer relationships.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-primary">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Start Email Campaigns
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-10 relative overflow-hidden">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Email Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">28%</p>
                    <p className="text-sm text-slate-500">Average Open Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">4.2%</p>
                    <p className="text-sm text-slate-500">Click Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">320%</p>
                    <p className="text-sm text-slate-500">ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">15%</p>
                    <p className="text-sm text-slate-500">Conversion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Email Campaigns?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create automated email sequences that nurture your leads and
              boost conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Get Email Strategy
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
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

export default EmailMarketingPage;
