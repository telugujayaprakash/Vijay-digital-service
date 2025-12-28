import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Share2, Mail, Target, PenTool, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build an engaged community across all platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Social', 'Influencer Marketing', 'Analytics'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Convert leads into loyal customers with personalized campaigns.',
    features: ['Campaign Strategy', 'Automation', 'A/B Testing', 'Segmentation', 'Analytics'],
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description: 'Maximize your ad spend ROI with data-driven campaigns.',
    features: ['Google Ads', 'Meta Ads', 'Retargeting', 'Display Ads', 'Shopping Ads'],
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Tell your story through compelling content.',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Case Studies', 'Whitepapers'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics.',
    features: ['Custom Dashboards', 'KPI Tracking', 'ROI Analysis', 'Competitor Analysis', 'Monthly Reports'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services designed to help your business thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-card rounded-2xl p-8 border border-border/50 card-hover">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
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
