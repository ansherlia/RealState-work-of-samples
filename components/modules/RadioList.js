function RadioList({ title, profile, setProfile, value }) {
  const { category } = profile;

  const changeHandle = (event) => {
    const { value, name } = event.target;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <div className="flex justify-between w-[320px] mt-14">
      <div className="flex items-center gap-x-1 bg-orange-400 px-2 cursor-pointer py-1 rounded-md text-zinc-500 tracking-widest">
        <label htmlFor="villa">ویلا</label>
        <input
          type="radio"
          value="villa"
          name="category"
          onChange={changeHandle}
          id="villa"
          checked={category === "villa"}
        />
      </div>
      <div className="flex items-center gap-x-1 bg-orange-400 px-2 cursor-pointer py-1 rounded-md text-zinc-500 tracking-widest">
        <label htmlFor="apartment">آپارتمان</label>
        <input
          type="radio"
          value="apartment"
          name="category"
          onChange={changeHandle}
          id="apartment"
          checked={category === "apartment"}
        />
      </div>
      <div className="flex items-center gap-x-1 bg-orange-400 px-2 cursor-pointer py-1 rounded-md text-zinc-500 tracking-widest">
        <label htmlFor="store">مغازه</label>
        <input
          type="radio"
          value="store"
          name="category"
          onChange={changeHandle}
          id="store"
          checked={category === "store"}
        />
      </div>
      <div className="flex items-center gap-x-1 bg-orange-400 px-2  cursor-pointer py-1 rounded-md text-zinc-500 tracking-widest">
        <label htmlFor="office">دفتر</label>
        <input
          type="radio"
          value="office"
          name="category"
          onChange={changeHandle}
          id="office"
          checked={category === "office"}
        />
      </div>
    </div>
  );
}

export default RadioList;
