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
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center gap-4 p-4">
          <input
            type="text"
            placeholder="Search AI prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-gray-900 rounded-full px-5 py-3 outline-none"
          />

             <h1 className="text-2xl font-bold">
  CS Prompts
</h1>
            </div>
          </header>

      {/* Hero */}
      <section className="text-center py-12 px-4">
        <h2 className="text-5xl font-bold mb-4">
          Discover Viral AI Image Prompts
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse and copy the exact prompts behind trending AI-generated
          images, portraits, anime styles, sketches, collages and more.
        </p>
      </section>

      {/* Prompt Grid */}
      <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-4 max-w-7xl mx-auto pb-20">
        {filteredPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="mb-4 break-inside-avoid bg-gray-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={prompt.image}
              alt={prompt.title}
              className="w-full"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {prompt.title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {prompt.category}
              </p>

              <Link
                href={`/prompt/${prompt.id}`}
                className="block mt-4 w-full bg-white text-black py-2 rounded-lg text-center font-semibold"
              >
                Open Prompt
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-8 text-gray-500">
        © 2026 CS Prompts. All rights reserved.
      </footer>
    </main>
  );
}