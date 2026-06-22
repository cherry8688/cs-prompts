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
      <main className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-100 to-white flex items-center justify-center">
        <h1 className="text-3xl font-bold text-sky-900">
          Prompt Not Found
        </h1>
      </main>
    );
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      alert("Prompt copied successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy prompt.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-100 to-white relative overflow-hidden">

      {/* Clouds */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute top-24 right-20 w-96 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-36 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 relative z-10">

        {/* Medium Classic Frame */}
        <div className="max-w-sm mx-auto bg-gray-500 p-4 rounded-2xl shadow-2xl mb-8">
          <div className="bg-gray-300 p-2 rounded-xl">
            <img
              src={prompt.image}
              alt={prompt.title}
              className="w-full rounded-lg border-4 border-white"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-sky-900 mb-2">
          {prompt.title}
        </h1>

        <p className="text-center text-sky-700 mb-8">
          {prompt.category}
        </p>

        {/* Prompt Box */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-sky-200">
          <p className="whitespace-pre-wrap leading-7 text-gray-800">
            {prompt.prompt}
          </p>
        </div>

        {/* Copy Prompt */}
        <button
          onClick={copyPrompt}
          className="w-full bg-sky-600 text-white py-4 rounded-xl font-semibold hover:bg-sky-700 transition mb-4 shadow-lg"
        >
          📋 Copy Prompt
        </button>

        {/* Open ChatGPT */}
        <a
          href="https://chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gray-700 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg"
        >
          🤖 Open ChatGPT
        </a>

      </div>
    </main>
  );
}