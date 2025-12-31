import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <Navbar />
      <main className='pt-20'>
        {/* Hero */}
        <section className='py-24 bg-gradient-to-br from-gray-700 via-slate-900 to-gray-600 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-emerald-900/10'></div>
          <div className='absolute top-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl'></div>

          <div className='container mx-auto px-4 text-center relative z-10'>
            <span className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/30 text-emerald-300 font-medium text-sm mb-4 shadow-lg shadow-green-400/10'>
              Contact Us
            </span>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent'>
              Let's Connect
            </h1>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              Ready to start your digital marketing journey? Get in touch with
              us today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-green-900/10'></div>
          <div className='absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl'></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <div className='bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20 shadow-2xl shadow-emerald-400/10'>
                <h2 className='text-2xl font-bold mb-6 text-white'>
                  Send us a message
                </h2>
                <form className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium mb-2 text-emerald-200'>
                        First Name
                      </label>
                      <input
                        type='text'
                        className='w-full px-4 py-3 rounded-lg border border-emerald-400/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all'
                        placeholder='John'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium mb-2 text-emerald-200'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='w-full px-4 py-3 rounded-lg border border-emerald-400/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all'
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-emerald-200'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='w-full px-4 py-3 rounded-lg border border-emerald-400/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all'
                      placeholder='john@example.com'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-emerald-200'>
                      Subject
                    </label>
                    <input
                      type='text'
                      className='w-full px-4 py-3 rounded-lg border border-emerald-400/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all'
                      placeholder='How can we help?'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-emerald-200'>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className='w-full px-4 py-3 rounded-lg border border-emerald-400/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all resize-none'
                      placeholder='Tell us about your project...'
                    />
                  </div>
                  <Button
                    className='w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 border border-emerald-400/50 hover:border-emerald-400/70'
                    size='lg'
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className='space-y-8'>
                <div>
                  <h2 className='text-2xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent'>
                    Get in touch
                  </h2>
                  <p className='text-gray-300'>
                    Have questions about our services? We're here to help. Reach
                    out to us through any of the following channels.
                  </p>
                </div>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-400/30 group-hover:shadow-teal-400/50 group-hover:scale-110 transition-all duration-300'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1 text-white group-hover:text-teal-100 transition-colors duration-300'>
                        Office Address
                      </h3>
                      <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 group'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-400/30 group-hover:shadow-emerald-400/50 group-hover:scale-110 transition-all duration-300'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1 text-white group-hover:text-emerald-100 transition-colors duration-300'>
                        Phone
                      </h3>
                      <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
                        +91 8328022043
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1 text-white group-hover:text-cyan-100 transition-colors duration-300'>
                        Email
                      </h3>
                      <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
                        vijaydigitalmarketingservice@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300 group'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-400/30 group-hover:shadow-green-400/50 group-hover:scale-110 transition-all duration-300'>
                      <Clock className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1 text-white group-hover:text-green-100 transition-colors duration-300'>
                        Business Hours
                      </h3>
                      <p className='text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
