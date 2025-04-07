"use client";
import { useEffect, useState } from "react";
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";
import TextList from "../modules/TextList";
import CustomDatePicker from "../modules/CustomDatePicker";
import { ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructiorDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  useEffect(() => {
    if (data) setProfile(data);
  }, []);
  const editHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/`, {
      method: "PATCH",
      body: JSON.stringify(profile),
      headers: { "Content-Type": "applicaton/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.message) {
      toast.success(data.message, {
        position: "top-left",
      });
    } else {
      toast.error(data.error, {
        position: "top-left",
      });
    }
  };
  const addProfileHandler = async () => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/profile", {
      method: "POST",
      body: JSON.stringify(profile),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    setProfile({
      title: "",
      description: "",
      location: "",
      phone: "",
      price: "",
      realState: "",
      constructiorDate: new Date(),
      category: "",
      rules: [],
      amenities: [],
    });
    if (data.message) {
      toast.success(data.message, {
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error(data.error, {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      {data ? (
        <>
          <h3 className="bg-orange-400/70 select-none md:w-[700px] py-1.5 px-2 rounded-md text-zinc-500 text-xl tracking-widest">
            ویرایش آگهی
          </h3>
        </>
      ) : (
        <h3 className="bg-orange-400/70 select-none md:w-[700px] py-1.5 px-2 rounded-md text-zinc-500 text-xl tracking-widest">
          ثبت آگهی
        </h3>
      )}
      <div className="">
        <TextInput
          name="title"
          title="عنوان آگهی"
          profile={profile}
          setProfile={setProfile}
          textarea={false}
        />
        <TextInput
          name="description"
          title="توضیحات"
          profile={profile}
          setProfile={setProfile}
          textarea={true}
        />
        <TextInput
          name="location"
          title="آدرس"
          profile={profile}
          setProfile={setProfile}
          textarea={false}
        />
        <TextInput
          name="phone"
          title="شماره تماس"
          profile={profile}
          setProfile={setProfile}
          textarea={false}
        />
        <TextInput
          name="realState"
          title="عنوان آگهی"
          profile={profile}
          setProfile={setProfile}
          textarea={false}
        />
        <TextInput
          name="price"
          title="قیمت"
          profile={profile}
          setProfile={setProfile}
          textarea={false}
        />
      </div>
      <RadioList setProfile={setProfile} profile={profile} />
      <TextList
        type="amenities"
        profile={profile}
        setProfile={setProfile}
        title="امکانات"
      />
      <TextList
        type="rules"
        profile={profile}
        setProfile={setProfile}
        title="قوانین"
      />
      <CustomDatePicker profile={profile} setProfile={setProfile} />
      {loading ? (
        <ThreeDots wrapperStyle={{ marginRight: "135px", marginTop: "20px" }} />
      ) : (
        <>
          {data ? (
            <button
              onClick={editHandler}
              className="mt-10 w-[100%] md:w-[350px] bg-orange-300 py-2 md:hover:scale-125 transition-all"
            >
              ویرایش آگهی
            </button>
          ) : (
            <button
              onClick={addProfileHandler}
              className="mt-10 w-[100%] md:w-[350px] bg-orange-300 py-2 md:hover:scale-125 transition-all"
            >
              ثبت آگهی
            </button>
          )}
        </>
      )}
      <Toaster />
    </div>
  );
}

export default AddProfilePage;
