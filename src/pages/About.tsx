import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Phone,
} from "lucide-react";

const founder = {
  name: "Vijay Kumar",
  title: "Founder & CEO",
  bio: "With over 15 years of experience in digital marketing, Vijay founded Vijay Digital Services with a vision to democratize high-quality marketing solutions for businesses of all sizes.",
  experience: "10+ years",
  clients: "50+",
  projects: "100+",
  image: "/api/placeholder/400/400",
  achievements: [
    "Led digital transformation for 50+ enterprises",
    "Certified Google Ads and Analytics expert",
    "Featured in leading marketing publications",
    'Winner of "Best Digital Agency 2023"',
  ],
  quote:
    "Digital marketing isn't just about visibility—it's about creating meaningful connections that drive real business growth.",
};

const team = [
  {
    name: "Mani Ratnam",
    role: "Content Creator",
    image: "/api/placeholder/300/300",
    bio: "Content Creator with a keen eye for detail and a passion for storytelling.",
    experience: "9+ years",
    expertise: [
      "Content Creation",
      "Innovative content Ideas",
      "content Strategy",
    ],
    linkedin: "#",
  },
  {
    name: "Jayaprakash",
    role: "Web & App Developer",
    image: "/api/placeholder/300/300",
    bio: "Full-stack developer specializing in scalable web & App solutions and cloud architecture.",
    experience: "1+ years",
    expertise: ["Web Development", "App Development", "Cloud Solutions"],
    linkedin: "https://www.linkedin.com/in/telugujayaprakash/",
  },
  {
    name: "Sai Ganesh",
    role: "Application Tester",
    image: "/api/placeholder/300/300",
    bio: "Application Tester with a keen eye for detail, ensuring flawless user experiences.",
    experience: "1+ years",
    expertise: ["Application Testing", "Quality Assurance", "Automation"],
    linkedin: "#",
  },
  {
    name: "Ajay",
    role: "Digital Marketing Strategist",
    image: "/api/placeholder/300/300",
    bio: "Crafting data-driven marketing strategies that deliver measurable results.",
    experience: "1+ years",
    expertise: ["Digital Marketing", "Content Strategy", "Campaign Management"],
    linkedin: "https://www.linkedin.com/in/mangamaddela-ajay-kumar-8256713a0/",
  },
  {
    name: "Ravi",
    role: "Video Editor & Banner Designer",
    image: "/api/placeholder/300/300",
    bio: "Creative video editor and designer bringing brands to life through compelling visuals.",
    experience: "2+ years",
    expertise: ["PhotoShop", "Illustrator", "Premiere Pro", "After Effects"],
    linkedin: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that impact your bottom line.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We treat every project as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, no compromises.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay ahead of trends to give you a competitive edge.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 animate-slide-in">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                <span className="text-sm font-semibold text-slate-600">
                  About Us
                </span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                We're <span className="text-primary">Marketing Experts</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                A passionate team of digital marketing experts dedicated to
                helping businesses grow and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Meet Our <span className="text-primary">Founder</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                The visionary behind Vijay Digital Services and our journey of
                innovation
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="card-soft overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Founder Image & Quote */}
                  <div className="relative bg-slate-50 p-8 md:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="text-center relative z-10">
                      <div className="w-48 h-48 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
                        <Users className="w-20 h-20 text-slate-300" />
                      </div>
                      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative">
                        <div className="absolute -top-4 -left-3 text-6xl text-primary/20 font-serif">
                          "
                        </div>
                        <blockquote className="text-slate-600 text-lg italic mb-4 leading-relaxed relative z-10">
                          {founder.quote}
                        </blockquote>
                        <cite className="text-primary font-semibold block text-sm">
                          - {founder.name}
                        </cite>
                      </div>
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="p-8 md:p-6 flex flex-col justify-center">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-6">
                        {founder.title}
                      </p>
                      <p className="text-slate-500 leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8 pb-10 border-b border-slate-100">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-800 mb-1">
                          {founder.experience}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                          Experience
                        </div>
                      </div>
                      <div className="text-center border-l border-slate-100">
                        <div className="text-3xl font-bold text-slate-800 mb-1">
                          {founder.clients}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                          Clients
                        </div>
                      </div>
                      <div className="text-center border-l border-slate-100">
                        <div className="text-3xl font-bold text-slate-800 mb-1">
                          {founder.projects}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                          Projects
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-4">
                        {founder.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Star className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-slate-600">
                              {achievement}
                            </span>
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
        <section className="py-12 md:py-8 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-soft p-8 group text-center hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Meet Our <span className="text-primary">Expert Team</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Talented professionals dedicated to your success with diverse
                expertise and proven track records.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="card-soft overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      {/* Team Member Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                          <Users className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Team Member Info */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors duration-300 mb-1">
                              {member.name}
                            </h3>
                            <p className="text-sm text-primary font-semibold">
                              {member.role}
                            </p>
                          </div>
                          <div className="sm:text-right bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                            <div className="text-xs font-semibold text-slate-400 mb-0.5 uppercase tracking-wider">
                              Exp
                            </div>
                            <div className="text-sm font-bold text-slate-700">
                              {member.experience}
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-500 group-hover:text-slate-600 transition-colors duration-300 mb-6 leading-relaxed text-sm">
                          {member.bio}
                        </p>

                        {/* Expertise Tags */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold shadow-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300 text-sm font-semibold"
                          >
                            <Users className="w-4 h-4" />
                            <span>LinkedIn Profile</span>
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
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto card-soft p-8 md:p-6 text-center shadow-lg border-primary/10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                Ready to Work with{" "}
                <span className="text-primary">Our Team?</span>
              </h2>
              <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our expertise can help transform your business
                and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary-soft text-lg px-8 py-4 h-auto"
                >
                  Get in Touch
                  <Mail className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+918328022043"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-lg shadow-sm"
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
