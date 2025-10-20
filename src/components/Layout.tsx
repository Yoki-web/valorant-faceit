/**
 * Layout.tsx
 * Общий каркас страницы: Header + контент.
 * Оборачивает все страницы.
 */
import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
