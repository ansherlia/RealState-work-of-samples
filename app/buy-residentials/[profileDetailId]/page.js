import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/api/profile", {
//     cache: "force-cache",
//   });
//   const data = await res.json();

//   const params = data.data.map((p) => ({ profileId: String(p._id) }));
//   return params;
// }
async function ProfileDetails({ params }) {
  const { profileDetailId } = params;
  // const res = await fetch(`http://localhost:3000/api/profile/${profileId}`);
  // const profile = await res.json();o
  const profile = await Profile.findOne({ _id: profileDetailId });
  if (!profile.error) <h3>مشکلی پیش آمده است.</h3>;
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
