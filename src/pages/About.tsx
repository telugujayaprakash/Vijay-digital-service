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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're <span className="gradient-text">DigiPro</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A passionate team of digital marketing experts dedicated to helping businesses grow and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2009, DigiPro started with a simple mission: to help businesses navigate the complex world of digital marketing.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over 15 years later, we've grown into a full-service digital marketing agency with a team of 50+ experts serving clients worldwide.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines data-driven strategies with creative excellence to deliver results that matter.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-xl p-6 border border-border/50">
                    <value.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people behind our success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-card rounded-xl p-6 text-center border border-border/50 card-hover">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">
                    {member.initials}
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
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
