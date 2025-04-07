import { IoMicOffCircle } from "react-icons/io5";
import { MdApartment, MdOutlineVilla, MdStore } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

function Card({ data: { category, title, _id, price, location } }) {
  const icons = {
    villa: <MdOutlineVilla />,
    apartment: <MdApartment />,
    store: <MdStore />,
    office: <IoMicOffCircle />,
  };
  return (
    <div className="border-2 text-sm xl:text-base bg-[#ebe9e9] mx-auto w-[300px] md:w-auto py-4 px-6 h-fit xl:w-[240px] my-4 rounded-md">
      <div className="flex flex-col gap-y-4">
        <span className="inline-flex text-orange-400">{icons[category]}</span>
        <h4 className="line-clamp-1">{title}</h4>
        <div className="flex items-center gap-x-2">
          <CiLocationOn />
          <span className="flex line-clamp-1"> {location}</span>
        </div>
        <h5 className="line-clamp-1">تومان : {price}</h5>
        <Link
          href={`/buy-residentials/${_id}`}
          className="flex items-center justify-between text-blue-600 "
        >
          مشاهده آگهی
          <span className="inline-flex hover:ml-2 ml-4 transition-all ">
            <BsArrowLeft />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
