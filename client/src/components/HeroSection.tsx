import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Web Engineer",
  "AI Integration Specialist",
  "Competitive Programmer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="text-muted-foreground text-lg mb-2" data-testid="text-greeting">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" data-testid="text-name">
            Harshit Pandhare
          </h1>
        </div>

        <div className="h-16 md:h-20 mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground" data-testid="text-role">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-subtitle">
          Third-year AI & Data Science student at PICT, Pune. Building scalable web applications
          and solving complex problems through code.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button onClick={scrollToContact} size="lg" data-testid="button-hire-me">
            Hire Me
          </Button>
          <Button variant="outline" size="lg" asChild data-testid="button-download-resume">
            <a href="/Harshit_Pandhare_Resume.pdf" download="Harshit_Pandhare_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            data-testid="link-github"
          >
            <a href="https://github.com/battlebeast53" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            data-testid="link-linkedin"
          >
            <a href="https://linkedin.com/in/harshit-pandhare" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            data-testid="link-email"
          >
            <a href="mailto:harshitpandhare53@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
}
