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
      <main
  className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
  style={{
    backgroundImage: "url('/blue-bg.jpg')",
  }}
>
        <h1 className="text-4xl text-white">
          Prompt Not Found
        </h1>
      </main>
    );
  }
<a
  href="/"
  className="inline-block mb-6 bg-white text-sky-700 border-2 border-sky-500 px-6 py-2 rounded-xl font-bold shadow hover:bg-sky-600 hover:text-white transition"
>
  ← Back to Gallery
</a>

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

        <div className="bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700 rounded-3xl p-5 shadow-2xl inline-block border-4 border-gray-400">
  <div className="bg-gray-300 rounded-2xl p-3">
    <img
      src={prompt.image}
      alt={prompt.title}
     className="w-72 rounded-xl border-4 border-white"
    />
  </div>
</div>

        <h1 className="text-4xl font-extrabold text-sky-900 mt-6">
          {prompt.title}
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-5">

          
<button
  onClick={copyPrompt}
  className="w-64 bg-sky-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg border border-sky-700 hover:bg-sky-600 transition duration-300"
>
  📋 Copy Prompt
</button>
          <a
  href="https://chatgpt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-64 bg-sky-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg border border-sky-700 hover:bg-sky-600 transition duration-300 inline-flex items-center justify-center"
>
  🤖 Open ChatGPT
</a>
        </div>

      </div>
    </main>
  );
}