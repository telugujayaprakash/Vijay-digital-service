import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import {
  Search,
  Share2,
  Mail,
  Target,
  PenTool,
  BarChart3,
  Play,
  Code,
  TestTube,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Import service images
import seoImg from '../assets/digital-marketing.jpg'
import socialMediaImg from '../assets/digital-marketing.jpg'
import emailMarketingImg from '../assets/digital-marketing.jpg'
import ppcImg from '../assets/digital-marketing.jpg'
import contentMarketingImg from '../assets/content-writing.jpg'
import brandStrategyImg from '../assets/digital-marketing.jpg'
import youtubeImg from '../assets/video-editing.jpg'
import webDevImg from '../assets/web-developer.jpg'
import testingImg from '../assets/testing.jpg'

const services = [
  {
    icon: Search,
    image: seoImg,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Link Building',
      'Local SEO'
    ],
    path: '/services/seo'
  },
  {
    icon: Share2,
    image: socialMediaImg,
    title: 'Social Media Marketing',
    description: 'Build an engaged community across all platforms.',
    features: [
      'Content Strategy',
      'Community Management',
      'Paid Social',
      'Influencer Marketing',
      'Analytics'
    ],
    path: '/services/social-media'
  },
  {
    icon: Mail,
    image: emailMarketingImg,
    title: 'Email Marketing',
    description:
      'Convert leads into loyal customers with personalized campaigns.',
    features: [
      'Campaign Strategy',
      'Automation',
      'A/B Testing',
      'Segmentation',
      'Analytics'
    ],
    path: '/services/email-marketing'
  },
  {
    icon: Target,
    image: ppcImg,
    title: 'PPC Advertising',
    description: 'Maximize your ad spend ROI with data-driven campaigns.',
    features: [
      'Google Ads',
      'Meta Ads',
      'Retargeting',
      'Display Ads',
      'Shopping Ads'
    ],
    path: '/services/ppc'
  },
  {
    icon: PenTool,
    image: contentMarketingImg,
    title: 'Content Marketing',
    description: 'Tell your story through compelling content.',
    features: [
      'Blog Writing',
      'Video Content',
      'Infographics',
      'Case Studies',
      'Whitepapers'
    ],
    path: '/services/content-marketing'
  },
  {
    icon: BarChart3,
    image: brandStrategyImg,
    title: 'Brand Strategy',
    description: 'Build a memorable brand that drives business growth.',
    features: [
      'Brand Positioning',
      'Visual Identity',
      'Brand Messaging',
      'Market Research',
      'Brand Guidelines'
    ],
    path: '/services/brand-strategy'
  },
  {
    icon: Play,
    image: youtubeImg,
    title: 'YouTube Promotion',
    description:
      'Grow your channel and maximize video engagement with expert strategies.',
    features: [
      'Channel Optimization',
      'Video SEO',
      'Thumbnail Design',
      'Community Management',
      'Analytics & Growth'
    ],
    path: '/services/youtube-promotion'
  },
  {
    icon: Code,
    image: webDevImg,
    title: 'Web Development',
    description:
      'Custom web solutions built with modern technologies and frameworks.',
    features: [
      'Full-Stack Development',
      'Responsive Design',
      'Security Implementation',
      'Performance Optimization'
    ],
    path: '/services/web-development'
  },
  {
    icon: TestTube,
    image: testingImg,
    title: 'Application Testing',
    description:
      'Comprehensive testing services ensuring bug-free, secure applications.',
    features: [
      'Automated Testing',
      'Security Testing',
      'Mobile App Testing',
      'Performance Testing'
    ],
    path: '/services/application-testing'
  }
]

const Services = () => {
  const navigate = useNavigate()

  const handleServiceClick = (path: string) => {
    navigate(path)
  }

  return (
    <div className='min-h-screen bg-white text-black'>
      <Navbar />
      <main className='pt-20'>
        {/* Hero */}
        <section className='py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
          <div className='container mx-auto px-4 text-center'>
            <span className='inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4 text-black border-blue-300 border shadow-lg shadow-blue-300/50'>
              Our Services
            </span>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Digital Marketing Solutions
            </h1>
            <p className='text-lg max-w-2xl mx-auto text-black'>
              Comprehensive services designed to help your business thrive in
              the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  onClick={() => handleServiceClick(service.path)}
                  className='bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group hover:border-blue-300 cursor-pointer relative overflow-hidden'
                >
                  {/* Image Container with Hover Overlay */}
                  <div className='relative mb-6 group-hover:scale-105 transition-transform duration-300'>
                    <div className='w-full h-48 rounded-xl overflow-hidden'>
                      <img
                        src={service.image}
                        alt={service.title}
                        className='w-full h-full object-cover'
                      />
                      {/* Hover Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                        <h3 className='text-white text-xl font-bold text-center px-2'>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300'>
                    {service.description}
                  </p>
                  <ul className='space-y-3 mb-6'>
                    {service.features.map(feature => (
                      <li
                        key={feature}
                        className='flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300'
                      >
                        <CheckCircle className='w-4 h-4 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-blue-500 hover:border-blue-600 group-hover:bg-blue-700'>
                    Learn More{' '}
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services
