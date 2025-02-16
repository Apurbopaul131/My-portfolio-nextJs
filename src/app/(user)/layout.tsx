import Footer from "@/components/shered/Footer";
import Navbar from "@/components/shered/Navbar";
import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session}></Navbar>
      <div className="min-h-screen mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
