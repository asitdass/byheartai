import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const title = "How to Run AI Locally on Your Computer";
const description =
  "Run a local AI model with Ollama on Mac, Windows, or Linux. Choose a terminal setup, a browser chat with Open WebUI, or document chat with AnythingLLM.";
const setups = [
  {
    name: "Run a local LLM with Ollama",
    path: "/guides/run-llms-locally-with-ollama",
    description: "Start here to download a model, ask it a question in the terminal, and call it from your own code.",
  },
  {
    name: "Set up a browser chat with Open WebUI",
    path: "/guides/private-chatgpt-with-open-webui",
    description: "Use this if you want a familiar chat interface. This walkthrough runs Open WebUI in Docker and connects it to Ollama.",
  },
  {
    name: "Chat with PDFs and other files using AnythingLLM",
    path: "/guides/chat-with-your-documents-anythingllm",
    description: "Use this to ask questions about documents. The guide shows how to point the workspace at your local Ollama model.",
  },
];

export const metadata: Metadata = pageMetadata({ title, description, path: "/local-ai" });

export default function LocalAiPage() {
  return (
    <div className="prose mx-auto max-w-(--reading-width) px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Run AI locally", path: "/local-ai" }])} />
      <JsonLd data={itemListJsonLd("Local AI setup guides", description, setups)} />
      <Breadcrumb items={[{ label: "Run AI locally", href: "/local-ai" }]} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">How to run AI locally on your computer</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        Install Ollama on a Mac, Windows, or Linux computer, download a local model, and ask it a question.
        Once that works, you can keep using the terminal or add a browser chat or a workspace for your files.
      </p>

      <h2>Choose a setup</h2>
      <ol>
        {setups.map((setup) => (
          <li key={setup.path}>
            <Link href={setup.path}>{setup.name}</Link>
            <p>{setup.description}</p>
          </li>
        ))}
      </ol>

      <h2>What to check before you start</h2>
      <p>
        Model downloads take disk space, and larger models take more memory to run. Start with a small
        model and check that it answers at a comfortable speed before trying a bigger one.
        Compare download sizes in the <a href="https://ollama.com/library">Ollama model library</a>.
      </p>
      <p>
        A downloaded local model can answer offline. If you add document chat and want the full pipeline
        to stay on your machine, choose local providers for both the chat model and embeddings.
        See the <a href="https://docs.anythingllm.com/setup/llm-configuration/local/ollama">AnythingLLM Ollama setup</a>{" "}
        and <a href="https://docs.anythingllm.com/setup/embedder-configuration/local/ollama">local embedding setup</a>.
      </p>

      <h2>Learn what happens under the hood</h2>
      <ul>
        <li><Link href="/learn/llms/what-is-llm">What is a large language model?</Link></li>
        <li><Link href="/learn/inference/what-is-inference">What is model inference?</Link></li>
        <li><Link href="/learn/rag/what-is-rag">How retrieval-augmented generation (RAG) uses your documents</Link></li>
      </ul>
    </div>
  );
}
