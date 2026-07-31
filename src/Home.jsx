import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { CaseStudies } from "./components/CaseStudies";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <div
      className="
      min-h-screen
      relative
      bg-white text-black
      dark:bg-black dark:text-white
      transition-colors duration-500
      bg-[var(--bg-primary)] text-[var(--text-primary)]
      "
    >
      <div className="particles"></div>

      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
