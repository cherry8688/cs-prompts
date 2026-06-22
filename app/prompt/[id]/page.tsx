"use client";

import { use } from "react";
import { prompts } from "../../../data/prompts";

export default function PromptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const prompt = prompts.find(
    (p) => p.id === Number(id)
  );

  if (!prompt) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-500">
        <h1 className="text-4xl text-white">
          Prompt Not Found
        </h1>
      </main>
    );
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      alert("Prompt copied!");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <main className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="text-center">

        <img
          src={prompt.image}
          alt={prompt.title}
          className="w-64 mx-auto rounded-xl border-4 border-gray-500"
        />

        <h1 className="text-3xl font-bold mt-6">
          {prompt.title}
        </h1>

        <div className="mt-6 flex gap-4 justify-center">

          <button
            onClick={copyPrompt}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            📋 Copy Prompt
          </button>

          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-xl"
          >
            🤖 Open ChatGPT
          </a>

        </div>

      </div>
    </main>
  );
}