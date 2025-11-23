import { Navigation } from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="h-[200vh] pt-20">
          <section id="about" className="h-screen bg-muted/30 flex items-center justify-center">
            <h2 className="text-3xl font-bold">About Section</h2>
          </section>
          <section id="skills" className="h-screen flex items-center justify-center">
            <h2 className="text-3xl font-bold">Skills Section</h2>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}
