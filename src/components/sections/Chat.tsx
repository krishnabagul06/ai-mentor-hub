import { forwardRef, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AlertCircle, Bot, RotateCcw, Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { askAi, type ChatMessage } from "@/lib/chat";

const TOPICS = [
  "Python",
  "Product Building",
  "AI",
  "LLMs",
  "Agentic AI",
  "n8n",
  "Claude Code",
  "Prompt Engineering",
];

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

interface ChatSectionProps {
  id?: string;
}

export const ChatSection = forwardRef<HTMLElement, ChatSectionProps>(
  function ChatSection({ id = "ask" }, ref) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastQuery, setLastQuery] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, [messages, loading]);

    const send = async (query: string) => {
      if (!query.trim() || loading) return;
      const userMsg: ChatMessage = {
        id: genId(),
        role: "user",
        content: query.trim(),
        timestamp: Date.now(),
      };
      setMessages((m) => [...m, userMsg]);
      setInput("");
      setError(null);
      setLastQuery(query.trim());
      setLoading(true);
      try {
        const answer = await askAi(query.trim());
        setMessages((m) => [
          ...m,
          {
            id: genId(),
            role: "assistant",
            content: answer,
            timestamp: Date.now(),
          },
        ]);
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Something went wrong.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      send(input);
    };

    const handleRetry = () => {
      if (lastQuery) send(lastQuery);
    };

    return (
      <section id={id} ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              AI Doubt Solver
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Ask Your Technical Doubt
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ask anything related to
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            {/* Transcript */}
            <div
              ref={scrollRef}
              className="max-h-[440px] min-h-[240px] overflow-y-auto p-4 md:p-6"
              role="log"
              aria-live="polite"
              aria-label="Chat conversation"
            >
              {messages.length === 0 && !loading && (
                <div className="flex h-full min-h-[200px] flex-col items-center justify-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Bot className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Hi! I'm your AI assistant.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ask a question below — I'll help you out.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex gap-3 ${
                        m.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-gradient-primary text-primary-foreground shadow-glow"
                        }`}
                        aria-hidden
                      >
                        {m.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </span>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-surface text-foreground"
                        }`}
                      >
                        {m.role === "user" ? (
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {m.content}
                          </p>
                        ) : (
                          <div className="md-content">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {m.content}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                      <Bot className="h-4 w-4" />
                    </span>
                    <div className="rounded-2xl bg-surface px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                        </span>
                        AI is thinking...
                      </div>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4"
                    role="alert"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Something went wrong.
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {error} Please try again.
                      </p>
                      {lastQuery && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleRetry}
                          className="mt-3"
                        >
                          <RotateCcw className="mr-2 h-3.5 w-3.5" />
                          Retry
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-border bg-background p-3 md:p-4"
            >
              <label htmlFor="ask-input" className="sr-only">
                Your question
              </label>
              <div className="flex items-end gap-2">
                <textarea
                  id="ask-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask your question..."
                  rows={2}
                  className="min-h-[52px] w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={!input.trim() || loading}
                  className="h-[52px] shrink-0 bg-gradient-primary px-5 text-primary-foreground shadow-elegant hover:opacity-95"
                  aria-label="Ask AI"
                >
                  <Send className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Ask AI</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  },
);
