import { Link } from 'react-router-dom'
import {
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  TwitterIcon,
  Share,
  Pin
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-white text-slate-800 border-t border-slate-200'>
      {/* CTA Section */}
      {/* <div className='container mx-auto px-4 py-10 md:py-14'>
        <div className='card-soft p-8 md:p-8 md:p-6 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-primary/5 rounded-2xl'></div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl'></div>

          <div className='relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
              Ready to Grow Your Business?
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto mb-8 text-lg'>
              Let's discuss how we can help you achieve your digital marketing
              goals. Get a free consultation today.
            </p>
            <Link to='/contact'>
              <Button className='btn-primary-soft px-8 py-3 text-lg'>
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className='text-slate-600'>
        <div className='container mx-auto px-4 py-10 md:py-14'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Brand */}
            <div>
              <Link to='/' className='flex items-center gap-2 mb-6 group'>
                <div className='w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm group-hover:shadow-md transition-all duration-300'>
                  <img src='/favicon.ico' alt='' className='w-6 h-6' />
                </div>
                <span className='text-xl font-bold text-slate-800 group-hover:text-primary transition-all duration-300'>
                  VD Marketing
                </span>
              </Link>
              <p className='text-slate-500 mb-6'>
                Empowering businesses with data-driven digital marketing
                solutions that deliver measurable results.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://www.instagram.com/vijaydigitalmarketingservice/'
                  target='_blank'
                  className='w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:border-primary/20 transition-all duration-300 hover:-translate-y-1'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='https://www.facebook.com/profile.php?id=61585560825920'
                  target='_blank'
                  className='w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:border-primary/20 transition-all duration-300 hover:-translate-y-1'
                >
                  <Facebook className='w-5 h-5' />
                </a>
                <a
                  href='https://www.youtube.com/@vijaydigitalservice'
                  target='_blank'
                  className='w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:border-primary/20 transition-all duration-300 hover:-translate-y-1'
                >
                  <Youtube className='w-5 h-5' />
                </a>
                <a
                  href='https://www.linkedin.com/in/vijay-digitalservices-8a40033a4/'
                  target='_blank'
                  className='w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:border-primary/20 transition-all duration-300 hover:-translate-y-1'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-slate-800'>
                Quick Links
              </h3>
              <ul className='space-y-4'>
                <li>
                  <Link
                    to='/'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/clients'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blogs'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-slate-800'>Services</h3>
              <ul className='space-y-4'>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/seo'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/social-media'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/ppc'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/content-marketing'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/email-marketing'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    Email Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vijaydigitalservices.com/services/youtube-promotion'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    YouTube Promotion
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className='font-bold text-lg mb-6 text-slate-800'>
                Contact Us
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <div className='mt-1 p-1 rounded-md bg-slate-50 text-slate-400'>
                    <MapPin className='w-4 h-4' />
                  </div>
                  <span className='text-slate-500'>
                    Hyderabad, Telangana, India
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='p-1 border border-slate-100 rounded-md bg-slate-50 text-slate-400'>
                    <Phone className='w-4 h-4' />
                  </div>
                  <a
                    href='tel:+1234567890'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    +91 9703114043
                  </a>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='p-1 border border-slate-100 rounded-md bg-slate-50 text-slate-400'>
                    <Mail className='w-4 h-4' />
                  </div>
                  <a
                    href='mailto:vijaydigitalmarketingservice@gmail.com'
                    className='text-slate-500 hover:text-primary transition-colors duration-300'
                  >
                    vijaydigitalmarketingservice@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-slate-100 bg-slate-50/50'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-slate-500 text-sm'>
              © 2026 Vijay Digital Marketing Services. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-slate-500 hover:text-primary transition-colors duration-300'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-slate-500 hover:text-primary transition-colors duration-300'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-slate-500 hover:text-primary transition-colors duration-300'
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
