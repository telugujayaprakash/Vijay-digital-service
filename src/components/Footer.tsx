import { Link } from 'react-router-dom';
import { BarChart3, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-accent rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-400 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-accent-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you achieve your digital marketing goals. 
              Get a free consultation today.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold">DigiPro</span>
              </Link>
              <p className="text-primary-foreground/70 mb-6">
                Empowering businesses with data-driven digital marketing solutions that deliver measurable results.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Services</Link></li>
                <li><Link to="/clients" className="text-primary-foreground/70 hover:text-accent transition-colors">Clients</Link></li>
                <li><Link to="/blogs" className="text-primary-foreground/70 hover:text-accent transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">PPC Advertising</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Content Marketing</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Email Marketing</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <span className="text-primary-foreground/70">123 Marketing Street, Digital City, DC 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-accent transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:hello@digipro.com" className="text-primary-foreground/70 hover:text-accent transition-colors">hello@digipro.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 DigiPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
