import { Link } from 'react-router-dom'
import { useState } from 'react'

// Import service images
import contentImg from '../assets/content-writing.jpg'
import youtubeImg from '../assets/video-editing.jpg'
import webDevImg from '../assets/web-developer.jpg'
import testingImg from '../assets/testing.jpg'

const services = [
  {
    title: 'Web Development',
    subtitle: 'Custom Digital Solutions',
    image: webDevImg,
    link: '/services/web-development',
    features: [
      'Responsive Design',
      'Modern Frameworks',
      'Performance Optimized'
    ],
    color: '#3B82F6',
    position: 'top-left'
  },
  {
    title: 'Application Testing',
    subtitle: 'Quality Assurance',
    image: testingImg,
    link: '/services/application-testing',
    features: ['Bug Detection', 'Security Testing', 'Cross-Platform'],
    color: '#10B981',
    position: 'top-right'
  },
  {
    title: 'Content Writing',
    subtitle: 'SEO-Optimized Content',
    image: contentImg,
    link: '/services/content-marketing',
    features: ['Keyword Research', 'Engaging Copy', 'Brand Voice'],
    color: '#8B5CF6',
    position: 'bottom-left'
  },
  {
    title: 'Video Editing',
    subtitle: 'Professional Production',
    image: youtubeImg,
    link: '/services/youtube-promotion',
    features: ['High-Quality Edits', 'Brand Integration', 'Fast Delivery'],
    color: '#F97316',
    position: 'bottom-right'
  }
]

const OurServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className='py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-gray-900 relative overflow-hidden'>
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 opacity-3'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(120,219,226,0.1),transparent_50%)]'></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute top-20 left-16 w-8 h-8 border-2 border-blue-200 rounded-lg rotate-45 animate-float opacity-20'
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className='absolute top-40 right-20 w-6 h-6 bg-purple-200 rounded-full animate-float opacity-30'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-32 left-24 w-10 h-4 bg-green-200 rounded-full animate-float opacity-25'
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className='absolute bottom-20 right-32 w-6 h-6 border-2 border-orange-200 rotate-12 animate-float opacity-20'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Custom CSS for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
          @keyframes slideInUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          @keyframes imageZoom { from { transform: scale(1); } to { transform: scale(1.1); } }

          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-slide-in { animation: slideInUp 0.8s ease-out; }
          .animate-scale-in { animation: scaleIn 0.6s ease-out; }
          .hover-zoom { transition: transform 0.5s ease; }
          .hover-zoom:hover img { animation: imageZoom 0.5s ease-in-out; }
        `
        }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Header */}
        <div className='text-center mb-20 animate-slide-in'>
          <div className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-blue-200/50 mb-8 shadow-lg backdrop-blur-sm'>
            <span className='text-2xl mr-3'>🚀</span>
            <span className='text-blue-700 font-bold text-lg'>
              Complete Digital Solutions
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight'>
            Everything Your
            <br />
            <span className='text-blue-600'>Business Needs</span>
          </h1>

          <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12'>
            From stunning websites to engaging content, we provide end-to-end
            digital solutions that drive growth, enhance user experience, and
            deliver measurable results.
          </p>
        </div>

        {/* Services Poster Layout */}
        <div className='relative max-w-7xl mx-auto'>
          {/* Desktop Poster Layout */}
          <div className='hidden lg:grid grid-cols-2 gap-12 items-center'>
            {/* Left Side - Large Featured Service */}
            <div className='space-y-8'>
              <div
                className='group relative overflow-hidden rounded-3xl shadow-2xl hover-zoom transform transition-all duration-700 hover:scale-105'
                onMouseEnter={() => setHoveredService(services[0].title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className='relative h-96 overflow-hidden'>
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>

                  {/* Content Overlay */}
                  <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                    <div className='mb-4'>
                      <span className='inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-3'>
                        {services[0].subtitle}
                      </span>
                      <h3 className='text-3xl font-bold mb-2'>
                        {services[0].title}
                      </h3>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {services[0].features.map((feature, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm'
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={services[0].link}
                      className='inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg'
                    >
                      Learn More
                      <svg
                        className='w-5 h-5 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Grid */}
            <div className='grid grid-cols-1 gap-6'>
              {/* Top Service */}
              <div
                className='group relative overflow-hidden rounded-2xl shadow-xl hover-zoom transform transition-all duration-500 hover:scale-105'
                onMouseEnter={() => setHoveredService(services[1].title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <h4 className='text-xl font-bold mb-1'>
                      {services[1].title}
                    </h4>
                    <p className='text-sm opacity-90 mb-3'>
                      {services[1].subtitle}
                    </p>
                    <Link
                      to={services[1].link}
                      className='text-sm font-semibold hover:underline'
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Two Services */}
              <div className='grid grid-cols-2 gap-4'>
                <div
                  className='group relative overflow-hidden rounded-xl shadow-lg hover-zoom transform transition-all duration-500 hover:scale-105'
                  onMouseEnter={() => setHoveredService(services[2].title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className='relative h-40 overflow-hidden'>
                    <img
                      src={services[2].image}
                      alt={services[2].title}
                      className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                      <h5 className='font-bold mb-1'>{services[2].title}</h5>
                      <p className='text-xs opacity-90'>
                        {services[2].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className='group relative overflow-hidden rounded-xl shadow-lg hover-zoom transform transition-all duration-500 hover:scale-105'
                  onMouseEnter={() => setHoveredService(services[3].title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className='relative h-40 overflow-hidden'>
                    <img
                      src={services[3].image}
                      alt={services[3].title}
                      className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                      <h5 className='font-bold mb-1'>{services[3].title}</h5>
                      <p className='text-xs opacity-90'>
                        {services[3].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className='lg:hidden space-y-6'>
            {services.map((service, index) => (
              <div
                key={service.title}
                className='group relative overflow-hidden rounded-2xl shadow-xl hover-zoom transform transition-all duration-500 hover:scale-105 animate-scale-in'
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <span className='inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-3'>
                      {service.subtitle}
                    </span>
                    <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className='px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={service.link}
                      className='inline-flex items-center px-5 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300'
                    >
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className='text-center mt-20'>
          <div className='inline-block p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-white shadow-2xl'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl opacity-90 mb-6'>
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105'
            >
              Get Started Today
              <svg
                className='w-6 h-6 ml-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default OurServicesSection
