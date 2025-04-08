import BuyResidentialsPage from "@/components/templates/BuyResidentialsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "خرید و فروش املاک | نمونه کار",
  description: "خرید و فروش املاک | نمونه کار",
  keywords: "خرید و فروش املاک | نمونه کار",
};
export const dynamic = "force-dynamic";

async function BuyResidentials({ searchParams }) {
  await connectDB();
  const data = await Profile.find({ published: true });
  let finalData = data;
  if (searchParams.category) {
    finalData = data.filter((i) => i.category === searchParams.category);
  }
  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
