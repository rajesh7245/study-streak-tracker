"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);

  async function loadStreak() {
    const res = await fetch("/api/streak");
    const data = await res.json();

    setStreak(data.streak);
    setTotal(data.total);
    setLastDate(data.lastDate);
  }

  async function markStudy() {

    await fetch("/api/study", {
      method: "POST"
    });

    await loadStreak();
  }

  useEffect(() => {
    loadStreak();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold">
        Daily Learning Streak Tracker
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg text-center">

        <p>Current Streak: {streak} days</p>
        <p>Total Study Days: {total}</p>
        <p>Last Studied: {lastDate ?? "Not yet"}</p>

      </div>

      <button
        onClick={markStudy}
        className="bg-blue-500 px-6 py-2 rounded text-white"
      >
        I Studied Today
      </button>

      <a
        href="/history"
        className="bg-gray-500 px-6 py-2 rounded text-white"
      >
        View Study History
      </a>

    </main>
  );
}