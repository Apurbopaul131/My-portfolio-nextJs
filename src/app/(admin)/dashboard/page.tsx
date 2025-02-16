import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard Content {session?.user?.name}
      </h1>
      <p className="mt-4">This is a scrollable content area.</p>
      <div className="h-[200vh] mt-6 p-4">
        Scroll to see the sidebar stay fixed!
      </div>
    </div>
  );
};

export default page;
