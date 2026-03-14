import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Search,
  Code,
  Smartphone,
  Share2,
  Youtube,
  BarChart3,
  PenTool,
  Zap,
  ArrowRight,
  ChevronRight,
  X,
} from "lucide-react";

const Contact = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState<string | null>(null);
  const [showScheduler, setShowScheduler] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const templateParams = {
        full_name: formData.name,
        email: formData.email,
        service_type: formData.service,
        project_details: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const services = [
    {
      id: "seo",
      name: "SEO Optimization",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "webdev",
      name: "Web Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile",
      name: "Mobile App Dev",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "social",
      name: "Social Media",
      icon: Share2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "youtube",
      name: "YouTube Promotion",
      icon: Youtube,
      color: "from-red-500 to-pink-500",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "content",
      name: "Content Marketing",
      icon: PenTool,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "other",
      name: "Other Services",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const quickActions = [
    {
      id: "whatsapp",
      name: "WhatsApp Chat",
      icon: MessageCircle,
      description: "Instant chat with our team",
      color: "from-green-500 to-emerald-500",
      action: () =>
        window.open(
          "https://wa.me/919703114043?text=Hi%20Vijay%20Digital%20Services,%20I%27m%20interested%20in%20your%20services",
          "_blank",
        ),
    },
    {
      id: "call",
      name: "Phone Call",
      icon: Phone,
      description: "Speak directly with experts",
      color: "from-blue-500 to-cyan-500",
      action: () => (window.location.href = "tel:+919703114043"),
    },
    {
      id: "schedule",
      name: "Book a Call",
      icon: Calendar,
      description: "Schedule a consultation",
      color: "from-purple-500 to-pink-500",
      action: () => setShowScheduler(true),
    },
    {
      id: "email",
      name: "Send Email",
      icon: Mail,
      description: "Detailed project discussion",
      color: "from-orange-500 to-red-500",
      action: () =>
      (window.location.href =
        "mailto:vijaydigitalmarketingservice@gmail.com"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="container mx-auto px-4 text-center relative z-10 animate-slide-in">
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span className="text-sm font-semibold text-slate-600">
                Get In Touch
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
              Multiple Ways to <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Choose instant contact methods or fill out our detailed contact
              form. We're here to help with your digital marketing needs.
            </p>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-10 md:py-14 bg-background relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Choose How to Connect
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Pick the contact method that suits you best. No forms, no hassle
                - just instant connection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-8">
              {quickActions.map((action, index) => (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="card-soft p-6 group text-left hover:-translate-y-2 transition-transform duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-primary/5 transition-all duration-300`}
                  >
                    <action.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-800">
                    {action.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {action.description}
                  </p>
                  <div className="mt-auto flex items-center text-primary text-sm font-semibold">
                    <span>Click to connect</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Based Contact */}
        <section className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Or Tell Us About Your Project
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Select your service interest and we'll guide you to the perfect
                contact method for your needs.
              </p>
            </div>

            {!selectedService ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className="card-soft p-6 group text-center hover:-translate-y-2 transition-transform duration-500"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-primary/5 transition-all duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-800">
                      {service.name}
                    </h3>
                    <div className="mt-4 flex items-center justify-center text-primary text-sm font-semibold">
                      <span>Select service</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto card-soft p-8 md:p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    Perfect Contact Methods for You
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-all duration-300`}
                      >
                        <action.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors duration-300">
                          {action.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {action.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Traditional Contact Form */}
        <section className="py-12 md:py-8 bg-background relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                Or Send Us a Detailed Message
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Prefer to send a detailed message? Fill out our contact form and
                we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-soft p-8 md:p-8 md:p-6">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-slate-400 shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-slate-400 shadow-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-700 shadow-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="YouTube Promotion">YouTube Promotion</option>
                      <option value="Analytics & Reporting">Analytics & Reporting</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-slate-400 shadow-sm resize-none"
                      placeholder="Please describe your project requirements, goals, budget, and timeline..."
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Sorry, there was an error sending your message. Please
                        try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-soft h-auto py-4 text-base shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        {/* <section className='py-10 md:py-14 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-8 md:mb-8'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent'>
                Other Ways to Reach Us
              </h2>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 border border-cyan-200/50 shadow-lg'>
                <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-400/20'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-bold mb-2 text-gray-900 text-center'>Location</h3>
                <p className='text-gray-600 text-center'>Hyderabad, Telangana, India</p>
              </div>

              <div className='bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 border border-cyan-200/50 shadow-lg'>
                <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-400/20'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-bold mb-2 text-gray-900 text-center'>Phone</h3>
                <p className='text-gray-600 text-center'>+91 9703114043</p>
              </div>

              <div className='bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 border border-cyan-200/50 shadow-lg'>
                <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-cyan-400/20'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-bold mb-2 text-gray-900 text-center'>Email</h3>
                <p className='text-gray-600 text-center text-sm'>vijaydigitalmarketingservice@gmail.com</p>
              </div>

              <div className='bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 border border-cyan-200/50 shadow-lg'>
                <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-400/20'>
                  <Clock className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-bold mb-2 text-gray-900 text-center'>Hours</h3>
                <p className='text-gray-600 text-center text-sm'>Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Scheduler Modal */}
        {showScheduler && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-cyan-200/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Schedule a Call
                </h3>
                <button
                  onClick={() => setShowScheduler(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Choose a convenient time for your free consultation call:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Today 2:00 PM",
                    "Today 4:00 PM",
                    "Tomorrow 10:00 AM",
                    "Tomorrow 2:00 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        window.open(
                          "https://calendly.com/vijaydigitalservices",
                          "_blank",
                        );
                        setShowScheduler(false);
                      }}
                      className="p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 border border-cyan-200/50 hover:border-cyan-400/70 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-cyan-600"
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vijaydigitalservices",
                      "_blank",
                    );
                    setShowScheduler(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  View Full Calendar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
