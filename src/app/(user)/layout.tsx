import Footer from "@/components/shered/Footer";
import Navbar from "@/components/shered/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
