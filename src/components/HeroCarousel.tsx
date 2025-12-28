import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const slides = [
  {
    title: "Accelerate Your Digital Growth",
    subtitle: "Transform your online presence with data-driven marketing strategies that deliver real results.",
    stat: "300%",
    statLabel: "Average ROI",
    icon: TrendingUp,
  },
  {
    title: "Connect With Your Audience",
    subtitle: "Build meaningful relationships through targeted campaigns and engaging content.",
    stat: "10M+",
    statLabel: "Customers Reached",
    icon: Users,
  },
  {
    title: "Scale Your Business Fast",
    subtitle: "Leverage cutting-edge tools and proven methodologies to outpace your competition.",
    stat: "500+",
    statLabel: "Projects Delivered",
    icon: Zap,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div 
              key={currentSlide}
              className="space-y-6 animate-fade-up"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                <slide.icon className="w-4 h-4" />
                Digital Marketing Excellence
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === slide.title.split(' ').length - 1 ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                {slide.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div key={currentSlide} className="animate-fade-in">
                <p className="text-4xl font-bold gradient-text">{slide.stat}</p>
                <p className="text-sm text-muted-foreground">{slide.statLabel}</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-4xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-4xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main Circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-float" />
              
              {/* Floating Cards */}
              <div className="absolute top-12 right-12 bg-card rounded-xl p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Traffic Growth</p>
                    <p className="text-2xl font-bold text-green-500">+247%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-4 bg-card rounded-xl p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Leads</p>
                    <p className="text-2xl font-bold text-accent">1,234</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <Zap className="w-10 h-10 text-accent-foreground" />
                </div>
                <p className="text-center mt-4 font-semibold">Powered by AI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12 lg:justify-start">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent w-20' : 'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
