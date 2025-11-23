import { Card } from "@/components/ui/card";
import { Award, Code2, Laptop } from "lucide-react";
import profileImage from "@assets/generated_images/professional_developer_headshot.png";

export function AboutSection() {
  const stats = [
    { icon: Award, label: "CGPA", value: "9.52", color: "text-blue-500" },
    { icon: Code2, label: "Problems Solved", value: "300+", color: "text-purple-500" },
  ];

  return (
    <section id="about" className="py-24 px-4" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-about-title">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20" />
              <img
                src={profileImage}
                alt="Harshit Pandhare"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-card"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              I am a third-year undergraduate student pursuing a degree in{" "}
              <span className="text-foreground font-semibold">Artificial Intelligence and Data Science</span>{" "}
              at PICT, Pune. With a strong foundation in backend systems, algorithms, and data structures,
              I have developed a keen interest in full-stack development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My active involvement in{" "}
              <span className="text-foreground font-semibold">competitive programming</span> has consistently
              improved my analytical thinking and problem-solving abilities. I specialize in building scalable
              web applications using modern technologies like{" "}
              <span className="text-foreground font-semibold">React, Node.js, Express, and MongoDB</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have hands-on experience with{" "}
              <span className="text-foreground font-semibold">AI integration tools</span> including Google Gemini API,
              and I'm proficient in using development tools like GitHub, Cursor, and Replit AI to build
              efficient, production-ready applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 text-center hover-elevate active-elevate-2 transition-all"
                    data-testid={`card-stat-${index}`}
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold font-[Poppins] mb-1" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
