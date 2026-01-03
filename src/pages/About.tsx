import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Users,
  Target,
  Award,
  Rocket,
  MapPin,
  Calendar,
  Trophy,
  Star,
  Mail,
  Phone
} from 'lucide-react'

const founder = {
  name: 'Vijay Kumar',
  title: 'Founder & CEO',
  bio: 'With over 15 years of experience in digital marketing, Vijay founded Vijay Digital Services with a vision to democratize high-quality marketing solutions for businesses of all sizes.',
  experience: '10+ years',
  clients: '50+',
  projects: '100+',
  image: '/api/placeholder/400/400',
  achievements: [
    'Led digital transformation for 50+ enterprises',
    'Certified Google Ads and Analytics expert',
    'Featured in leading marketing publications',
    'Winner of "Best Digital Agency 2023"'
  ],
  quote:
    "Digital marketing isn't just about visibility—it's about creating meaningful connections that drive real business growth."
}

const team = [
  {
    name: 'Mani Ratnam',
    role: 'Content Creator',
    image: '/api/placeholder/300/300',
    bio: 'Content Creator with a keen eye for detail and a passion for storytelling.',
    experience: '9+ years',
    expertise: [
      'Content Creation',
      'Innovative content Ideas',
      'content Strategy'
    ],
    linkedin: '#'
  },
  {
    name: 'Jayaprakash',
    role: 'Web & App Developer',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack developer specializing in scalable web & App solutions and cloud architecture.',
    experience: '1+ years',
    expertise: ['Web Development', 'App Development', 'Cloud Solutions'],
    linkedin: 'https://www.linkedin.com/in/telugujayaprakash/'
  },
  {
    name: 'Sai Ganesh',
    role: 'Application Tester',
    image: '/api/placeholder/300/300',
    bio: 'Application Tester with a keen eye for detail, ensuring flawless user experiences.',
    experience: '1+ years',
    expertise: ['Application Testing', 'Quality Assurance', 'Automation'],
    linkedin: '#'
  },
  {
    name: 'Ajay',
    role: 'Digital Marketing Strategist',
    image: '/api/placeholder/300/300',
    bio: 'Crafting data-driven marketing strategies that deliver measurable results.',
    experience: '1+ years',
    expertise: ['Digital Marketing', 'Content Strategy', 'Campaign Management'],
    linkedin: 'https://www.linkedin.com/in/mangamaddela-ajay-kumar-8256713a0/'
  },
  {
    name: 'Ravi',
    role: 'Video Editor & Banner Designer',
    image: '/api/placeholder/300/300',
    bio: 'Creative video editor and designer bringing brands to life through compelling visuals.',
    experience: '2+ years',
    expertise: ['PhotoShop', 'Illustrator', 'Premiere Pro', 'After Effects'],
    linkedin: '#'
  }
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We focus on delivering measurable outcomes that impact your bottom line.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description:
      'Your success is our success. We treat every project as our own.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, no compromises.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We stay ahead of trends to give you a competitive edge.'
  }
]

