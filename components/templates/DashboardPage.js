import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function DashboardPage({ email }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  const user = await User.findOne({ email });
  return (
    <div>
      <h2>سلام 👋</h2>
      <span>آگهی های خودرا ثبت کنید تا هزاران نفر آن را مشاهده کنند.</span>
      <div className="flex gap-x-1 mt-4 bg-orange-200/50 py-1 px-2 rounded-md">
        <h4>تاریخ عضویت :</h4>
        <span>{new Date(user.createdAt).toLocaleDateString("fa")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
