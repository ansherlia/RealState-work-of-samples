import Card from "../modules/Card";
import Sidebar from "../modules/Sidebar";

function BuyResidentialsPage({ data }) {
  return (
    <div className="container flex flex-col sm:flex-row gap-x-10  pt-[120px]">
      <div className="w-[200px] h-fit shadow-xl bg-white mt-4 rounded-lg">
        <Sidebar />
      </div>
      <div>
        {data.length === 0 && (
          <h3 className="text-2xl text-zinc-100 bg-red-400 py-1 px-4 rounded-md">
            هنوز هیچ آگهی ثبت نکرده اید
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-x-5 ">
          {data.map((i) => (
            <Card data={i} key={i._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
