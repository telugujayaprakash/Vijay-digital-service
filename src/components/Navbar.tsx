import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import logo from '../../public/favicon.ico'
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
  const [showServices, setShowServices] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-purple-500/20'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 transition-all duration-300'>
              {/* <BarChart3 className='w-6 h-6 text-white' /> */}
              <img src={logo} alt='' className='w-10 h-10 text-white' />
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
            <div
              className='relative'
              onMouseEnter={() => {
                setShowServices(true)
                // Clear any pending hide timeout
                if (servicesTimeoutRef.current) {
                  clearTimeout(servicesTimeoutRef.current)
                  servicesTimeoutRef.current = null
                }
              }}
              onMouseLeave={() => {
                // Add delay before hiding to allow mouse movement to dropdown
                servicesTimeoutRef.current = setTimeout(() => {
                  setShowServices(false)
                  servicesTimeoutRef.current = null
                }, 300)
              }}
            >
              <button className='nav-link font-medium flex items-center gap-1 text-white/90 hover:text-cyan-300 transition-all duration-300'>
                Services
                <ChevronDown
                  className={`w-4 h-4 text-cyan-300 transition-transform duration-200 ${
                    showServices ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showServices && (
                <div
                  className='fixed left-0 right-0 top-full mt-2 bg-gradient-to-br from-slate-900/98 via-gray-900/98 to-slate-800/98 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl animate-slide-in z-50'
                  onMouseEnter={() => {
                    // Clear hide timeout when mouse enters dropdown
                    if (servicesTimeoutRef.current) {
                      clearTimeout(servicesTimeoutRef.current)
                      servicesTimeoutRef.current = null
                    }
                  }}
                  onMouseLeave={() => {
                    // Hide dropdown when mouse leaves dropdown area
                    setShowServices(false)
                    if (servicesTimeoutRef.current) {
                      clearTimeout(servicesTimeoutRef.current)
                      servicesTimeoutRef.current = null
                    }
                  }}
                >
                  <div className='container mx-auto px-6 py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className='group block'
                        >
                          <div className='flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/20 group-hover:border-cyan-400/40'>
                              <service.icon className='w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors' />
                            </div>
                            <div className='flex-1'>
                              <h3 className='text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300 mb-1'>
                                {service.name}
                              </h3>
                              <p className='text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300'>
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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

            <div>
              <button
                className='flex items-center justify-between w-full py-2 font-medium text-white'
                onClick={() => setShowServices(!showServices)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showServices ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {showServices && (
                <div className='pl-4 space-y-2 mt-2'>
                  {services.map(service => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className='flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground'
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className='w-4 h-4 text-accent' />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
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
