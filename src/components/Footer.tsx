import { Link } from 'react-router-dom'
import {
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'>
      {/* CTA Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-cyan-400/20 shadow-2xl shadow-cyan-400/10'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10 rounded-2xl'></div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl'></div>

          <div className='relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-4'>
              Ready to Grow Your Business?
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-lg'>
              Let's discuss how we can help you achieve your digital marketing
              goals. Get a free consultation today.
            </p>
            <Button
              variant='default'
              size='lg'
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 hover:border-cyan-400/70'
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='border-t border-cyan-400/20 text-white'>
        <div className='container mx-auto px-4 py-16'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Brand */}
            <div>
              <Link to='/' className='flex items-center gap-2 mb-6 group'>
                <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 transition-all duration-300'>
                  <BarChart3 className='w-6 h-6 text-white' />
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300'>DigiPro</span>
              </Link>
              <p className='text-gray-300 mb-6'>
                Empowering businesses with data-driven digital marketing
                solutions that deliver measurable results.
              </p>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20'
                >
                  <Facebook className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20'
                >
                  <Twitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20'
                >
                  <Instagram className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-cyan-300'>Quick Links</h3>
              <ul className='space-y-4'>
                <li>
                  <Link
                    to='/'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/clients'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blogs'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-cyan-300'>Services</h3>
              <ul className='space-y-4'>
                <li>
                  <a
                    href='#'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    Email Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-cyan-300'>Contact Us</h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-cyan-400 mt-1' />
                  <span className='text-gray-300'>
                    123 Marketing Street, Digital City, DC 10001
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-cyan-400' />
                  <a
                    href='tel:+1234567890'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-cyan-400' />
                  <a
                    href='mailto:hello@digipro.com'
                    className='text-gray-300 hover:text-cyan-300 transition-colors duration-300'
                  >
                    hello@digipro.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-cyan-400/20'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-400 text-sm'>
              © 2025 DigiPro. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-300 transition-colors duration-300'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-300 transition-colors duration-300'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-300 transition-colors duration-300'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
