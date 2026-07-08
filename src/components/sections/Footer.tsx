import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span>© 2026 AI Product Engineering Academy</span>
        </div>
        <p className="text-xs text-muted-foreground">Built with AI</p>
      </div>
    </footer>
  );
}
