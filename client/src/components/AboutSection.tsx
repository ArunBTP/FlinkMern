import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Trophy, 
  Target, 
  ArrowRight,
  Quote
} from "lucide-react";
import ceoImage from "@assets/generated_images/CEO_professional_headshot_47efa9e6.png";

interface AboutSectionProps {
  onContactUs: () => void;
}

export default function AboutSection({ onContactUs }: AboutSectionProps) {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Trophy, label: "Projects Completed", value: "100+" },
    { icon: Target, label: "Years of Excellence", value: "5+" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Flink
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the way in innovative technology solutions with a passion for excellence and client success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Flink, we believe in the power of technology to transform businesses and create meaningful impact. 
              Our team of skilled developers and technology experts specializes in cutting-edge solutions that drive 
              innovation and accelerate growth.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From web development and MERN stack applications to SAP BTP cloud solutions and AI integration, 
              we deliver comprehensive technology services that help our clients stay ahead in today's competitive landscape.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Button 
              size="lg" 
              onClick={onContactUs}
              data-testid="button-learn-more-about"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* CEO Section */}
          <Card className="border-card-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20 border-2 border-border">
                  <AvatarImage src={ceoImage} alt="Hema Varshini" />
                  <AvatarFallback className="text-xl font-semibold">HV</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Our mission is to empower businesses with innovative technology solutions that not only meet 
                    their current needs but also prepare them for the future. At Flink, we're committed to 
                    delivering excellence in every project."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground text-lg">Hema Varshini</div>
                    <div className="text-primary font-medium">CEO & Founder</div>
                    <div className="text-sm text-muted-foreground">Leading Flink's vision and innovation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Constantly pushing boundaries with cutting-edge technology and creative solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Working closely with clients to understand their vision and deliver tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Maintaining the highest standards of quality in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}