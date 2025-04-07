function TextList({ title, profile, setProfile, type }) {
  const addHandler = () => {
    setProfile({ ...profile, [type]: [...profile[type], ""] });
  };
  const changeHandler = (event, index) => {
    const { value } = event.target;
    const list = [...profile[type]];
    list[index] = value;
    setProfile({ ...profile, [type]: list });
  };
  function deleteHandler(index) {
    const data = [...profile[type]];
    data.splice(index, 1);
    setProfile({ ...profile, [type]: data });
  }
  return (
    <div className="mt-10">
      <h3 className="font-semibold text-2xl tracking-widest mb-5">{title}</h3>
      {profile[type].map((i, index) => (
        <div key={index} className="flex gap-x-2 gap-y-5 ">
          <input
            type="text"
            value={i}
            onChange={() => changeHandler(event, index)}
            className="w-[260px] py-1.5 px-2 rounded-md shadow-xl my-2"
          />
          <button
            onClick={() => deleteHandler(index)}
            className="bg-red-700 my-2 px-2 text-white rounded-md"
          >
            حذف
          </button>
        </div>
      ))}
      <button
        className="mt-5 bg-orange-300 px-2 py-1 rounded-md"
        onClick={addHandler}
      >
        افزودن
      </button>
    </div>
  );
}

export default TextList;
