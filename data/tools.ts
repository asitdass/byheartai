import raw from "./tools.json";

export interface Tool {
  id: string;
  name: string;
  /** GitHub "owner/name". */
  repo: string;
  category: string;
  tagline: string;
  useFor: string[];
  /** One-line install command copied from the project's own README. */
  install?: string;
  /** Slug of a hands-on guide in content/guides. */
  guide?: string;
  // Live stats, written by scripts/refresh-tools.ts
  stars?: number;
  license?: string;
  lastPush?: string;
  archived?: boolean;
}

export interface ToolCategory {
  id: string;
  title: string;
  description: string;
}

export const toolCategories: ToolCategory[] = [
  { id: "local-models", title: "Run models locally", description: "Private, offline, no per-token bill." },
  { id: "personal-agents", title: "Personal assistants", description: "Always-on agents that do chores for you." },
  { id: "coding-agents", title: "Coding agents", description: "Agents that read, write, and ship code." },
  { id: "automation", title: "No-code automation", description: "Wire AI into the apps you already use." },
  { id: "agent-frameworks", title: "Agent frameworks", description: "Libraries for building your own agents." },
  { id: "mcp-skills", title: "MCP & skills", description: "Plug tools and know-how into any agent." },
  { id: "web-data", title: "Web & document data", description: "Get the web and your files into a model." },
  { id: "rag-memory", title: "RAG & memory", description: "Ground answers and remember across sessions." },
  { id: "llmops", title: "Evaluate & observe", description: "Test, trace, and control cost." },
  { id: "media", title: "Image, audio & video", description: "Generate and understand media." },
];

export const tools: Tool[] = (raw as Tool[]).filter((t) => !t.archived);

export function getTool(id: string): Tool | undefined {
  return tools.find((t) => t.id === id);
}

export function getToolCategory(id: string): ToolCategory | undefined {
  return toolCategories.find((c) => c.id === id);
}

export function formatStars(n?: number): string {
  if (!n) return "";
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 100_000 ? 0 : 1).replace(/\.0$/, "")}k`;
  return String(n);
}
