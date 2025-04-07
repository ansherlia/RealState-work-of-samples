import Link from "next/link";

function Sidebar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];
  return (
    <div className="px-7 py-5 flex flex-col md:w-[300px]">
      <h3 className="text-xl  font-semibold tracking-wider text-zinc-500">
        دسته بندی
      </h3>
      <ul className="flex flex-col gap-y-3 mt-5">
        <Link
          href="/buy-residentials"
          className="hover:bg-orange-200 px-4 w-[150px] py-0.5 rounded-md"
        >
          همه
        </Link>
        {queries.map((query) => (
          <Link
            href={{
              pathname: "/buy-residentials",
              query: { category: Object.keys(query) },
            }}
            key={Object.keys(query)}
            className="hover:bg-orange-200  py-0.5 rounded-md px-4 w-[150px]"
          >
            <p>{Object.values(query)}</p>
          </Link>
        ))}
        
      </ul>
    </div>
  );
}

export default Sidebar;
