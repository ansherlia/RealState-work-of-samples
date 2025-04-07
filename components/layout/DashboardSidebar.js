"use client";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";
import { IoExit } from "react-icons/io5";

function DashboardSidebar({ children, user }) {
  const signoutHandler = async () => {
    signOut();
  };
  return (
    <div className="container  flex flex-col md:flex-row gap-x-10 pt-10 md:pt-[120px] font-semibold text-zinc-500">
      <aside className="flex items-center flex-col w-[100%]  gap-y-10 md:gap-y-5 mb-4 md:mb-0 md:w-[200px] h-fit bg-white p-5 rounded-lg shadow-2xl border-2 border-dashed border-zinc-300">
        <span className="inline-block">
          <GrUserAdmin color="oklch(0.769 0.188 70.08)" fontSize={24} />
        </span>
        <div className="flex flex-col items-center border-b-2 border-zinc-500/40 border-dashed w-fit text-base font-semibold">
          {user.role === "ADMIN" ? (
            <p className="text-2xl mb-2 text-blue-600">مدیر</p>
          ) : null}
          <h4 className="text-xl w-[150px] line-clamp-2">{user.email}</h4>
        </div>
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link href="/dashboard">حساب</Link>
          </li>
          <li>
            <Link href="/dashboard/my-profile">آگهی های من</Link>
          </li>
          <li>
            <Link href="/dashboard/add">ثبت آگهی</Link>
          </li>
          {user.role === "ADMIN" && (
            <li>
              <Link href="/admin">پنل مدیریت</Link>
            </li>
          )}
        </ul>
        <button
          onClick={signoutHandler}
          className="flex gap-x-1 items-center border border-red-300 px-2 py-1 rounded-md hover:bg-red-500/50 transition-colors"
        >
          <IoExit />
          خروج
        </button>
      </aside>
      <div>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
