import { MessageSquare } from "lucide-react";

interface Props {
  onClick: () => void;
}

export function StickyAskButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Ask AI"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] active:scale-100 md:hidden"
    >
      <MessageSquare className="h-4 w-4" />
      Ask AI
    </button>
  );
}
