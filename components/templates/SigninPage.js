"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (!result.ok) {
      toast.error(result.error, {
        position: "top-left",
      });
    } else {
      toast.success("ورود با موفقیت انجام شد.", {
        position: "top-left",
      });
      router.push("/dashboard");
    }
  };
  return (
    <div className="bg__sigin-page flex flex-col justify-center items-center text-zinc-600">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-4xl tracking-wider font-semibold border-b-2 border-zinc-400">
          ورود
        </h2>
        <form className="flex flex-col">
          <label className="mt-4 pb-2 font-semibold">ایمیل</label>
          <input
            type="text"
            className="input___auth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-4 pb-2 font-semibold">رمز عبور</label>
          <input
            type="password"
            className="input___auth"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading ? (
            <ThreeDots color="#3982A9" wrapperStyle={{ margin: "auto" }} />
          ) : (
            <button
              onClick={signinHandler}
              className="text-white font-semibold text-2xl bg-sky-500/50 mt-8 py-2 rounded-lg hover:bg-sky-500/60 transition-colors"
            >
              ورود
            </button>
          )}
        </form>
        <span className="flex text-white gap-x-2">
          <p> حساب کاربری ندارید؟</p>
          <Link href="/signup" className="text-sky-700  font-semibold">
            ثبت نام
          </Link>
        </span>
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
