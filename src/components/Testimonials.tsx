import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechFlow',
    image: 'SM',
    content: 'DigiPro transformed our online presence completely. Our organic traffic increased by 300% within six months, and the quality of leads has never been better.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Nova Systems',
    image: 'MC',
    content: 'The team at DigiPro truly understands digital marketing. Their data-driven approach and creative strategies have helped us outperform our competitors.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Spark Media',
    image: 'ER',
    content: 'Working with DigiPro has been a game-changer for our business. Their PPC campaigns delivered an ROI that exceeded our expectations by 400%.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'COO, Zenith Corp',
    image: 'DP',
    content: 'The level of professionalism and expertise at DigiPro is unmatched. They\'ve become an invaluable extension of our marketing team.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with DigiPro.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 relative">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-lg font-bold text-accent">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
