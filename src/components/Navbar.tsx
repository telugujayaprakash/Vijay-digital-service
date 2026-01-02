import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Menu,
  X,
  ChevronDown,
  Search,
  BarChart3,
  Share2,
  Mail,
  Target,
  PenTool,
  Megaphone,
  Play,
  Code,
  TestTube
} from 'lucide-react'

const services = [
  {
    name: 'SEO Optimization',
    icon: Search,
    description: 'Boost your search rankings',
    path: '/services/seo'
  },
  {
    name: 'Social Media Marketing',
    icon: Share2,
    description: 'Grow your social presence',
    path: '/services/social-media'
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    description: 'Convert leads into customers',
    path: '/services/email-marketing'
  },
  {
    name: 'PPC Advertising',
    icon: Target,
    description: 'Maximize your ad ROI',
    path: '/services/ppc'
  },
  {
    name: 'Content Marketing',
    icon: PenTool,
    description: 'Engage with quality content',
    path: '/services/content-marketing'
  },
  {
    name: 'Brand Strategy',
    icon: Megaphone,
    description: 'Build a memorable brand',
    path: '/services/brand-strategy'
  },
  {
    name: 'YouTube Promotion',
    icon: Play,
    description: 'Grow your channel and maximize video engagement',
    path: '/services/youtube-promotion'
  },
  {
    name: 'Web Development',
    icon: Code,
    description: 'Custom web solutions and modern development',
    path: '/services/web-development'
  },
  {
    name: 'Application Testing',
    icon: TestTube,
    description: 'Comprehensive testing and quality assurance',
    path: '/services/application-testing'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-purple-500/20'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 transition-all duration-300'>
              {/* <BarChart3 className='w-6 h-6 text-white' /> */}
              <img src='/favicon.ico' alt='' className='w-10 h-10 text-white' />
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300'>
              Vijay Digital Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            <Link
              to='/'
              className='nav-link font-medium text-white/90 hover:text-cyan-300 transition-all duration-300'
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className='relative group'>
              <button className='nav-link font-medium flex items-center gap-1 text-white/90 hover:text-cyan-300 transition-all duration-300'>
                Services
                <ChevronDown className='w-4 h-4 text-cyan-300 transition-transform duration-200' />
              </button>

              <div className='fixed left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50'>
                <div className='container mx-auto px-6 py-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className='group block'
                      >
                        <div className='flex items-center gap-4 p-4 rounded-lg hover:bg-blue-200 transition-all duration-200'>
                          <div className='w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 border border-blue-200 group-hover:border-blue-300'>
                            <service.icon className='w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors' />
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1'>
                              {service.name}
                            </h3>
                            <p className='text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to='/clients'
              className='nav-link font-medium text-white/90 hover:text-cyan-300 transition-all duration-300'
            >
              Clients
            </Link>
            <Link
              to='/about'
              className='nav-link font-medium text-white/90 hover:text-cyan-300 transition-all duration-300'
            >
              About Us
            </Link>
            <Link
              to='/blogs'
              className='nav-link font-medium text-white/90 hover:text-cyan-300 transition-all duration-300'
            >
              Blogs
            </Link>
          </div>

          {/* CTA Button */}
          <div className='hidden lg:block'>
            <Link to='/contact'>
              <Button className='bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 border border-cyan-300/50 hover:border-cyan-300/70'>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-white hover:text-cyan-300 transition-colors duration-300'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-t border-white/20 animate-slide-in shadow-lg text-white'>
          <div className='container mx-auto px-4 py-4 space-y-4'>
            <Link
              to='/'
              className='block py-2 font-medium'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div className='space-y-2'>
              <div className='font-medium text-white py-2'>Services</div>
              <div className='pl-4 space-y-2'>
                {services.map(service => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className='flex items-center gap-2 py-2 text-gray-300 hover:text-white transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className='w-4 h-4 text-cyan-400' />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to='/clients'
              className='block py-2 font-medium'
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              to='/about'
              className='block py-2 font-medium'
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to='/blogs'
              className='block py-2 font-medium'
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link to='/contact'>
              <Button className='bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 w-full'>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
