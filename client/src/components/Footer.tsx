import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4" data-testid="footer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <span>Built</span>
          <span>by Harshit Pandhare</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
