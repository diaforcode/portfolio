// app/page.tsx
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/Projects";
import ExperienceSection from "@/components/ExperienceSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <Education />
      <ExperienceSection />
      <Contact />
      <Footer />
    </main>
  );
}
