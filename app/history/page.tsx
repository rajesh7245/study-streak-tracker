"use client";

import { useEffect, useState } from "react";

export default function History() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then(res => res.json())
      .then(data => setDates(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">

      <h1 className="text-3xl font-bold">
        Study History
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg">

        {dates.length === 0 ? (
          <p>No study records yet.</p>
        ) : (
          <ul>
            {dates.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}

      </div>

      <a
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Back
      </a>

    </main>
  );
}