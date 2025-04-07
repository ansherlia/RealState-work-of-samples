import "./globals.css";
import Layout from "@/components/layout/Layout";
import Providers from "@/providers/NextauthProviders";
import myFont from "@/utils/font";

export const metadata = {
  title: "املاک | نمونه کار",
  description: "پروژه املاک",
  icons: { icon: "/faviocn.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={myFont.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
