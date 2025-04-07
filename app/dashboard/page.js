import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardPage from "@/components/templates/DashboardPage";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");
  return <DashboardPage email={session.user.email} />;
}

export default Dashboard;
