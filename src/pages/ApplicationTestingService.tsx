import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import {
  TestTube,
  Bug,
  Shield,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target,
  Zap,
  AlertTriangle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const ApplicationTestingPage = () => {
  const strategies = [
    {
      icon: TestTube,
      title: 'Automated Testing',
      description:
        'Comprehensive automated test suites using industry-leading testing frameworks and tools.',
      details: [
        'Unit testing implementation',
        'Integration testing',
        'End-to-end test automation',
        'CI/CD pipeline integration'
      ]
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description:
        'Thorough security assessment to identify vulnerabilities and ensure data protection.',
      details: [
        'Penetration testing',
        'Vulnerability scanning',
        'Security code review',
        'Compliance testing'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Testing',
      description:
        'Cross-platform mobile testing ensuring flawless performance across all devices.',
      details: [
        'iOS and Android testing',
        'Device compatibility',
        'Performance testing',
        'UI/UX validation'
      ]
    },
    {
      icon: Globe,
      title: 'Performance Testing',
      description:
        'Load and performance testing to ensure applications can handle real-world usage.',
      details: [
        'Load testing',
        'Stress testing',
        'Scalability testing',
        'Performance monitoring'
      ]
    }
  ]

  const technologies = [
    { name: 'Selenium', category: 'Automation', color: 'bg-green-500' },
    { name: 'Cypress', category: 'E2E Testing', color: 'bg-gray-600' },
    { name: 'Jest', category: 'Unit Testing', color: 'bg-red-500' },
    { name: 'Postman', category: 'API Testing', color: 'bg-orange-500' },
    { name: 'JMeter', category: 'Performance', color: 'bg-blue-500' },
    { name: 'OWASP ZAP', category: 'Security', color: 'bg-purple-500' },
    { name: 'BrowserStack', category: 'Cross-browser', color: 'bg-indigo-500' },
    { name: 'Appium', category: 'Mobile', color: 'bg-teal-500' }
  ]

  const benefits = [
    'Early bug detection and prevention',
    'Improved application quality and reliability',
    'Reduced development costs and time-to-market',
    'Enhanced user experience and satisfaction',
    'Compliance with industry standards',
    'Comprehensive test coverage and reporting',
    'Scalable testing solutions for growing needs',
    'Expert testing methodologies and best practices'
  ]

  const teamLead = {
    name: 'Sai Ganesh',
    role: 'Lead QA Engineer',
    experience: '1+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dedicated QA professional with expertise in automated testing, performance testing, and quality assurance processes.',
    skills: ['Selenium', 'Cypress', 'Jest', 'JMeter', 'Postman', 'Appium'],
    achievements: [
      'Certified ISTQB Advanced Level Tester',
      'Led testing for 80+ applications',
      'Implemented automated testing frameworks',
      'Reduced bug detection time by 60%',
      'Established QA processes for multiple teams'
    ]
  }

  return (
    <div className='min-h-screen bg-white text-black'>
      <Navbar />

      <main className='pt-20'>
        {/* Hero Section */}
        <section className='py-24 bg-gradient-to-br from-green-50 to-emerald-100'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center mx-auto mb-6'>
                <TestTube className='w-10 h-10 text-white' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                Application <span className='text-green-600'>Testing</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
                Comprehensive testing services ensuring your applications are
                bug-free, secure, and performant. From automated testing to
                security assessment, we cover all aspects of quality assurance.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:border-green-400/70'
                >
                  Start Testing
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-green-400/50 text-green-300 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/70 hover:text-white font-semibold shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105'
                >
                  View Test Reports
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Lead Section */}
        <section className='py-24 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Meet Our <span className='text-green-600'>Team Lead</span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Leading our testing initiatives with extensive experience in
                quality assurance and testing methodologies
              </p>
            </div>

            <div className='max-w-4xl mx-auto'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  <div className='text-center'>
                    <div className='w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4'>
                      <Users className='w-16 h-16 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>{teamLead.name}</h3>
                    <p className='text-green-600 font-semibold mb-2'>
                      {teamLead.role}
                    </p>
                    <p className='text-gray-600'>
                      {teamLead.experience} Experience
                    </p>
                  </div>

                  <div>
                    <p className='text-gray-700 mb-6'>{teamLead.bio}</p>

                    <div className='mb-6'>
                      <h4 className='font-semibold mb-3 flex items-center gap-2'>
                        <TestTube className='w-5 h-5 text-green-600' />
                        Testing Tools & Frameworks
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {teamLead.skills.map((skill, index) => (
                          <span
                            key={index}
                            className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='font-semibold mb-3 flex items-center gap-2'>
                        <Award className='w-5 h-5 text-green-600' />
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {teamLead.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-2 text-sm text-gray-600'
                          >
                            <CheckCircle className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Testing Tools &{' '}
                <span className='text-green-600'>Technologies</span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Industry-leading testing tools and frameworks for comprehensive
                quality assurance
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center'
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${tech.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <TestTube className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='font-semibold mb-1'>{tech.name}</h3>
                  <p className='text-sm text-gray-500'>{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className='py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-emerald-900/10'></div>
          <div className='absolute top-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl'></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent'>
                Our Testing{' '}
                <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                  Strategies
                </span>
              </h2>
              <p className='text-gray-300 max-w-2xl mx-auto'>
                Comprehensive testing methodologies ensuring application quality
                and reliability
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/50 shadow-lg hover:shadow-2xl hover:shadow-green-400/20 transition-all duration-500 hover:-translate-y-2 group'
                >
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-green-400/30 group-hover:shadow-green-400/50 group-hover:scale-110 transition-all duration-300'>
                    <strategy.icon className='w-7 h-7 text-white' />
                  </div>
                  <h3 className='text-xl font-bold mb-4 text-white group-hover:text-green-100 transition-colors duration-300'>
                    {strategy.title}
                  </h3>
                  <p className='text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300'>
                    {strategy.description}
                  </p>
                  <ul className='space-y-2'>
                    {strategy.details.map((detail, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'
                      >
                        <CheckCircle className='w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors duration-300' />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Why Choose Our{' '}
                  <span className='text-green-600'>Testing Services?</span>
                </h2>
                <p className='text-gray-600 mb-8'>
                  Professional testing services that ensure your applications
                  meet the highest quality standards.
                </p>
                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {benefits.map((benefit, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                      <span className='text-gray-600'>{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:border-green-400/70'
                >
                  Start Testing
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </Button>
              </div>

              <div className='bg-gray-800 rounded-2xl p-8 border border-gray-700'>
                <div className='text-center mb-6'>
                  <Target className='w-12 h-12 text-green-400 mx-auto mb-4' />
                  <h3 className='text-2xl font-bold mb-2'>Testing Metrics</h3>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <p className='text-3xl font-bold text-green-400'>95%</p>
                    <p className='text-sm text-gray-400'>Bug Detection Rate</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-3xl font-bold text-green-400'>200+</p>
                    <p className='text-sm text-gray-400'>Test Cases Daily</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-3xl font-bold text-green-400'>24/7</p>
                    <p className='text-sm text-gray-400'>Monitoring</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-3xl font-bold text-green-400'>99.8%</p>
                    <p className='text-sm text-gray-400'>Test Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-24 bg-gray-900/30'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Testing <span className='text-green-600'>Process</span>
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Systematic testing approach ensuring comprehensive quality
                assurance
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-8'>
              {[
                {
                  step: '01',
                  title: 'Requirements Analysis',
                  desc: 'Understanding requirements and defining test scope'
                },
                {
                  step: '02',
                  title: 'Test Planning',
                  desc: 'Creating comprehensive test plans and strategies'
                },
                {
                  step: '03',
                  title: 'Test Execution',
                  desc: 'Running tests and documenting results'
                },
                {
                  step: '04',
                  title: 'Reporting & Support',
                  desc: 'Detailed reporting and ongoing support'
                }
              ].map((item, index) => (
                <div key={index} className='text-center'>
                  <div className='w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4'>
                    <span className='text-xl font-bold text-green-600'>
                      {item.step}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                  <p className='text-gray-400 text-sm'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-gray-900/50'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Ensure Quality?
            </h2>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              Let's discuss your testing needs and ensure your applications meet
              the highest quality standards.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/contact'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:border-green-400/70'
                >
                  Get Testing Quote
                </Button>
              </Link>
              <Link to='/services'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 border border-emerald-400/50 hover:border-emerald-400/70'
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ApplicationTestingPage
