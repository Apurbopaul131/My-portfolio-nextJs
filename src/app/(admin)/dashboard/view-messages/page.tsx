import MessageCardContainer from "@/components/ui/MessageCardContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Message",
  description: "This is admin dashboard route",
};
const ViewMessagesPage = () => {
  return (
    <div>
      <MessageCardContainer />
    </div>
  );
};

export default ViewMessagesPage;
