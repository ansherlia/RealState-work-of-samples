import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilePage from "@/components/templates/MyProfilePage";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function MyProfile() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profile",
      },
    },
  ]);

  return <MyProfilePage profiles={JSON.parse(JSON.stringify(user.profile))} />;
}

export default MyProfile;
