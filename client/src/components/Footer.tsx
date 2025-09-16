import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Mail, text: "hello@flink.dev" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "123 Tech Street, Innovation City" }
  ];

  const services = [
    "Web Development",
    "Online Forms", 
    "Full-Stack Development",
    "SAP BTP Cloud Solutions",
    "AI Utilization"
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Flink</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses with cutting-edge web development, full-stack solutions, 
              SAP BTP cloud services, and AI-powered development tools.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{info.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate rounded px-1 py-1"
                    onClick={() => console.log(`Footer service clicked: ${service}`)}
                    data-testid={`link-footer-${service.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Contact", "Privacy Policy", "Terms of Service"].map((link, index) => (
                <li key={index}>
                  <button 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate rounded px-1 py-1"
                    onClick={() => console.log(`Footer link clicked: ${link}`)}
                    data-testid={`link-footer-${link.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Flink. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onScrollToTop}
            className="gap-2"
            data-testid="button-scroll-to-top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}