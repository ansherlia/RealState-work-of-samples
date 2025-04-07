"use client";
import Link from "next/link";
import { TbLogin } from "react-icons/tb";
import { MdRealEstateAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      <header className="fixed right-0 left-0 hidden md:flex items-center top-0 mx-auto  h-16  text-white justify-between w-[90%] bg-zinc-500/60 px-7 text-lg py-3 mt-3 rounded-lg ">
        <ul className="flex items-center gap-x-8 text-xl ">
          <Link href="/" className="link-hover">
            <li className=" tracking-wider link-hover transition-colors">
              صفحه اصلی
            </li>
          </Link>
          <Link href="/buy-residentials" className="link-hover">
            <li className=" transition-colors link-hover">آگهی ها</li>
          </Link>
        </ul>
        {status === "authenticated" ? (
          <Link
            href="/dashboard"
            className="hover:bg-orange-200/70 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
          >
            <FaUser color="" fontSize={22} />
          </Link>
        ) : (
          <>
            <Link
              href="/signup"
              className="flex items-center gap-x-1 text-orange-200 hover:bg-orange-200/20 rounded-lg px-3 py-1.5"
            >
              <TbLogin fontSize={22} />
              ورود
            </Link>
          </>
        )}
      </header>
      <div className="flex md:hidden justify-between px-8 items-center bg-zinc-500/40 h-[50px]">
        <div className="flex justify-between items-center w-[100%]">
          <div>
            <span
              onClick={() => setIsOpen(true)}
              className="text-white md:hidden transition-transform cursor-pointer duration-300"
            >
              <GiHamburgerMenu fontSize={24} color="#FED7A7" />
            </span>
            {isOpen ? (
              <div className="w-[250px] fixed right-0 top-0 bg-white/80 h-[450px] transition-all delay-300 duration-500">
                <span
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  <RxCross2 fontSize={26} className="m-2 font-semibold" />
                </span>
                <ul className="flex flex-col  items-start pr-5 gap-y-5 pt-10 text-zinc-400 text-xl font-semibold">
                  <li>
                    {status === "authenticated" ? (
                      <Link href="/dashboard">
                        <FaUser />
                      </Link>
                    ) : (
                      <Link href="/signin" className="flex items-center">
                        ورود
                        <TbLogin />
                      </Link>
                    )}
                  </li>
                  <li>
                    <Link href="/" className="">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/buy-residential" className="">
                      آگهی ها
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="cursor-pointer">
            <Link href="/" className="flex items-center gap-x-1">
              <MdRealEstateAgent fontSize={25} color="#fed7a7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
