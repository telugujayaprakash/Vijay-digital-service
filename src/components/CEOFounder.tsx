import { Link } from 'react-router-dom'
import {
  Award,
  Quote,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react'

const CEOFounder = () => {
  const founder = {
    name: 'Vijay Kumar',
    title: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center',
    bio: 'With over 10 years in digital marketing and technology, Vijay founded our company with a vision to revolutionize how businesses connect with their customers online.',
    achievements: [
      '1+ years in digital marketing',
      '500+ successful projects',
      '50+ team members built',
      'Multiple industry awards'
    ],
    stats: [
      { number: '15+', label: 'Years Experience' },
      { number: '500+', label: 'Projects Completed' },
      { number: '50+', label: 'Happy Clients' },
      { number: '25+', label: 'Team Members' }
    ],
    quote:
      "Success is not just about delivering results—it's about building lasting partnerships and helping businesses truly thrive in the digital age."
  }

  const journey = [
    {
      year: '2008',
      title: 'Started Digital Journey',
      description: 'Began career in digital marketing',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    },
    {
      year: '2012',
      title: 'Entered into complete Digital Solutions',
      description: 'Researched various digital solutions',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center'
    },
    {
      year: '2020',
      title: 'Network Expansion',
      description: 'Build Network with industry leaders',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center'
    },
    {
      year: '2026',
      title: 'Company Founded',
      description: 'Established Vijay Digital Services',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center'
    }
  ]

  return (
    <section className='py-12 md:py-8 bg-background text-slate-800 relative z-10'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-8 md:mb-8 animate-slide-in'>
          <div className='inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary mr-2'></span>
            <span className='text-sm font-semibold text-slate-600'>
              Leadership
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight'>
            Meet Our <span className='text-primary'>CEO & Founder</span>
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto text-lg mb-8'>
            The visionary leader driving innovation and excellence in digital
            solutions
          </p>
        </div>

        {/* Main Founder Section */}
        <div className='grid lg:grid-cols-2 gap-6 items-center mb-6'>
          {/* Image & Quote */}
          <div className='relative'>
            <img
              src={founder.image}
              alt={founder.name}
              className='w-full max-w-md mx-auto rounded-3xl shadow-soft object-cover aspect-square'
            />
            <div className='absolute -bottom-6 -right-2 md:-right-6 bg-white border border-slate-100 p-6 rounded-2xl shadow-soft max-w-xs'>
              <Quote className='w-8 h-8 mb-2 text-primary/40' />
              <p className='text-sm italic text-slate-600'>"{founder.quote}"</p>
            </div>
          </div>

          {/* Info */}
          <div className='lg:pl-8'>
            <h3 className='text-3xl font-bold mb-2 text-slate-800'>{founder.name}</h3>
            <p className='text-primary font-semibold text-lg mb-6'>
              {founder.title}
            </p>
            <p className='text-slate-500 mb-8 leading-relaxed text-lg'>{founder.bio}</p>

            {/* Achievements */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              {founder.achievements.map((achievement, index) => (
                <div key={index} className='flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100'>
                  <Award className='w-5 h-5 text-primary mr-3 flex-shrink-0' />
                  <span className='text-sm text-slate-700 font-medium'>{achievement}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center hover:bg-primary/5 transition-colors group'
              >
                <Linkedin className='w-5 h-5 text-slate-400 group-hover:text-primary transition-colors' />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center hover:bg-primary/5 transition-colors group'
              >
                <Mail className='w-5 h-5 text-slate-400 group-hover:text-primary transition-colors' />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center hover:bg-primary/5 transition-colors group'
              >
                <Phone className='w-5 h-5 text-slate-400 group-hover:text-primary transition-colors' />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 md:mb-8'>
          {founder.stats.map((stat, index) => (
            <div key={index} className='card-soft p-8 text-center'>
              <div className='text-4xl font-bold tracking-tight text-primary mb-2'>
                {stat.number}
              </div>
              <div className='text-slate-500 font-medium text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div>
          <h3 className='text-2xl font-bold text-center mb-8 md:mb-8 text-slate-800'>Our Journey</h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {journey.map((milestone, index) => (
              <div key={index} className='card-soft p-4 group hover:-translate-y-2 transition-transform duration-500'>
                <div className='relative mb-6 overflow-hidden rounded-xl h-40'>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-sm font-semibold shadow-sm'>
                    {milestone.year}
                  </div>
                </div>
                <h4 className='font-semibold mb-2 text-slate-800 px-2'>{milestone.title}</h4>
                <p className='text-slate-500 text-sm px-2 pb-2'>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-6'>
          <Link
            to='/contact'
            className='btn-primary-soft inline-flex px-8 py-3 text-lg items-center justify-center'
          >
            Connect with Vijay
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CEOFounder
