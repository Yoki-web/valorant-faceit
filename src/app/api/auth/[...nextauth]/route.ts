import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

// ВАЖНО: экспортируем только GET и POST
export { handler as GET, handler as POST };
