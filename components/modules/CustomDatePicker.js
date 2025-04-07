import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
function CustomDatePicker({ profile, setProfile }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfile({ ...profile, constructionDate: date });
  };
  return (
    <div className="mt-12">
      <h4 className="font-semibold text-2xl tracking-widest mb-2" s>
        تاریخ ساخت
      </h4>
      <DatePicker
        calendar={persian}
        locale={persian_en}
        calendarPosition="bottom-right"
        value={profile.constructionDate}
        onChange={changeHandler}
      />
    </div>
  );
}

export default CustomDatePicker;
