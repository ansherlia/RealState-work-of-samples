"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorEmailRegex, setErrorEmailRegex] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegexEmail = (value) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(value)) {
      setErrorEmailRegex("ایمیل نامعتبر است.");
    } else {
      setErrorEmailRegex("");
    }
  };

  const handleVerify = () => {
    const { value } = event.target;
    setConfirmPassword(value);

    const regex = new RegExp(`^${password}$`);

    if (!regex.test(value)) {
      setErrorConfirmPassword("پسورد مطابقت ندارد.");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const chnageHandler = (e) => {
    const { value } = e.target;
    setEmail(value);

    handleRegexEmail(value);
  };
  const router = useRouter();

  const signinHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.message) {
      toast.success(data.message, {
        position: "top-left",
      });
      router.push("/signin");
    } else {
      toast.error(data.error, {
        position: "top-left",
      });
    }
  };

  return (
    <div className="bg__sigin-page flex flex-col justify-center items-center text-zinc-600">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-4xl tracking-wider font-semibold border-b-2 border-zinc-400">
          ثبت نام
        </h2>
        <form className="flex flex-col">
          <label className="mt-4 pb-2 font-semibold">ایمیل</label>
          <input
            type="text"
            className="input___auth"
            value={email}
            onChange={chnageHandler}
          />
          {errorEmailRegex && (
            <p className="text-red-600 font-semibold">{errorEmailRegex}</p>
          )}
          <label className="mt-4 pb-2 font-semibold">رمز عبور</label>
          <input
            type="password"
            className="input___auth"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="mt-4 pb-2 font-semibold">تکرار رمز عبور</label>
          <input
            type="password"
            className="input___auth"
            value={confirmPassword}
            onChange={handleVerify}
          />
          {errorConfirmPassword && (
            <p className="text-red-600 font-semibold">{errorConfirmPassword}</p>
          )}
          {loading ? (
            <ThreeDots color="#3982A9" wrapperStyle={{ margin: "auto" }} />
          ) : (
            <button
              onClick={signinHandler}
              className="text-white font-semibold text-2xl bg-sky-500/50 mt-8 py-2 rounded-lg hover:bg-sky-500/60 transition-colors"
            >
              ثبت نام
            </button>
          )}
        </form>
        <span className="flex text-white gap-x-1 items-center">
          <p> حساب کاربری دارید؟</p>
          <Link href="/signin" className="text-sky-700  font-semibold">
            ورود
          </Link>
        </span>
      </div>
      <Toaster />
    </div>
  );
}

export default SignupPage;
