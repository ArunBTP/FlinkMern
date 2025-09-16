import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Cloud } from "lucide-react";
import heroImage from "@assets/generated_images/Tech_hero_background_image_4a37326c.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Development Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Accelerate Your Digital
            <span className="text-primary block">Transformation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Flink delivers cutting-edge web development, MERN stack solutions, SAP BTP cloud services, 
            and AI-powered tools to help your business innovate faster and scale smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6"
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm"
              onClick={() => console.log("Learn more clicked")}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-card-border">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-medium text-card-foreground">MERN Stack</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-card-border">
              <Cloud className="w-6 h-6 text-primary" />
              <span className="font-medium text-card-foreground">SAP BTP Cloud</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-card-border">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-medium text-card-foreground">AI Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}