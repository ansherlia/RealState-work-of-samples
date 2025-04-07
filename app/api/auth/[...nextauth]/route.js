const { default: NextAuth } = require("next-auth");
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("لطفا اطلاعلت را کامل وارد کنید.");
        }
        const userExist = await User.findOne({ email });
        if (!userExist) {
          throw new Error("کاربر یافت نشد.");
        }
        const verifyPass = await verifyPassword(password, userExist.password);
        if (!verifyPass) {
          throw new Error("نام کاربری یا رمز عبور اشتباه است.");
        }
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
