import Banner from "@/components/ui/Banner";
import BlogsContainer from "@/components/ui/BlogsContainer";
import ProjectContainer from "@/components/ui/ProjectContainer";
import SkillSection from "@/components/ui/SkillSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <SkillSection />
      <ProjectContainer />
      <BlogsContainer />
    </div>
  );
};

export default HomePage;
