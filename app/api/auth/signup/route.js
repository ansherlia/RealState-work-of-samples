import User from "@/models/User";
import { hashedPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return new Response(
        JSON.stringify(
          { error: "لطفا اطلاعات را کامل وارد کنید." },
          { status: 422 }
        )
      );
    }
    const hashed = await hashedPassword(password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "کاربر وجود دارد." }, { status: 427 })
      );
    }

    const user = await User.create({ email, password: hashed });

    return new Response(
      JSON.stringify({ message: "کاربر با موفقیت ایجاد شد." }, { status: 201 })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify(
        JSON.stringify({ error: "مشکلی در سرور رخ داده است." }, { status: 500 })
      )
    );
  }
}
