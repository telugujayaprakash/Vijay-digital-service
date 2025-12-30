import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Rocket } from 'lucide-react';

const team = [
  { name: 'John Anderson', role: 'CEO & Founder', initials: 'JA' },
  { name: 'Sarah Williams', role: 'Head of Strategy', initials: 'SW' },
  { name: 'Michael Chen', role: 'Creative Director', initials: 'MC' },
  { name: 'Emily Davis', role: 'SEO Lead', initials: 'ED' },
];

const values = [
  { icon: Target, title: 'Results-Driven', description: 'We focus on delivering measurable outcomes that impact your bottom line.' },
  { icon: Users, title: 'Client-Centric', description: 'Your success is our success. We treat every project as our own.' },
  { icon: Award, title: 'Excellence', description: 'We strive for excellence in everything we do, no compromises.' },
  { icon: Rocket, title: 'Innovation', description: 'We stay ahead of trends to give you a competitive edge.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/10">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                We're <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">DigiPro</span>
              </h1>
              <p className="text-lg text-gray-300">
                A passionate team of digital marketing experts dedicated to helping businesses grow and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded in 2009, DigiPro started with a simple mission: to help businesses navigate the complex world of digital marketing.
                </p>
                <p className="text-gray-300 mb-4">
                  Over 15 years later, we've grown into a full-service digital marketing agency with a team of 50+ experts serving clients worldwide.
                </p>
                <p className="text-gray-300">
                  Our approach combines data-driven strategies with creative excellence to deliver results that matter.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={value.title} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 hover:-translate-y-2 group">
                    <value.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300" />
                    <h3 className="font-bold mb-2 text-white group-hover:text-purple-100 transition-colors duration-300">{value.title}</h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                Meet Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The talented people behind our success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-xl p-6 text-center border border-indigo-400/20 hover:border-indigo-400/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-400/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg shadow-indigo-400/30 group-hover:shadow-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-white group-hover:text-indigo-100 transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
