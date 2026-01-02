import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import LazyImage from './LazyImage';

const images = [
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&auto=format&q=80",
    webp: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&auto=format&fm=webp&q=80",
    alt: "Digital Marketing Image 1"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    webp: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&fm=webp&q=80",
    alt: "Digital Marketing Image 2"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format&q=80",
    webp: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format&fm=webp&q=80",
    alt: "Digital Marketing Image 3"
  }
];

const HeroCarousel = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-50 rounded-full blur-2xl" />
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
                    {index === 0 ? (
                      // First image is LCP - load immediately with high priority
                      <picture>
                        <source srcSet={image.webp} type="image/webp" />
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-2xl"
                          fetchpriority="high"
                          loading="eager"
                        />
                      </picture>
                    ) : (
                      // Other images use optimized lazy loading
                      <picture>
                        <source srcSet={image.webp} type="image/webp" />
                        <LazyImage
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[500px] md:h-[600px] rounded-lg shadow-2xl"
                        />
                      </picture>
                    )}
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
