import Image from "next/image";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <Link
      href={`/buy-residentials?category=${name}`}
      className="flex flex-col justify-center items-center gap-y-4 bg-white/60 px-10 py-5 rounded-lg shadow-md hover:shadow-xl  hover:-rotate-3 cursor-pointer duration-300 ease-in-out "
    >
      <Image src={`/images/${name}.png`} width={300} height={300} />
      <h3>{title}</h3>
    </Link>
  );
}

export default CategoryCard;
