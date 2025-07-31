import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import Experience from "~/components/Experience";
import Skills from "~/components/Skills";
import Contact from "~/components/Contact";
import Projects from "~/components/Projects";
import Presentations from "~/components/Presentations";

export function Welcome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Presentations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
