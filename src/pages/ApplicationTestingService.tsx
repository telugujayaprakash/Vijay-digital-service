import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationTestingPage = () => {
  const strategies = [
    {
      icon: TestTube,
      title: "Automated Testing",
      description:
        "Comprehensive automated test suites using industry-leading testing frameworks and tools.",
      details: [
        "Unit testing implementation",
        "Integration testing",
        "End-to-end test automation",
        "CI/CD pipeline integration",
      ],
    },
    {
      icon: Shield,
      title: "Security Testing",
      description:
        "Thorough security assessment to identify vulnerabilities and ensure data protection.",
      details: [
        "Penetration testing",
        "Vulnerability scanning",
        "Security code review",
        "Compliance testing",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Testing",
      description:
        "Cross-platform mobile testing ensuring flawless performance across all devices.",
      details: [
        "iOS and Android testing",
        "Device compatibility",
        "Performance testing",
        "UI/UX validation",
      ],
    },
    {
      icon: Globe,
      title: "Performance Testing",
      description:
        "Load and performance testing to ensure applications can handle real-world usage.",
      details: [
        "Load testing",
        "Stress testing",
        "Scalability testing",
        "Performance monitoring",
      ],
    },
  ];

  const technologies = [
    { name: "Selenium", category: "Automation", color: "bg-green-500" },
    { name: "Cypress", category: "E2E Testing", color: "bg-gray-600" },
    { name: "Jest", category: "Unit Testing", color: "bg-red-500" },
    { name: "Postman", category: "API Testing", color: "bg-orange-500" },
    { name: "JMeter", category: "Performance", color: "bg-blue-500" },
    { name: "OWASP ZAP", category: "Security", color: "bg-purple-500" },
    { name: "BrowserStack", category: "Cross-browser", color: "bg-indigo-500" },
    { name: "Appium", category: "Mobile", color: "bg-teal-500" },
  ];

  const benefits = [
    "Early bug detection and prevention",
    "Improved application quality and reliability",
    "Reduced development costs and time-to-market",
    "Enhanced user experience and satisfaction",
    "Compliance with industry standards",
    "Comprehensive test coverage and reporting",
    "Scalable testing solutions for growing needs",
    "Expert testing methodologies and best practices",
  ];

  const teamLead = {
    name: "Sai Ganesh",
    role: "Lead QA Engineer",
    experience: "1+ years",
    image: "/api/placeholder/300/300",
    bio: "Dedicated QA professional with expertise in automated testing, performance testing, and quality assurance processes.",
    skills: ["Selenium", "Cypress", "Jest", "JMeter", "Postman", "Appium"],
    achievements: [
      "Certified ISTQB Advanced Level Tester",
      "Led testing for 80+ applications",
      "Implemented automated testing frameworks",
      "Reduced bug detection time by 60%",
      "Established QA processes for multiple teams",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 animate-slide-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
                <TestTube className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                Application <span className="text-primary">Testing</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive testing services ensuring your applications are
                bug-free, secure, and performant. From automated testing to
                security assessment, we cover all aspects of quality assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Start Testing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto"
                >
                  View Test Reports
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Lead Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Meet Our <span className="text-primary">Team Lead</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Leading our testing initiatives with extensive experience in
                quality assurance and testing methodologies
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm">
                      <Users className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">
                      {teamLead.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {teamLead.role}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {teamLead.experience} Experience
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {teamLead.bio}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-800">
                        <TestTube className="w-5 h-5 text-primary" />
                        Testing Tools & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {teamLead.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/5 border border-slate-100 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-800">
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {teamLead.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-slate-600 font-medium"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Testing Tools &{" "}
                <span className="text-primary">Technologies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Industry-leading testing tools and frameworks for comprehensive
                quality assurance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="card-soft p-6 group hover:-translate-y-1 transition-transform duration-500 text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-primary/5 transition-colors`}
                  >
                    <TestTube className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-slate-800">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-500">{tech.category}</p>
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
                Our Testing <span className="text-primary">Strategies</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Comprehensive testing methodologies ensuring application quality
                and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="card-soft p-8 md:p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors duration-300">
                    <strategy.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 transition-colors duration-300">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed transition-colors duration-300">
                    {strategy.description}
                  </p>
                  <ul className="space-y-3 mt-8">
                    {strategy.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-600 font-medium transition-colors duration-300"
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
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800 tracking-tight">
                  Why Choose Our{" "}
                  <span className="text-primary">Testing Services?</span>
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Professional testing services that ensure your applications
                  meet the highest quality standards.
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
                  Start Testing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="card-soft p-8 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>

                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 tracking-tight">
                    Testing Metrics
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">95%</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Bug Detection Rate
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">200+</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Test Cases Daily
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Monitoring
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">
                      99.8%
                    </p>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Test Accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Our Testing <span className="text-primary">Process</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Systematic testing approach ensuring comprehensive quality
                assurance
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirements Analysis",
                  desc: "Understanding requirements and defining test scope",
                },
                {
                  step: "02",
                  title: "Test Planning",
                  desc: "Creating comprehensive test plans and strategies",
                },
                {
                  step: "03",
                  title: "Test Execution",
                  desc: "Running tests and documenting results",
                },
                {
                  step: "04",
                  title: "Reporting & Support",
                  desc: "Detailed reporting and ongoing support",
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
        <section className="py-12 md:py-8 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto card-soft p-8 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
                  Ready to Ensure <span className="text-primary">Quality?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your testing needs and ensure your applications
                  meet the highest quality standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="btn-primary-soft h-14 px-8 text-lg w-full sm:w-auto"
                    >
                      Get Testing Quote
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

export default ApplicationTestingPage;
