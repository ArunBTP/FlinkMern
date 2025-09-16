import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  FormInput, 
  Database, 
  Cloud, 
  Bot, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface ServicesSectionProps {
  onContactUs: () => void;
}

export default function ServicesSection({ onContactUs }: ServicesSectionProps) {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
      color: "text-blue-500"
    },
    {
      icon: FormInput,
      title: "Online Forms",
      description: "Dynamic form solutions with validation, analytics, and integration capabilities.",
      features: ["Form Builder", "Data Validation", "Analytics Dashboard"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "MERN Development",
      description: "Full-stack applications using MongoDB, Express, React, and Node.js.",
      features: ["Scalable Architecture", "Real-time Features", "API Development"],
      color: "text-purple-500"
    },
    {
      icon: Cloud,
      title: "SAP BTP Cloud Solutions",
      description: "Enterprise cloud solutions leveraging SAP Business Technology Platform.",
      features: ["Cloud Migration", "Integration Services", "Custom Extensions"],
      color: "text-orange-500"
    },
    {
      icon: Bot,
      title: "AI Utilization",
      description: "AI-powered development tools and automation to accelerate project delivery.",
      features: ["Code Generation", "Automated Testing", "Smart Workflows"],
      color: "text-cyan-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 group cursor-pointer border-card-border"
                onClick={() => console.log(`${service.title} service clicked`)}
                data-testid={`card-service-${service.title.toLowerCase().replace(/ /g, '-')}`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-card-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals and accelerate your digital transformation.
          </p>
          <Button 
            size="lg" 
            onClick={onContactUs}
            className="text-lg px-8"
            data-testid="button-discuss-project"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}