import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Education } from "@/components/Education";
import { ResumeViewer } from "@/components/ResumeViewer";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-image: radial-gradient(circle, #8A57DE 1px, transparent 1px);
        background-size: 30px 30px;
      }

      .dark .bg-grid-pattern {
        background-image: radial-gradient(circle, rgba(138, 87, 222, 0.3) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light" >
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Skills />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Publications />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Education />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <ResumeViewer />
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
