import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshitpandhare53@gmail.com",
      href: "mailto:harshitpandhare53@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91562 50830",
      href: "tel:+919156250830",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: "#",
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      username: "battlebeast53",
      href: "https://github.com/battlebeast53",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Harshit Pandhare",
      href: "https://linkedin.com/in/harshit-pandhare",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30" data-testid="section-contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                      data-testid={`link-contact-${index}`}
                    >
                      <div className="p-3 rounded-md bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                      data-testid={`link-social-${index}`}
                    >
                      <div className="p-3 rounded-md bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
