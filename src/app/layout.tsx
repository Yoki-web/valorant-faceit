/**
 * layout.tsx
 * Корневой каркас приложения (Next.js App Router).
 * Подключает глобальные стили, провайдеры и Header.
 */
import "../styles/globals.css";          // глобальные стили
import Providers from "../components/Providers"; // NextAuth провайдер
import Header from "../components/Header";       // шапка сайта

export const metadata = {
  title: "VALORANT FACEIT",
  description: "Платформа для VALORANT: профиль, статистика, турниры.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 mx-auto max-w-6xl px-4 py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
