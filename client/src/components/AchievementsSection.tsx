import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, TrendingUp } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      platform: "CodeChef",
      rating: 1652,
      badge: "3-Star",
      color: "from-amber-500 to-orange-600",
      stats: "Highest Contest Rating",
      url: "https://www.codechef.com",
    },
    {
      platform: "LeetCode",
      rating: 1493,
      badge: "400+ Problems",
      color: "from-yellow-500 to-orange-500",
      stats: "Highest Contest Rating",
      url: "https://leetcode.com",
    },
    {
      platform: "Codeforces",
      rating: 1230,
      badge: "Pupil",
      color: "from-cyan-500 to-blue-600",
      stats: "Highest Contest Rating",
      url: "https://codeforces.com",
    },
  ];

  const certifications = [
    {
      title: "AI & Data Science",
      institution: "PICT, Pune",
      description: "B.E. with 9.52 CGPA",
    },
    {
      title: "Full Stack Development",
      institution: "Self-Learned",
      description: "MERN Stack & Next.js",
    },
    {
      title: "Competitive Programming",
      institution: "Multiple Platforms",
      description: "Active participant & problem solver",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4" data-testid="section-achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-achievements-title">
          Achievements & Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Competitive Programming
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`link-achievement-${index}`}
              >
                <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${achievement.color}`}>
                        <Star className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-2" data-testid={`text-platform-${index}`}>
                      {achievement.platform}
                    </h4>

                    <div className="mb-3">
                      <div className="text-3xl font-bold font-[Poppins] mb-1" data-testid={`text-rating-${index}`}>
                        {achievement.rating}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.stats}</p>
                    </div>

                    <Badge className={`bg-gradient-to-r ${achievement.color} text-white`} data-testid={`badge-achievement-${index}`}>
                      {achievement.badge}
                    </Badge>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            Education & Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-cert-${index}`}
              >
                <h4 className="text-lg font-semibold mb-2" data-testid={`text-cert-title-${index}`}>
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.institution}</p>
                <p className="text-sm font-medium text-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
