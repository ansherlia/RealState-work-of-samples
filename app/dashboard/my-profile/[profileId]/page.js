import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProfilePage from "@/components/templates/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params }) {
  await connectDB();
  const { profileId } = params;
  const profile = await Profile.findOne({ _id: profileId });
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default ProfileDetails;
