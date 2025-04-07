import DashboardCard from "../modules/DashboardCard";

async function MyProfilePage({ profiles }) {
  return (
    <div className="flex flex-col gap-y-6">
      {!profiles.length && (
        <h3 className="text-2xl text-zinc-100 bg-red-400 py-1 px-4 rounded-md">
          هنوز هیچ آگهی ثبت نکرده اید
        </h3>
      )}
      {profiles?.map((i) => (
        <DashboardCard key={i._id} data={i} />
      ))}
    </div>
  );
}

export default MyProfilePage;
