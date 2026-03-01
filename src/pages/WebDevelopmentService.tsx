import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Database,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Coffee,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopmentPage = () => {
  const strategies = [
    {
      icon: Globe,
      title: "Full-Stack Development",
      description:
        "Complete web solutions from frontend to backend using modern frameworks and technologies.",
      details: [
        "React/Vue.js frontend",
        "Node.js/Express backend",
        "RESTful API development",
        "Database integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
      details: [
        "Mobile-first design",
        "Cross-browser compatibility",
        "Progressive Web Apps",
        "Touch-friendly interfaces",
      ],
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description:
        "Built-in security measures to protect your website and user data from threats.",
      details: [
        "SSL/TLS encryption",
        "OWASP security standards",
        "Data validation & sanitization",
        "Regular security audits",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast loading speeds and optimized performance for better user experience.",
      details: [
        "Code optimization",
        "Image compression",
        "Caching strategies",
        "CDN integration",
      ],
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend", color: "bg-blue-500" },
    { name: "Vite.js", category: "Frontend", color: "bg-green-500" },
    { name: "Node.js", category: "Backend", color: "bg-green-600" },
    { name: "Express.js", category: "Backend", color: "bg-gray-600" },
    { name: "MongoDB", category: "Database", color: "bg-green-700" },
    { name: "PostgreSQL", category: "Database", color: "bg-blue-700" },
    { name: "AWS", category: "Cloud", color: "bg-orange-500" },
    { name: "Docker", category: "DevOps", color: "bg-blue-600" },
  ];

  const benefits = [
    "Custom solutions tailored to your business needs",
    "Mobile-responsive design for all devices",
    "SEO-friendly architecture for better visibility",
    "Scalable and maintainable codebase",
    "Secure and robust application security",
    "Fast loading speeds and optimal performance",
    "Ongoing support and maintenance",
    "Modern UI/UX design principles",
  ];

  const teamLead = {
    name: "Jayaprakash",
    role: "Lead Web Developer",
    experience: "2+ years",
    image: "/api/placeholder/300/300",
    bio: "Passionate full-stack developer with expertise in modern web technologies and scalable architecture.",
    skills: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "TypeScript",
      "Express.js",
      "MySQL",
      "JavaScript",
    ],
    achievements: [
      "Led development of 10+ web applications",
      "Lead Ideas Innovative to Implementation",
      "Scalable and maintainable codebase",
      "Open source contributor to React ecosystem",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-slate-800">
      \n <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 animate-slide-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                Web <span className="text-primary">Development</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                Custom web solutions built with modern technologies. From
                responsive websites to complex web applications, we deliver
                scalable, secure, and high-performance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Lead Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Meet Our <span className="text-primary">Team Lead</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Leading our web development initiatives with years of experience
                in modern technologies
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-soft p-8 md:p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
                  <div className="text-center border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                    <div className="w-32 h-32 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Users className="w-14 h-14 text-slate-300" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-800">
                      {teamLead.name}
                    </h3>
                    <p className="text-primary font-bold mb-2 tracking-wide uppercase text-sm">
                      {teamLead.role}
                    </p>
                    <p className="text-slate-500 text-sm font-medium bg-slate-50 py-1.5 px-4 rounded-lg inline-block">
                      {teamLead.experience} Experience
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                      {teamLead.bio}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
                        <Code className="w-5 h-5 text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {teamLead.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg text-xs shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {teamLead.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
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
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Technologies We <span className="text-primary">Use</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks for robust, scalable
                web solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="card-soft p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary/5 transition-colors">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{tech.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our Development <span className="text-primary">Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Comprehensive development approaches ensuring quality,
                scalability, and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="card-soft p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <strategy.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {strategy.description}
                  </p>
                  <ul className="space-y-3">
                    {strategy.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
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
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 tracking-tight text-slate-800 tracking-tight">
                  Why Choose Our{" "}
                  <span className="text-primary">Web Development?</span>
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Professional web development services that combine technical
                  excellence with business acumen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-600 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Start Development
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 tracking-tight">
                    Development Metrics
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">150+</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Projects Completed
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">
                      99.9%
                    </p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Uptime SLA
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">
                      &lt;2s
                    </p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Load Time
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our Development <span className="text-primary">Process</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Systematic approach ensuring quality deliverables and client
                satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  desc: "Requirements gathering and project planning",
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  desc: "UI/UX design and system architecture",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  desc: "Agile development with continuous testing",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  desc: "Production deployment and ongoing support",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300 relative">
                    <span className="text-xl font-bold text-primary">
                      {item.step}
                    </span>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-slate-200 -z-10 -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto card-soft p-8 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                  Ready to Build{" "}
                  <span className="text-primary">Your Web Solution?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your web development project and create
                  something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                    >
                      Get Quote
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto"
                    >
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
