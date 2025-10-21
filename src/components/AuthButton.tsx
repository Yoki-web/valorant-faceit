// AuthButton.tsx — кнопка для входа/выхода через Google.
// Показывает email пользователя после авторизации.

"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <span>Загрузка...</span>;

  return session ? (
    <button
      onClick={() => signOut()}
      className="rounded bg-neutral-800 px-3 py-2"
    >
      Выйти ({session.user?.email})
    </button>
  ) : (
    <button
      onClick={() => signIn("google")}
      className="rounded bg-red-600 px-3 py-2"
    >
      Войти через Google
    </button>
  );
}
