"use client";

import { useState } from "react";
import Link from "next/link";
import { prompts } from "../data/prompts";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPrompts = prompts.filter(
    (prompt) =>
      prompt.title.toLowerCase().includes(search.toLowerCase()) ||
      prompt.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg,#dff4ff 0%,#b7e7ff 35%,#90d5ff 100%)",
      }}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-5">

          <h1 className="text-4xl font-bold text-sky-900">
            CS Prompts
          </h1>

          <input
            type="text"
            placeholder="Search AI prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white rounded-full px-5 py-3 border border-sky-200 outline-none text-sky-900"
          />
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-14 px-6">
        <h2 className="text-6xl font-bold text-sky-900">
          AI Prompt Gallery
        </h2>

        <p className="mt-4 text-sky-800 text-lg">
          Discover viral AI image prompts, anime styles,
          portraits, sketches, collages and much more.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">

          {filteredPrompts.map((prompt) => (
           <div
  key={prompt.id}
  className="mb-6 break-inside-avoid bg-white/70 backdrop-blur-lg rounded-3xl p-4 shadow-xl border-4 border-white"
>
            
              {/* SMALLER IMAGE */}
              <img
                src={prompt.image}
                alt={prompt.title}
                className="w-full h-[140px] object-cover rounded-2xl border-4 border-white shadow-lg"
              />

              <h3 className="mt-4 text-xl font-bold text-sky-900">
                {prompt.title}
              </h3>

              <p className="text-sky-700 text-sm mt-1">
                {prompt.category}
              </p>

              {/* OPEN PROMPT BUTTON */}
              <Link
                href={`/prompt/${prompt.id}`}
                className="block mt-4 text-center bg-sky-600 text-white py-3 rounded-xl font-bold hover:bg-sky-700 transition"
              >
                Open Prompt
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sky-900 font-medium">
        © 2026 CS Prompts
      </footer>
    </main>
  );
}