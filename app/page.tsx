import AboutSection from "@/components/AboutSection"
import Education from "@/components/Education"
import HeroSection from "@/components/HeroSection"
import SocialLinks from "@/components/SocialLinks"
// import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Education />
      {/* <ProjectsSection /> */}
      <SocialLinks />
    </main>
  )
}
