import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "./models/User";
import connectMongoDatabase from "./utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) =>{
        await connectMongoDatabase()
        try {
          console.log(credentials);
          let user = await User.findOne({email : credentials.email})
          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User Not Found");
          }
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
      },
    }),
  ],
  pages : { //WHEN ERROR OCCURRED, route to this page
    error : "/dashboard/login"
  }
});
