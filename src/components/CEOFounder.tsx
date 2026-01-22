import { Link } from 'react-router-dom'
import {
  Award,
  Users,
  TrendingUp,
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
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4'>
            Leadership
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Meet Our CEO & Founder
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            The visionary leader driving innovation and excellence in digital
            solutions
          </p>
          <div className='w-20 h-1 bg-purple-500 mx-auto rounded-full mt-4' />
        </div>

        {/* Main Founder Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
          {/* Image & Quote */}
          <div className='relative'>
            <img
              src={founder.image}
              alt={founder.name}
              className='w-full max-w-md mx-auto rounded-2xl shadow-2xl'
            />
            <div className='absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-2xl shadow-xl'>
              <Quote className='w-8 h-8 mb-2' />
              <p className='text-sm italic'>"{founder.quote}"</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className='text-3xl font-bold mb-2'>{founder.name}</h3>
            <p className='text-purple-600 font-semibold text-lg mb-4'>
              {founder.title}
            </p>
            <p className='text-gray-600 mb-6 leading-relaxed'>{founder.bio}</p>

            {/* Achievements */}
            <div className='grid grid-cols-2 gap-4 mb-6'>
              {founder.achievements.map((achievement, index) => (
                <div key={index} className='flex items-center'>
                  <Award className='w-5 h-5 text-purple-500 mr-2 flex-shrink-0' />
                  <span className='text-sm text-gray-700'>{achievement}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className='flex space-x-3'>
              <a
                href='#'
                className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors'
              >
                <Linkedin className='w-5 h-5 text-purple-600' />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors'
              >
                <Mail className='w-5 h-5 text-purple-600' />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors'
              >
                <Phone className='w-5 h-5 text-purple-600' />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
          {founder.stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl font-bold text-purple-600 mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-600 font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div>
          <h3 className='text-2xl font-bold text-center mb-12'>Our Journey</h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {journey.map((milestone, index) => (
              <div key={index} className='text-center group'>
                <div className='relative mb-4'>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className='w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {milestone.year}
                  </div>
                </div>
                <h4 className='font-semibold mb-2'>{milestone.title}</h4>
                <p className='text-gray-600 text-sm'>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <Link
            to='/contact'
            className='inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
          >
            Connect with Vijay
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CEOFounder
