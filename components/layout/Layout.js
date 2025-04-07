"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const pathName = usePathname();
  const hideHeaderRoutes = ["/signin", "/signup"];

  return (
    <>
      {!hideHeaderRoutes.includes(pathName) && <Header />}
      <main className="min-h-[1000px]">{children}</main>
      {!hideHeaderRoutes.includes(pathName) && <Footer />}
    </>
  );
}

export default Layout;
