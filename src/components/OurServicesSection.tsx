import { Link } from 'react-router-dom'

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
    ]
  },
  {
    title: 'Application Testing',
    subtitle: 'Quality Assurance',
    image: testingImg,
    link: '/services/application-testing',
    features: ['Bug Detection', 'Security Testing', 'Cross-Platform']
  },
  {
    title: 'Content Writing',
    subtitle: 'SEO-Optimized Content',
    image: contentImg,
    link: '/services/content-marketing',
    features: ['Keyword Research', 'Engaging Copy', 'Brand Voice']
  },
  {
    title: 'Video Editing',
    subtitle: 'Professional Production',
    image: youtubeImg,
    link: '/services/youtube-promotion',
    features: ['High-Quality Edits', 'Brand Integration', 'Fast Delivery']
  }
]

const OurServicesSection = () => {
  return (
    <section className='py-12 md:py-8 bg-slate-50 relative overflow-hidden text-slate-800'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='text-center mb-8 md:mb-8 animate-slide-in'>
          <div className='inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary mr-2'></span>
            <span className='text-sm font-semibold text-slate-600'>
              Complete Digital Solutions
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight'>
            Everything Your <span className='text-primary'>Business Needs</span>
          </h2>

          <p className='text-lg text-slate-500 max-w-2xl mx-auto'>
            From stunning websites to engaging content, we provide end-to-end
            digital solutions that drive growth, enhance user experience, and
            deliver measurable results.
          </p>
        </div>

        {/* Services UI Layout */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='service-card overflow-hidden group flex flex-col'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='relative h-48 overflow-hidden bg-slate-100'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90'
                />
              </div>

              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold text-slate-800 mb-2'>
                  {service.title}
                </h3>
                <p className='text-slate-500 font-medium mb-6'>
                  {service.subtitle}
                </p>

                <ul className='space-y-3 mb-8 w-full flex-grow'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-slate-600'>
                      <svg
                        className='w-5 h-5 text-primary mr-3 flex-shrink-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className='mt-auto flex items-center justify-center w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:text-primary hover:border-primary/30 hover:bg-slate-50 transition-all duration-300'
                >
                  Explore Details
                  <svg
                    className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1'
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection
