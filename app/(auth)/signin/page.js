import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/components/templates/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div className="container ">
      <SigninPage />
    </div>
  );
}

export default Signin;
