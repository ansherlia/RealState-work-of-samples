"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url} onCopy={() => toast.success("لینک کپی شد")}>
      <div className="share flex items-center justify-center gap-x-1 py-1.5 cursor-pointer rounded-lg shadow-lg bg-white md:w-[220px]">
        <LuShare2 color="#0369A1" />
        <p>اشتراک گذاری</p>
        <Toaster />
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
