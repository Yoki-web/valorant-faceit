"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setBio(data.bio || "");
      });
  }, []);

  async function saveProfile() {
    await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio })
    });
    alert("Профиль обновлён!");
  }

  if (!profile) return <p>Загрузка...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Личный профиль</h1>
      <p>Email: {profile.email}</p>
      <p>Рейтинг: {profile.rating}</p>
      <p>Победы: {profile.wins} | Поражения: {profile.losses}</p>

      <textarea
        className="border p-2 mt-4 w-full"
        value={bio}
        onChange={e => setBio(e.target.value)}
      />

      <button
        onClick={saveProfile}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Сохранить
      </button>
    </div>
  );
}
