import SideDock from "@/components/ui/side-dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import CommandPalette from "@/components/CommandPalette";
import MacDock from "@/components/ui/mac-dock";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 w-full max-w-6xl mx-auto px-4 md:px-8 pl-14 md:pl-20 pb-32 min-h-screen overflow-x-hidden pt-12">
      <Header />
      <SideDock />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Recognition />
      <CommandPalette />
      <MacDock />
    </main>
  );
}