const About = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <Navbar />
      <main className='pt-20'>
        {/* Hero */}
        <section className='py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50'></div>
          <div className='absolute top-0 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-100 rounded-full blur-2xl'></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <span className='inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-medium text-sm mb-4'>
                About Us
              </span>
              <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                We're{' '}
                <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                  Marketing Experts
                </span>
              </h1>
              <p className='text-lg text-gray-600'>
                A passionate team of digital marketing experts dedicated to
                helping businesses grow and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className='py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50'></div>
          <div className='absolute top-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl'></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                Meet Our{' '}
                <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                  Founder
                </span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                The visionary behind Vijay Digital Services and our journey of
                innovation
              </p>
            </div>

            <div className='max-w-6xl mx-auto'>
              <div className='bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50'>
                <div className='grid lg:grid-cols-2 gap-0'>
                  {/* Founder Image & Quote */}
                  <div className='relative bg-gradient-to-br from-blue-500 to-cyan-600 p-12 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center mx-auto mb-6 shadow-2xl'>
                        <Users className='w-24 h-24 text-white' />
                      </div>
                      <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg'>
                        <blockquote className='text-gray-700 text-lg italic mb-4 leading-relaxed'>
                          "{founder.quote}"
                        </blockquote>
                        <cite className='text-blue-600 font-semibold'>
                          - {founder.name}
                        </cite>
                      </div>
                    </div>
                    {/* Background pattern */}
                    <div className='absolute inset-0 opacity-10'>
                      <div className='absolute top-10 left-10 w-20 h-20 border border-white rounded-full'></div>
                      <div className='absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full'></div>
                      <div className='absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full'></div>
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className='p-12 flex flex-col justify-center'>
                    <div className='mb-8'>
                      <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                        {founder.name}
                      </h3>
                      <p className='text-xl text-blue-600 font-semibold mb-6'>
                        {founder.title}
                      </p>
                      <p className='text-gray-600 leading-relaxed mb-6'>
                        {founder.bio}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-6 mb-8'>
                      <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                          {founder.experience}
                        </div>
                        <div className='text-sm text-gray-500'>Experience</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                          {founder.clients}
                        </div>
                        <div className='text-sm text-gray-500'>
                          Happy Clients
                        </div>
                      </div>
                      <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                          {founder.projects}
                        </div>
                        <div className='text-sm text-gray-500'>
                          Projects Done
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                        <Trophy className='w-5 h-5 text-yellow-500' />
                        Key Achievements
                      </h4>
                      <div className='space-y-3'>
                        {founder.achievements.map((achievement, index) => (
                          <div key={index} className='flex items-start gap-3'>
                            <Star className='w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0' />
                            <span className='text-gray-600'>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-24 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Our{' '}
                <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                  Values
                </span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className='group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300 border border-blue-200'>
                    <value.icon className='w-7 h-7 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                    {value.title}
                  </h3>
                  <p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-24 bg-gray-50 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50'></div>
          <div className='absolute top-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-100 rounded-full blur-2xl'></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                Meet Our{' '}
                <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                  Expert Team
                </span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Talented professionals dedicated to your success with diverse
                expertise and proven track records.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className='group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='p-8'>
                    <div className='flex items-start gap-6'>
                      {/* Team Member Image */}
                      <div className='flex-shrink-0'>
                        <div className='w-20 h-20 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300 border border-blue-200'>
                          <Users className='w-10 h-10 text-blue-600' />
                        </div>
                      </div>

                      {/* Team Member Info */}
                      <div className='flex-1'>
                        <div className='flex items-start justify-between mb-4'>
                          <div>
                            <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1'>
                              {member.name}
                            </h3>
                            <p className='text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-medium'>
                              {member.role}
                            </p>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm text-gray-400 mb-1'>
                              Experience
                            </div>
                            <div className='text-lg font-semibold text-indigo-400'>
                              {member.experience}
                            </div>
                          </div>
                        </div>

                        <p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 leading-relaxed'>
                          {member.bio}
                        </p>

                        {/* Expertise Tags */}
                        <div className='mb-4'>
                          <div className='flex flex-wrap gap-2'>
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className='px-3 py-1 bg-indigo-500/20 text-black rounded-full text-xs font-medium border border-indigo-400/30'
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
                          <a
                            href={member.linkedin}
                            target='_blank'
                            className='flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-300'
                          >
                            <Users className='w-4 h-4' />
                            <span className='text-sm'>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-600/20'></div>
          <div className='absolute top-0 left-1/3 w-72 h-72 bg-white/10 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 right-1/3 w-72 h-72 bg-white/10 rounded-full blur-2xl'></div>

          <div className='container mx-auto px-4 relative z-10 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
              Ready to Work with Our Team?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let's discuss how our expertise can help transform your business
              and achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2'
              >
                Get in Touch
                <Mail className='w-5 h-5' />
              </a>
              <a
                href='tel:+918328022043'
                className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-2'
              >
                Call Now
                <Phone className='w-5 h-5' />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
