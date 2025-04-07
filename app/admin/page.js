import DashboardSidebar from "@/components/layout/DashboardSidebar";
import AdminPage from "@/components/templates/AdminPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
export const metadata = {
  title: "پنل ادمین املاک | نمونه کار",
};
async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/dashboard");
  const user = await User.findOne({ email: session.user.email });
  if (!user) redirect("/");
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSidebar user={JSON.parse(JSON.stringify(user))}>
      <AdminPage data={JSON.parse(JSON.stringify(profiles))} />
    </DashboardSidebar>
  );
}

export default Admin;
