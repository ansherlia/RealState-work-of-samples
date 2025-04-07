"use client";
import { e2p, sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminPage({ data }) {
  const router = useRouter();
  async function publishHandler(id) {
    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.message) {
        toast.success(data.message, {
          position: "top-left",
        });
        router.refresh();
      } else if (data.error) {
        toast.error(data.error, {
          position: "top-left",
        });
      }
    } catch (err) {
      toast.error("خطایی رخ داد!");
      console.error("Error publishing:", err);
    }
  }

  async function deleteHandler(id) {
    try {
      const res = await fetch("/api/admin", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.message) {
        toast.success(data.message, {
          position: "top-left",
        });
        router.refresh();
      } else if (data.error) {
        toast.error(data.error, {
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error("خطایی رخ داد!");
      console.error("Error deleting:", error);
    }
  }

  return (
    <div className="my-10 md:mb-5 md:mt-0 flex flex-col gap-y-10 px-5">
      {!data.length && (
        <p className="text-2xl bg-red-300 text-green-600 px-2 py-1 rounded-md">
          هیچ آگهی برای انتشار وجود ندارد.
        </p>
      )}
      {data.map((i) => (
        <div key={i._id} className="border-b-2 pb-10 border-zinc-500/50">
          <p className="text-2xl text-green-600 font-semibold mb-5">
            {i.title}
          </p>
          <p className="text-zinc-500">{i.location}</p>
          <div className="mt-5 flex gap-x-10">
            <p className="bg-green-500/30 px-5 py-1 text-gray-500 rounded-lg mb-10">
              {i.realState}
            </p>
            <p className="bg-green-500/30 px-5 py-1 text-gray-500 rounded-lg mb-10">
              {(i.price)}
            </p>
          </div>
          <div className="flex gap-x-2">
            <button
              onClick={() => publishHandler(i._id)}
              className="text-white text-xl bg-blue-500 px-4 py-1 rounded-md"
            >
              انتشار
            </button>
            <button
              onClick={() => deleteHandler(i._id)}
              className="text-white text-xl bg-red-500 px-4 py-1 rounded-md"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
      <Toaster />
    </div>
  );
}

export default AdminPage;
