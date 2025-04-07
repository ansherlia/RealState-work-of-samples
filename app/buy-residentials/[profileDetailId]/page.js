import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params }) {
  await connectDB();
  const { profileDetailId } = params;
  const profile = await Profile.findOne({ _id: profileDetailId }).select(
    "-userId"
  );
  return <ProfileDetailsPage data={profile} />;
}

export default ProfileDetails;

export async function generateMetadata({ params }) {
  await connectDB();
  const { profileDetailId } = params;
  const profile = await Profile.findOne({ _id: profileDetailId }).select(
    "-userId"
  );

  return {
    title: profile.title,
    description: profile.description,
    keywords: profile.keywords,
  };
}
