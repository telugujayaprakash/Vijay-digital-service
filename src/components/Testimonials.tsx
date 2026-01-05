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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 text-blue-600 font-medium text-sm mb-4 shadow-lg shadow-blue-400/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
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
                  <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-cyan-200/50 shadow-2xl shadow-cyan-400/10 relative hover:border-cyan-400/70 hover:shadow-cyan-400/20 transition-all duration-500 group">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-cyan-400/50 group-hover:text-cyan-500/70 transition-colors duration-300" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500 group-hover:fill-cyan-600 group-hover:text-cyan-600 transition-colors duration-300" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">{testimonial.name}</p>
                        <p className="text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300">{testimonial.role}</p>
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
              className="w-12 h-12 rounded-full border border-cyan-400/30 bg-white backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-400/50 text-cyan-600 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8 shadow-lg shadow-cyan-400/30'
                      : 'bg-cyan-400/30 hover:bg-cyan-400/50 w-3 h-3 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-cyan-400/30 bg-white backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-400/50 text-cyan-600 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20"
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
