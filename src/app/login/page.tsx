import LoginForm from "@/components/ui/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Login",
  description: "This is login route",
};
const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
