import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Cpu, Wrench } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: ["Node.js", "Express.js", "REST APIs", "EJS"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "SQL", "Convex"],
    },
    {
      title: "AI & APIs",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      skills: ["Google Gemini API", "OpenAI", "API Integration"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-yellow-500 to-amber-500",
      skills: ["Git", "GitHub", "Cloudinary", "Razorpay", "Clerk", "Docker", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30" data-testid="section-skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-skills-title">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-skill-category-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-md bg-gradient-to-br ${category.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-category-title-${index}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      data-testid={`badge-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Proficient in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["C++", "Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"].map((skill, index) => (
              <Badge key={index} data-testid={`badge-coursework-${index}`}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
