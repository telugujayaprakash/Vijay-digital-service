import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    alt: "Digital Marketing Image 1"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    alt: "Digital Marketing Image 2"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    alt: "Digital Marketing Image 3"
  }
];

const HeroCarousel = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full max-w-8xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="left-4" /> */}
            {/* <CarouselNext className="right-4" /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
