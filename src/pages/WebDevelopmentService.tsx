import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Database, Shield, Zap, Globe, CheckCircle, ArrowRight, Users, Award, Coffee, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopmentPage = () => {
  const strategies = [
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend using modern frameworks and technologies.',
      details: ['React/Vue.js frontend', 'Node.js/Express backend', 'RESTful API development', 'Database integration']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
      details: ['Mobile-first design', 'Cross-browser compatibility', 'Progressive Web Apps', 'Touch-friendly interfaces']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Built-in security measures to protect your website and user data from threats.',
      details: ['SSL/TLS encryption', 'OWASP security standards', 'Data validation & sanitization', 'Regular security audits']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading speeds and optimized performance for better user experience.',
      details: ['Code optimization', 'Image compression', 'Caching strategies', 'CDN integration']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-500' },
    { name: 'Vite.js', category: 'Frontend', color: 'bg-green-500' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-600' },
    { name: 'Express.js', category: 'Backend', color: 'bg-gray-600' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-700' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-700' },
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-500' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-600' }
  ];

  const benefits = [
    'Custom solutions tailored to your business needs',
    'Mobile-responsive design for all devices',
    'SEO-friendly architecture for better visibility',
    'Scalable and maintainable codebase',
    'Secure and robust application security',
    'Fast loading speeds and optimal performance',
    'Ongoing support and maintenance',
    'Modern UI/UX design principles'
  ];

  const teamLead = {
    name: "Jayaprakash",
    role: "Lead Web Developer",
    experience: "2+ years",
    image: "/api/placeholder/300/300",
    bio: "Passionate full-stack developer with expertise in modern web technologies and scalable architecture.",
    skills: ["React", "Node.js", "Tailwind CSS", "MongoDB", "TypeScript","Express.js","MySQL","JavaScript"],
    achievements: [
      "Led development of 10+ web applications",
      "Lead Ideas Innovative to Implementation",
      "Scalable and maintainable codebase",
      "Open source contributor to React ecosystem"
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Web <span className="text-blue-600">Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Custom web solutions built with modern technologies. From responsive websites to complex web applications,
                we deliver scalable, secure, and high-performance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-500/20 hover:border-blue-400/70 hover:text-white font-semibold shadow-lg shadow-blue-400/20 hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Lead Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-blue-600">Team Lead</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Leading our web development initiatives with years of experience in modern technologies
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{teamLead.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{teamLead.role}</p>
                    <p className="text-gray-600">{teamLead.experience} Experience</p>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-6">{teamLead.bio}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-blue-600" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {teamLead.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {teamLead.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologies We <span className="text-blue-600">Use</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks for robust, scalable web solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className={`w-12 h-12 rounded-lg ${tech.color} flex items-center justify-center mx-auto mb-3`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                Our Development <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Strategies</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive development approaches ensuring quality, scalability, and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/50 shadow-lg hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-400/30 group-hover:shadow-blue-400/50 group-hover:scale-110 transition-all duration-300">
                    <strategy.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">{strategy.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-blue-600">Web Development?</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Professional web development services that combine technical excellence with business acumen.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
                  Start Development
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Development Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">150+</p>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">99.9%</p>
                    <p className="text-sm text-gray-400">Uptime SLA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">&lt;2s</p>
                    <p className="text-sm text-gray-400">Load Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">24/7</p>
                    <p className="text-sm text-gray-400">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Development <span className="text-blue-600">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Systematic approach ensuring quality deliverables and client satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Planning', desc: 'Requirements gathering and project planning' },
                { step: '02', title: 'Design & Architecture', desc: 'UI/UX design and system architecture' },
                { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing' },
                { step: '04', title: 'Deployment & Support', desc: 'Production deployment and ongoing support' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Web Solution?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your web development project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400/70">
                  Get Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 border border-indigo-400/50 hover:border-indigo-400/70">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
