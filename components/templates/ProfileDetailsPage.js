import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { MdApartment, MdOutlineVilla, MdStore } from "react-icons/md";
import { IoMicOffCircle } from "react-icons/io5";
import { e2p } from "@/utils/replaceNumber";
import { MdOutlineDateRange } from "react-icons/md";
import ShareButton from "../modules/ShareButton";

function ProfileDetailsPage({
  data: {
    title,
    description,
    amenities,
    rules,
    phone,
    location,
    realState,
    price,
    category,
    constructiorDate,
  },
}) {
  const icons = {
    villa: <MdOutlineVilla />,
    apartment: <MdApartment />,
    store: <MdStore />,
    office: <IoMicOffCircle />,
  };
  const categories = {
    villa: "ویلا",
    apartment: "آپارتمان",
    store: "مغازه",
    office: "دفتر",
  };

  return (
    <div className="container flex justify-between flex-col md:flex-row gap-x-10 pt-[120px]">
      <div className="md:w-[75%]">
        <div className="title">
          <h4 className="text-3xl text-sky-700 font-semibold tracking-wider">
            {title}
          </h4>
          <span className="flex gap-x-1 mt-4 text-zinc-500 font-semibold tracking-wider">
            <HiOutlineLocationMarker />
            {location}
          </span>
        </div>
        <div className="desc mt-20 h-[200px] md:min-h-[300px]">
          <h4 className="text-sky-700 font-semibold border-b-2 border-zinc-400 pb-2">
            توضیحات
          </h4>
          <p className="pt-5">{description}</p>
        </div>
        <div className="amenities mt-20 h-[200px] md:min-h-[300px]">
          <h4 className="text-sky-700 font-semibold border-b-2 border-zinc-400 pb-2">
            امکانات رفاهی
          </h4>
          <p>{amenities}</p>
        </div>
        <div className="rules mt-20 h-[200px] md:min-h-[300px]">
          <h4 className="text-sky-700 font-semibold border-b-2 border-zinc-400 pb-2">
            قوانین
          </h4>
          <p>{rules}</p>
        </div>
      </div>
      <div className="md:w-[25%] flex flex-col gap-y-10">
        <div className="flex flex-col justify-center items-center gap-y-4 bg-white md:w-[220px] shadow-lg py-10 rounded-lg">
          <SiHomebridge fontSize={40} color="#0369A1" />
          <p>{realState}</p>
          <div className="flex gap-x-2">
            <span>{phone}</span>
            <FaPhoneAlt />
          </div>
        </div>
        <ShareButton />
        <div className="price bg-white md:w-[220px] py-4 flex flex-col gap-y-2 items-center justify-between  px-4 rounded-lg shadow-lg">
          <span className="flex gap-x-1 text-sky-600 font-semibold tracking-wider">
            <p>{categories[category]}</p>
            {icons[category]}
          </span>
          <p>{e2p(price)} تومان</p>
          <div className="flex gap-x-1">
            <MdOutlineDateRange />
            {new Date(constructiorDate).toLocaleDateString("fa-IR")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
