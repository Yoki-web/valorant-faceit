/**
 * Header.tsx
 * Верхняя панель навигации: ссылки + кнопка входа/выхода.
 * Используется в Layout.
 */
import Link from "next/link";
import AuthButton from "./AuthButton"; // импортируем кнопку авторизации

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Лого/Название */}
        <Link href="/" className="text-xl font-bold text-red-500">
          VALORANT FACEIT
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
          <Link href="/">Главная</Link>
          <Link href="/premier">Турниры</Link>
          <Link href="/teams">Команды</Link>
          <Link href="/leaders">Рейтинг</Link>
        </nav>

        {/* Кнопка входа/выхода через Google */}
        <AuthButton />
      </div>
    </header>
  );
}
