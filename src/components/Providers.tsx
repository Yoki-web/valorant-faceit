// Providers.tsx — обёртка для NextAuth.
// Нужна, чтобы useSession работал в любом компоненте.

"use client";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
