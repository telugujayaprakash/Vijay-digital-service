import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechFlow',
    image: 'SM',
    content: 'Vijay Digital Services transformed our online presence completely. Our organic traffic increased by 300% within six months, and the quality of leads has never been better.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Nova Systems',
    image: 'MC',
    content: 'The team at Vijay Digital Services truly understands digital marketing. Their data-driven approach and creative strategies have helped us outperform our competitors.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Spark Media',
    image: 'ER',
    content: 'Working with Vijay Digital Services has been a game-changer for our business. Their PPC campaigns delivered an ROI that exceeded our expectations by 400%.',
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
    <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-8">
          <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span className="text-sm font-semibold text-slate-600">
              Testimonials
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-500">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with Vijay Digital Services.
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
                  <div className="card-soft p-8 md:p-8 md:p-6 text-left relative group">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors duration-300" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{testimonial.name}</p>
                        <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-primary w-8 h-2.5'
                      : 'bg-slate-200 hover:bg-slate-300 w-2.5 h-2.5'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm"
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
