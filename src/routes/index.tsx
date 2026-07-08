import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { WhyMe } from "@/components/sections/WhyMe";
import { ChatSection } from "@/components/sections/Chat";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyAskButton } from "@/components/sections/StickyAskButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Product Engineering Academy — Build Products. Automate Everything." },
      {
        name: "description",
        content:
          "Learn AI, Python, Product Building, n8n Automation and Claude Code with Gautam Ahuja. Ask technical doubts to an AI-powered assistant.",
      },
      { property: "og:title", content: "AI Product Engineering Academy" },
      {
        property: "og:description",
        content:
          "Build AI-powered products. Learn Python, LLMs, Agents, n8n and Claude Code with an AI-first, project-based curriculum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const chatRef = useRef<HTMLElement>(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onAskClick={scrollToChat} />
      <main>
        <Hero onAskClick={scrollToChat} onServicesClick={scrollToServices} />
        <About />
        <Skills />
        <Services />
        <WhyMe />
        <ChatSection ref={chatRef} />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <StickyAskButton onClick={scrollToChat} />
    </div>
  );
}
