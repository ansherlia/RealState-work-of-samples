function Footer() {
  return (
    <div className="w-[100%] md:w-[90%] mx-auto rounded-t-lg  bg-zinc-500/60 px-4 md:px-10  mt-5 flex flex-col md:flex-row gap-y-5 items-center justify-between py-7 text-white text-lg">
      <div className="md:w-[700px]">
        <h2 className="text-orange-300/60 text-3xl font-semibold">
          سامانه خرید و اجاره ملک
        </h2>
        <span className="text-justify  text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم
        </span>
      </div>
      <div className="md:w-[300px]">
        <ul className="flex flex-wrap gap-y-4 gap-x-2 items-center font-semibold text-zinc-300">
          <li className="before__link">تعرفه قانونی</li>
          <li className="before__link">مشاورین خبره</li>
          <li className="before__link">مشاورین خبره</li>
          <li className="before__link">قولنامه محضری</li>
          <li className="before__link">دسترسی سریع</li>
          <li className="before__link">تعرفه قانونی</li>
          <li className="before__link">مشاورین خبره</li>
          <li className="before__link">قولنامه محضری</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
