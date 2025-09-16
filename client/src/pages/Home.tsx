import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setCurrentSection("home");
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentSection={currentSection}
        onSectionChange={scrollToSection}
      />
      
      <main>
        <section id="home">
          <HeroSection onGetStarted={() => scrollToSection("contact")} />
        </section>
        
        <section id="about">
          <AboutSection onContactUs={() => scrollToSection("contact")} />
        </section>
        
        <section id="services">
          <ServicesSection onContactUs={() => scrollToSection("contact")} />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}