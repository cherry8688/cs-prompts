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
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
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
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <img
          src={prompt.image}
          alt={prompt.title}
          className="w-full max-w-md mx-auto rounded-2xl mb-8"
        />

        <h1 className="text-4xl font-bold text-center mb-2">
          {prompt.title}
        </h1>

        <p className="text-gray-400 text-center mb-8">
          {prompt.category}
        </p>

        <div className="bg-gray-900 rounded-2xl p-6 mb-8">
          <p className="whitespace-pre-wrap leading-7">
            {prompt.prompt}
          </p>
        </div>

        {/* Copy Prompt Button */}
        <button
          onClick={copyPrompt}
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition mb-4"
        >
          Copy Prompt
        </button>

        {/* Open ChatGPT Button */}
        <a
          href="https://chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Open ChatGPT
        </a>

      </div>
    </main>
  );
}