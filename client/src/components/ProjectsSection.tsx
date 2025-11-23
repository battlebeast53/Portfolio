import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import travelPlannerImage from "@assets/generated_images/ai_travel_planner_app_mockup.png";
import ecommerceImage from "@assets/generated_images/monsoon_ecommerce_platform_mockup.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Based Travel Planner",
      description:
        "Deployed an AI-powered travel itinerary generation platform leveraging batch-based prompt engineering to produce multi-day, activity-rich travel plans. Integrated Google Gemini API for intelligent content generation with secure session-based authentication using Clerk and Convex.",
      image: travelPlannerImage,
      techStack: ["Next.js", "JavaScript", "Google Gemini API", "Clerk", "Convex"],
      aiTools: ["Google Gemini API", "AI Prompt Engineering"],
      githubUrl: "https://github.com/battlebeast53/AI-Trip-Planner",
      liveUrl: "#",
    },
    {
      title: "Monsoon Ecommerce Platform",
      description:
        "Architected and developed a production-grade ecommerce platform with complete shopping workflows. Built a feature-rich admin dashboard for managing users, inventory, and orders with real-time updates. Enhanced MongoDB performance using indexed queries and optimized schema design.",
      image: ecommerceImage,
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Razorpay"],
      aiTools: [],
      githubUrl: "https://github.com/battlebeast53/Monsoon-Ecommerce",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all group"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.aiTools.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">AI Tools Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.aiTools.map((tool, toolIndex) => (
                        <Badge
                          key={toolIndex}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          data-testid={`badge-ai-${index}-${toolIndex}`}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" asChild data-testid={`button-github-${index}`}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild data-testid={`button-demo-${index}`}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
