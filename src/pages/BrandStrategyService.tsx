import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Target,
  Users,
  Palette,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const BrandStrategyPage = () => {
  const strategies = [
    {
      icon: Target,
      title: "Brand Positioning",
      description:
        "Define your unique market position and differentiate from competitors.",
      details: [
        "Market research and analysis",
        "Competitor positioning study",
        "Unique value proposition",
        "Brand personality development",
      ],
    },
    {
      icon: Palette,
      title: "Visual Identity",
      description:
        "Create a cohesive visual brand identity that resonates with your audience.",
      details: [
        "Logo design and guidelines",
        "Color palette development",
        "Typography system",
        "Brand asset creation",
      ],
    },
    {
      icon: Users,
      title: "Audience Strategy",
      description:
        "Develop detailed audience personas and targeting strategies.",
      details: [
        "Customer persona creation",
        "Audience segmentation",
        "Communication strategy",
        "Channel selection",
      ],
    },
    {
      icon: Lightbulb,
      title: "Brand Messaging",
      description:
        "Craft compelling brand messages that connect with your target audience.",
      details: [
        "Brand voice and tone",
        "Key messaging framework",
        "Storytelling strategy",
        "Content guidelines",
      ],
    },
  ];

  const deliverables = [
    "Brand Strategy Document",
    "Visual Identity Guidelines",
    "Brand Voice & Messaging Guide",
    "Logo & Brand Assets",
    "Brand Implementation Roadmap",
    "Marketing Collateral Templates",
  ];

  const benefits = [
    "Clear brand differentiation in the market",
    "Consistent brand experience across all touchpoints",
    "Stronger customer loyalty and recognition",
    "Improved marketing effectiveness",
    "Higher perceived value and pricing power",
    "Foundation for scalable growth",
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
                <Megaphone className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                Brand <span className="text-primary">Strategy</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8">
                Build a memorable brand that resonates with your audience and
                drives business growth. We create comprehensive brand strategies
                that establish market leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Brand Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto"
                >
                  View Brand Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                What You <span className="text-primary">Get</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive brand deliverables that provide everything you
                need for successful brand implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="card-soft p-6 group hover:-translate-y-1 transition-transform duration-500 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-600">{deliverable}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Brand Strategy <span className="text-primary">Framework</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Our systematic approach to building powerful, differentiated
                brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="card-soft p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 transition-colors duration-300">
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
                        <CheckCircle className="w-4 h-4 text-primary group-hover:text-blue-300 transition-colors duration-300" />
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
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Brand Strategy <span className="text-primary">Benefits</span>
                </h2>
                <p className="text-slate-600 mb-8">
                  A strong brand strategy is the foundation for all successful
                  marketing efforts.
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
                  Build Your Brand
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-10 relative overflow-hidden">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Brand Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">23%</p>
                    <p className="text-sm text-slate-500">Revenue Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">40%</p>
                    <p className="text-sm text-slate-500">Customer Loyalty</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">65%</p>
                    <p className="text-sm text-slate-500">Brand Recognition</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">3.2x</p>
                    <p className="text-sm text-slate-500">Market Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Brand Strategy <span className="text-primary">Process</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A collaborative process that uncovers your brand's true
                potential.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Research and brand audit",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Brand positioning and messaging",
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Visual identity creation",
                },
                {
                  step: "04",
                  title: "Implementation",
                  desc: "Brand rollout and guidelines",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build a Powerful Brand?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a brand strategy that establishes your market
              leadership and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Start Brand Strategy
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

export default BrandStrategyPage;
