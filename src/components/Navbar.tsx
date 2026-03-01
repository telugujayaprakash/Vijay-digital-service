import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Menu,
  X,
  ChevronDown,
  Search,
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
    path: '/services/seo',
    colorClass: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Social Media Marketing',
    icon: Share2,
    description: 'Grow your social presence',
    path: '/services/social-media',
    colorClass: 'from-purple-600 to-pink-500'
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    description: 'Convert leads into customers',
    path: '/services/email-marketing',
    colorClass: 'from-amber-500 to-orange-500'
  },
  {
    name: 'PPC Advertising',
    icon: Target,
    description: 'Maximize your ad ROI',
    path: '/services/ppc',
    colorClass: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Content Marketing',
    icon: PenTool,
    description: 'Engage with quality content',
    path: '/services/content-marketing',
    colorClass: 'from-rose-500 to-red-500'
  },
  {
    name: 'Brand Strategy',
    icon: Megaphone,
    description: 'Build a memorable brand',
    path: '/services/brand-strategy',
    colorClass: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'YouTube Promotion',
    icon: Play,
    description: 'Grow your channel and maximize video engagement',
    path: '/services/youtube-promotion',
    colorClass: 'from-red-600 to-rose-600'
  },
  {
    name: 'Web Development',
    icon: Code,
    description: 'Custom web solutions and modern development',
    path: '/services/web-development',
    colorClass: 'from-cyan-600 to-blue-500'
  },
  {
    name: 'Application Testing',
    icon: TestTube,
    description: 'Comprehensive testing and quality assurance',
    path: '/services/application-testing',
    colorClass: 'from-violet-600 to-purple-500'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 transition-all duration-300 shadow-sm group-hover:shadow-md'>
              <img src='/favicon.ico' alt='' className='w-6 h-6' />
            </div>
            <span className='text-xl font-bold text-slate-800 group-hover:text-primary transition-all duration-300'>
              VD Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8 h-full'>
            <Link to='/' className='nav-link'>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className='relative group h-full flex items-center'>
              <button className='nav-link flex items-center gap-1'>
                Services
                <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />
              </button>

              <div className='fixed left-0 right-0 top-[80px] bg-white border-b border-slate-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-[100]'>
                <div className='container mx-auto px-4 py-8 relative'>
                  {/* Subtle background decoration inside the dropdown to maintain SaaS feel */}
                  <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none'></div>

                  <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className='group/card block p-4 rounded-2xl bg-white border border-slate-100 hover:border-transparent hover:shadow-lg transition-all duration-300 relative overflow-hidden'
                      >
                        {/* Fill Animation Background sweeping from left */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${service.colorClass} -translate-x-[101%] group-hover/card:translate-x-0 transition-transform duration-500 ease-out z-0 rounded-2xl`}></div>

                        <div className='flex items-start gap-4 relative z-10'>
                          <div className='w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover/card:bg-white/20 transition-all duration-300 border border-slate-100 group-hover/card:border-white/30 shadow-sm'>
                            <service.icon className='w-6 h-6 text-slate-500 group-hover/card:text-white transition-colors duration-300' />
                          </div>
                          <div className='flex-1 pt-1'>
                            <h3 className='text-base font-bold text-slate-800 group-hover/card:text-white transition-colors duration-300 mb-1 flex items-center'>
                              {service.name}
                              <svg className='w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                              </svg>
                            </h3>
                            <p className='text-sm text-slate-500 group-hover/card:text-white/90 transition-colors duration-300 leading-relaxed'>
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

            <Link to='/clients' className='nav-link'>
              Clients
            </Link>
            <Link to='/about' className='nav-link'>
              About Us
            </Link>
            <Link to='/blogs' className='nav-link'>
              Blogs
            </Link>
          </div>

          {/* CTA Button */}
          <div className='hidden lg:block'>
            <Link to='/contact'>
              <Button className='btn-primary-soft px-8 py-2.5'>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-slate-600 hover:text-primary transition-colors duration-300'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 animate-slide-in shadow-soft text-slate-800'>
          <div className='container mx-auto px-4 py-4 space-y-2'>
            <Link
              to='/'
              className='block py-3 px-4 font-medium rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className='flex items-center justify-between w-full py-3 px-4 font-medium rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary'
                onClick={() => setShowServices(!showServices)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showServices ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {showServices && (
                <div className='pl-8 pr-4 py-2 space-y-2'>
                  {services.map(service => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className='flex items-center gap-3 py-2 text-slate-600 hover:text-primary transition-colors'
                      onClick={() => {
                        setIsOpen(false)
                        setShowServices(false)
                      }}
                    >
                      <service.icon className='w-4 h-4' />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to='/clients'
              className='block py-3 px-4 font-medium rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              to='/about'
              className='block py-3 px-4 font-medium rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to='/blogs'
              className='block py-3 px-4 font-medium rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <div className='pt-2'>
              <Link to='/contact' onClick={() => setIsOpen(false)}>
                <Button className='btn-primary-soft w-full py-3 h-auto'>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

