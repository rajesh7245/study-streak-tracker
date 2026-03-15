"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [stats, setStats] = useState({
    streak: 0,
    total: 0,
    lastDate: null as string | null
  });

  const fetchStats = async () => {
    const res = await fetch("/api/streak");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleStudy = async () => {

    const res = await fetch("/api/study", {
      method: "POST"
    });

    const data = await res.json();

    alert(data.message);

    fetchStats();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold">
        Daily Learning Streak Tracker
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg text-center">

        <p>Current Streak: {stats.streak} days</p>

        <p>Total Study Days: {stats.total}</p>

        <p>Last Studied: {stats.lastDate || "Not yet"}</p>

      </div>

      <button
        onClick={handleStudy}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        I Studied Today
      </button>

      <a
        href="/history"
        className="bg-gray-600 text-white px-6 py-2 rounded"
      >
        View Study History
      </a>

    </main>
  );
}