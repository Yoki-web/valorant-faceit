import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Если у тебя есть таблица Session в Prisma — оставь "database"
    // Если нет — лучше использовать "jwt"
    strategy: "database",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = user?.id ?? (token.id as string);
        session.user.email = user?.email ?? session.user.email;
        session.user.name = user?.name ?? session.user.name;
        session.user.image = user?.image ?? session.user.image;
      }
      return session;
    },
  },
  // Если у тебя есть кастомная страница входа:
  // pages: {
  //   signIn: "/signin",
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
