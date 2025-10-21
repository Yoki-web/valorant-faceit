/**
 * page.tsx
 * Главная страница (App Router).
 * Содержит лого, кнопку "Играть сейчас" и три блока.
 */
import Layout from "./layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mx-auto mb-6 w-24 h-24 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800">
          <span className="text-3xl font-extrabold">VF</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">VALORANT FACEIT</h1>
        <p className="mt-3 text-neutral-300">
          Платформа для VALORANT: профиль, статистика, турниры.
        </p>
        <div className="mt-8">
          <Link
            href="/premier"
            className="inline-block rounded-lg bg-red-600 px-5 py-3 font-semibold hover:bg-red-500"
          >
            Играть сейчас
          </Link>
        </div>
      </section>

      {/* Блоки */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="text-lg font-semibold">Режим премьер</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Главный соревновательный режим с баном карт и агентов.
            </p>
            <Link href="/premier" className="mt-4 inline-block text-red-400">
              Подробнее
            </Link>
          </article>

          <article className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="text-lg font-semibold">Максимальное разнообразие</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Форматы 1v1, 2v2, 3v3, 4v4, 5v5.
            </p>
            <Link href="/modes" className="mt-4 inline-block text-red-400">
              Подробнее
            </Link>
          </article>

          <article className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="text-lg font-semibold">Напарник</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Каждому игроку назначается случайный агент.
            </p>
            <Link href="/partner" className="mt-4 inline-block text-red-400">
              Подробнее
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
