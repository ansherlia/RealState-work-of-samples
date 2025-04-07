"use client";
import Link from "next/link";
import Card from "./Card";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function DashboardCard({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/${data._id}`, {
      method: "DELETE",
    });

    const dataPass = await res.json();
    if (dataPass.message) {
      toast.success(dataPass.message, {
        position: "top-left",
      });
      router.refresh();
    } else {
      toast.error(dataPass.error, {
        position: "top-left",
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row  items-center md:items-end bg-white px-10 gap-x-10 rounded-lg">
      <Card data={data} />
      <div className="flex mb-5 items-center gap-x-4 md:gap-x-10">
        <button className="border  border-gray-300 px-4 hover:bg-green-600  hover:text-white transition-colors  py-1 rounded-md text-green-600">
          <Link href={`/dashboard/my-profile/${data._id}`}>ویرایش</Link>
        </button>
        <button
          onClick={deleteHandler}
          className="border border-gray-300 px-4  hover:bg-red-600  hover:text-white transition-colors py-1 rounded-md text-red-600"
        >
          حذف
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
