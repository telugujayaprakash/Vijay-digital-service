import { Search, Share2, Mail, Target, PenTool, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies that drive organic traffic and boost visibility.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build an engaged community and amplify your brand voice across all major social platforms.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Convert leads into loyal customers with personalized email campaigns that deliver results.',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description: 'Maximize your ad spend ROI with data-driven paid campaigns across Google, Meta, and beyond.',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Tell your story through compelling content that educates, engages, and converts your audience.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics and transparent performance reporting.',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business goals. 
            We blend creativity with data to deliver measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 card-hover border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
