import ContactForm from "@/components/ui/ContactForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Apurbo | Contact Us",
  description: "This is contact us route",
};
const ContactPage = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
