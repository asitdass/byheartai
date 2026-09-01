import type { LearningPath } from "@/lib/types";

// Guided learning paths (see docs/CURRICULUM.md section 6). The ordered
// conceptIds define the "Next" chain when a learner is inside a path.
export const learningPaths: LearningPath[] = [
  {
    id: "ai-beginner",
    title: "AI Beginner",
    audience: "Anyone with zero background who wants to understand AI.",
    description: "Go from 'what is AI?' to confidently understanding LLMs, embeddings, RAG, and agents.",
    level: "beginner",
    estimatedHours: 6,
    conceptIds: [
      "what-is-ai",
      "what-is-machine-learning",
      "what-is-deep-learning",
      "what-is-neural-network",
      "what-is-model",
      "training-vs-inference",
      "what-is-transformer",
      "what-is-attention",
      "what-is-llm",
      "what-is-token",
      "tokenization",
      "context-window",
      "what-are-embeddings",
      "what-is-rag",
      "what-is-agent",
    ],
  },
  {
    id: "llm-developer",
    title: "LLM Developer",
    audience: "Developers who want to build with LLMs.",
    description: "Learn tokens, prompting, structured outputs, embeddings, RAG, tools, and agents.",
    level: "intermediate",
    estimatedHours: 10,
    conceptIds: [
      "what-is-llm",
      "what-is-token",
      "tokenization",
      "context-window",
      "what-are-embeddings",
      "what-is-rag",
      "chunking",
      "reranking",
      "what-is-agent",
      "rag-vs-fine-tuning",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    audience: "Engineers building production AI systems.",
    description: "From embeddings and vector search to RAG, agents, evaluation, and observability.",
    level: "intermediate",
    estimatedHours: 16,
    conceptIds: [
      "what-is-llm",
      "what-are-embeddings",
      "what-is-vector-database",
      "vector-search",
      "hnsw",
      "what-is-rag",
      "chunking",
      "reranking",
      "what-is-agent",
      "rag-vs-fine-tuning",
    ],
  },
  {
    id: "ai-agent-engineer",
    title: "AI Agent Engineer",
    audience: "Engineers specializing in agentic systems.",
    description: "Tools, function calling, agent loops, memory, MCP, evaluation, and security.",
    level: "advanced",
    estimatedHours: 14,
    conceptIds: [
      "what-is-llm",
      "what-is-agent",
      "what-is-agent-memory",
      "what-is-mcp",
      "what-is-mcp-server",
    ],
  },
];

export function getPath(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}
