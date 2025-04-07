import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export async function DELETE(request, context) {
  try {
    await connectDB();
    const { deleteId } = context.params;
    console.log(deleteId);
    const session = await getServerSession(request);
    if (!session) {
      return new Response(
        JSON.stringify(
          { error: "لطفا وارد حساب کاربری خود شوید." },
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
    const profile = await Profile.findOne({ _id: deleteId });
    if (!user._id.equals(profile.userId)) {
      return new Response(
        JSON.stringify(
          { error: "شما اجازه دسترسی به این صفحه را ندارید." },
          { status: 401 }
        )
      );
    }
    await Profile.deleteOne({ _id: deleteId });
    return new Response(
      JSON.stringify({ message: "آگهی با موفقیت حذف شد." }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "مشکلی در سرور رخ داده است." }, { status: 500 })
    );
  }
}
