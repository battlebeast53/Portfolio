import { ThemeProvider } from "../ThemeProvider";
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeProvider";

function ThemeToggleDemo() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="p-8 space-y-4">
      <p>Current theme: {theme}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <ThemeToggleDemo />
    </ThemeProvider>
  );
}
