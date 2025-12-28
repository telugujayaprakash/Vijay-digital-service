import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Search, BarChart3, Share2, Mail, Target, PenTool, Megaphone } from 'lucide-react';

const services = [
  { name: 'SEO Optimization', icon: Search, description: 'Boost your search rankings' },
  { name: 'Social Media Marketing', icon: Share2, description: 'Grow your social presence' },
  { name: 'Email Marketing', icon: Mail, description: 'Convert leads into customers' },
  { name: 'PPC Advertising', icon: Target, description: 'Maximize your ad ROI' },
  { name: 'Content Marketing', icon: PenTool, description: 'Engage with quality content' },
  { name: 'Brand Strategy', icon: Megaphone, description: 'Build a memorable brand' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DigiPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="nav-link font-medium flex items-center gap-1">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
              </button>
              
              {showServices && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-slide-in">
                  <div className="bg-card rounded-xl shadow-lg border border-border p-4 w-[500px] grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to="/services"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <service.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/clients" className="nav-link font-medium">Clients</Link>
            <Link to="/about" className="nav-link font-medium">About Us</Link>
            <Link to="/contact" className="nav-link font-medium">Contact Us</Link>
            <Link to="/blogs" className="nav-link font-medium">Blogs</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium"
                onClick={() => setShowServices(!showServices)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? 'rotate-180' : ''}`} />
              </button>
              {showServices && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to="/services"
                      className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4 text-accent" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/clients" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Clients</Link>
            <Link to="/about" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/blogs" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Blogs</Link>
            
            <Button variant="accent" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
