import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructiorDate,
      category,
      amenities,
      rules,
    } = body;
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructiorDate ||
      !category
    ) {
      return new Response(
        JSON.stringify(
          { error: "لطفا اطلاعات را کامل وارد کنید." },
          { status: 422 }
        )
      );
    }
    const session = await getServerSession(request);

    if (!session) {
      return new Response(
        JSON.stringify(
          { error: "شما اجازه دسترسی به این صفحه را ندارید." },
          { status: 401 }
        )
      );
    }
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "کاربر وجود ندارد." }, { status: 422 })
      );
    }

    const profile = await Profile.create({
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructiorDate,
      category,
      amenities,
      rules,
      userId: user._id,
    });

    return new Response(
      JSON.stringify({ message: "آگهی با موفقیت ثبت شد." }, { status: 201 })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "مشکلی در سرور رخ داده است." }, { status: 500 })
    );
  }
}

export async function PATCH(request, context) {
  const {
    title,
    description,
    location,
    phone,
    price,
    realState,
    constructiorDate,
    category,
    amenities,
    rules,
    _id,
  } = await request.json();

  if (
    !title ||
    !description ||
    !location ||
    !phone ||
    !price ||
    !realState ||
    !constructiorDate ||
    !category ||
    !_id
  ) {
    return new Response(
      JSON.stringify(
        { error: "لطفا اطلاعات را کامل وارد کنید." },
        { status: 422 }
      )
    );
  }
  console.log(_id);
  const session = await getServerSession(request);
  if (!session)
    return new Response(
      JSON.stringify(
        { error: "شما اجازه دسترسی به این صفحه را ندارید." },
        { status: 427 }
      )
    );

  const user = await User.findOne({ email: session.user.email });
  if (!user)
    return new Response(
      JSON.stringify({ error: "کاربر وجود ندارد" }, { status: 404 })
    );
  const profile = await Profile.findOne({ _id });
  if (!profile) {
    return new Response(
      JSON.stringify({ error: "پروفایل وجود ندارد" }, { status: 404 })
    );
  }
  profile.title = title;
  profile.description = description;
  profile.location = location;
  profile.phone = phone;
  profile.price = price;
  profile.realState = realState;
  profile.constructiorDate = constructiorDate;
  profile.category = category;
  profile.rules = rules;
  profile.amenities = amenities;
  profile.save();
  return new Response(
    JSON.stringify(
      { message: "آگهی با موفقیت ویرایش شد", data: profile },
      { status: 200 }
    )
  );
}

export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find({ published: true }).select("-userId");

    return new Response(JSON.stringify({ data: profiles }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ status: 500 }, { error: "مشکلی در سرور رخ داده است." })
    );
  }
}
