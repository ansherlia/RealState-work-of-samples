import { CiCircleCheck } from "react-icons/ci";
import CategoryCard from "../modules/CategoryCard";
import { FaCity } from "react-icons/fa";

function HomePage() {
  const cities = [
    "تهران",
    "مشهد",
    "اصفهان",
    "شیراز",
    "تبریز",
    "کرج",
    "قم",
    "اهواز",
    "کرمانشاه",
    "زنجان",
    "کرج",
    "سنندج",
  ];
  return (
    <div>
      <section className="home-page___background w-full text-white h-[400px] md:h-screen flex items-center md:justify-center flex-col gap-y-4">
        <h2 className="text-2xl md:text-6xl font-semibold tracking-wider mt-10">
          سامانه خریدوفروش و اجاره ملک
        </h2>
        <ul className="flex  items-center gap-x-4 md:text-xl text-zinc-700 md:text-zinc-400 font-semibold">
          <li className="flex items-center gap-x-1 border px-2 py-0.5 rounded-md">
            خرید <CiCircleCheck />
          </li>
          <li className="flex items-center gap-x-1 border px-2 py-0.5 rounded-md">
            فروش <CiCircleCheck />
          </li>
          <li className="flex items-center gap-x-1 border px-2 py-0.5 rounded-md">
            رهن <CiCircleCheck />
          </li>{" "}
          <li className="flex items-center gap-x-1 border px-2 py-0.5 rounded-md">
            اجاره <CiCircleCheck />
          </li>
        </ul>
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 my-20">
        <CategoryCard name="villa" title="ویلا" />
        <CategoryCard name="apartment" title="آپارتمان" />
        <CategoryCard name="store" title="مغازه" />
        <CategoryCard name="office" title="دفتر" />
      </section>
      <section className="container flex items-center flex-col justify-center my-20 text-zinc-500 font-semibold ">
        <h1 className="text-5xl tracking-wider">شهر های پربازدید</h1>
        <div className="flex flex-wrap  items-center gap-y-8 gap-x-4 mt-10">
          {cities.map((i, index) => (
            <div
              key={index}
              className="flex gap-x-2 justify-center py-1.5 w-[80px] md:w-[200px] rounded-md bg-orange-300 text-center"
            >
              <h5>{i}</h5>
              <FaCity />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
