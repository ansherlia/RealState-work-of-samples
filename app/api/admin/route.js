import Profile from "@/models/Profile";
import User from "@/models/User";
import { getServerSession } from "next-auth";

export async function PATCH(request) {
  const body = await request.json();
  const { id } = body;
  console.log(id);
  const session = await getServerSession(request);
  if (!session)
    return new Response(
      JSON.stringify({ error: "ابتدا وارد شوید" }, { status: 401 })
    );

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") {
    return new Response(
      JSON.stringify(
        { error: "شما به این صفحه دسترسی ندارید" },
        { status: 401 }
      )
    );
  }
  const updateProfile = await Profile.findOne({ _id: id });
  updateProfile.published = true;
  await updateProfile.save();
  return new Response(
    JSON.stringify({ message: "با موفقیت انتشار یافت" }, { status: 200 })
  );
}

export async function DELETE(request) {
  const { id } = await request.json();
  const session = await getServerSession(request);
  if (!session)
    return new Response(
      JSON.stringify({ error: "ابتدا وارد شوید" }, { status: 401 })
    );

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") {
    return new Response(
      JSON.stringify(
        { error: "شما به این صفحه دسترسی ندارید" },
        { status: 401 }
      )
    );
  }
  const deleteP = await Profile.deleteOne({ _id: id });
  return new Response(
    JSON.stringify({ message: "آگهی با موفقیت حذف شد" }, { status: 200 })
  );
}
