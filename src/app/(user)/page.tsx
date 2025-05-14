import AboutMe from "@/components/ui/AboutMe";
import BannerSection from "@/components/ui/BannerSection";

import BlogsContainer from "@/components/ui/BlogsContainer";

import ProjectContainer from "@/components/ui/ProjectContainer";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutMe />
      <ProjectContainer />
      <BlogsContainer />
    </div>
  );
};

export default HomePage;
