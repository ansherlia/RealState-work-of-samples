function TextInput({ title, profile, setProfile, textarea, name }) {
  const changeHandle = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <div className="flex flex-col w-fit gap-y-1">
      <label className="mt-6">{title}</label>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profile[name]}
          onChange={changeHandle}
          className="w-[320px]  min-h-[150px] focus:outline-none p-3"
        />
      ) : (
        <input
          type="text"
          value={profile[name]}
          name={name}
          onChange={changeHandle}
          className="w-[320px] px-2 py-2.5 rounded-lg shadow-lg focus:outline-none"
        />
      )}
    </div>
  );
}

export default TextInput;
