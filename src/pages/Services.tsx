import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  Share2,
  Mail,
  Target,
  PenTool,
  BarChart3,
  Play,
  Code,
  TestTube,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import service images
import seoImg from "../assets/digital-marketing.jpg";
import socialMediaImg from "../assets/digital-marketing.jpg";
import emailMarketingImg from "../assets/digital-marketing.jpg";
import ppcImg from "../assets/digital-marketing.jpg";
import contentMarketingImg from "../assets/content-writing.jpg";
import brandStrategyImg from "../assets/digital-marketing.jpg";
import youtubeImg from "../assets/video-editing.jpg";
import webDevImg from "../assets/web-developer.jpg";
import testingImg from "../assets/testing.jpg";

const services = [
  {
    icon: Search,
    image: seoImg,
    title: "SEO Optimization",
    description: "Dominate search rankings with our proven SEO strategies.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Local SEO",
    ],
    path: "/services/seo",
  },
  {
    icon: Share2,
    image: socialMediaImg,
    title: "Social Media Marketing",
    description: "Build an engaged community across all platforms.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Social",
      "Influencer Marketing",
      "Analytics",
    ],
    path: "/services/social-media",
  },
  {
    icon: Mail,
    image: emailMarketingImg,
    title: "Email Marketing",
    description:
      "Convert leads into loyal customers with personalized campaigns.",
    features: [
      "Campaign Strategy",
      "Automation",
      "A/B Testing",
      "Segmentation",
      "Analytics",
    ],
    path: "/services/email-marketing",
  },
  {
    icon: Target,
    image: ppcImg,
    title: "PPC Advertising",
    description: "Maximize your ad spend ROI with data-driven campaigns.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "Display Ads",
      "Shopping Ads",
    ],
    path: "/services/ppc",
  },
  {
    icon: PenTool,
    image: contentMarketingImg,
    title: "Content Marketing",
    description: "Tell your story through compelling content.",
    features: [
      "Blog Writing",
      "Video Content",
      "Infographics",
      "Case Studies",
      "Whitepapers",
    ],
    path: "/services/content-marketing",
  },
  {
    icon: BarChart3,
    image: brandStrategyImg,
    title: "Brand Strategy",
    description: "Build a memorable brand that drives business growth.",
    features: [
      "Brand Positioning",
      "Visual Identity",
      "Brand Messaging",
      "Market Research",
      "Brand Guidelines",
    ],
    path: "/services/brand-strategy",
  },
  {
    icon: Play,
    image: youtubeImg,
    title: "YouTube Promotion",
    description:
      "Grow your channel and maximize video engagement with expert strategies.",
    features: [
      "Channel Optimization",
      "Video SEO",
      "Thumbnail Design",
      "Community Management",
      "Analytics & Growth",
    ],
    path: "/services/youtube-promotion",
  },
  {
    icon: Code,
    image: webDevImg,
    title: "Web Development",
    description:
      "Custom web solutions built with modern technologies and frameworks.",
    features: [
      "Full-Stack Development",
      "Responsive Design",
      "Security Implementation",
      "Performance Optimization",
    ],
    path: "/services/web-development",
  },
  {
    icon: TestTube,
    image: testingImg,
    title: "Application Testing",
    description:
      "Comprehensive testing services ensuring bug-free, secure applications.",
    features: [
      "Automated Testing",
      "Security Testing",
      "Mobile App Testing",
      "Performance Testing",
    ],
    path: "/services/application-testing",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 rounded-b-[4rem] blur-xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10 animate-slide-in">
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span className="text-sm font-semibold text-slate-600">
                Our Services
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
              Digital Marketing <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-slate-500">
              Comprehensive services designed to help your business thrive in
              the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  onClick={() => handleServiceClick(service.path)}
                  className="service-card overflow-hidden group flex flex-col cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-primary/5 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full btn-primary-soft mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
