import FeaturedProjects from "./components/FeaturedProjects";
import HeroBanner from "./components/HeroBanner";
import MySkills from "./components/MySkills";
import WorkExperience from "./components/WorkExperience";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <HeroBanner />
      <MySkills />
      <FeaturedProjects />
      <WorkExperience />
    </div>
  );
}
