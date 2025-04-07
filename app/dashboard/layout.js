import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
export const metadata = {
  title: "پنل کاربری املاک | نمونه کار",
};
async function Layout({ children }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  const user = await User?.findOne({ email: session.user.email });

  return (
    <DashboardSidebar user={JSON.parse(JSON.stringify(user))}>
      {children}
    </DashboardSidebar>
  );
}

export default Layout;
