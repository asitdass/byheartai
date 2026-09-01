import type { Category } from "@/lib/types";

// Curriculum categories in recommended macro-order (see docs/CURRICULUM.md).
// Order here controls sidebar + hub ordering.
export const categories: Category[] = [
  { id: "foundations", title: "Foundations", description: "The base ideas behind all of AI: models, training, and inference." },
  { id: "machine-learning", title: "Machine Learning", description: "How machines learn patterns from data." },
  { id: "deep-learning", title: "Deep Learning", description: "Neural networks and the architectures that power modern AI." },
  { id: "transformers", title: "Transformers", description: "Attention and the architecture behind today's language models." },
  { id: "llms", title: "LLMs", description: "Large language models: tokens, context, prompting, and tool use." },
  { id: "embeddings", title: "Embeddings", description: "Turning meaning into vectors you can compare mathematically." },
  { id: "vector-databases", title: "Vector Databases", description: "Storing and searching embeddings at scale." },
  { id: "rag", title: "RAG", description: "Retrieval-Augmented Generation: grounding models in real information." },
  { id: "agents", title: "Agents", description: "AI systems that reason, plan, and use tools to reach goals." },
  { id: "mcp", title: "MCP", description: "The Model Context Protocol connecting models to tools and data." },
  { id: "context-engineering", title: "Context Engineering", description: "Designing what goes into the model's context window." },
  { id: "memory", title: "Memory", description: "How AI systems remember across turns and sessions." },
  { id: "multimodal-ai", title: "Multimodal AI", description: "Models that understand and generate images, audio, and video." },
  { id: "fine-tuning", title: "Fine-tuning", description: "Adapting models to your data and tasks." },
  { id: "evaluation", title: "Evaluation", description: "Measuring whether an AI system actually works." },
  { id: "observability", title: "Observability", description: "Tracing, logging, and monitoring AI systems in production." },
  { id: "security", title: "Security", description: "Defending AI systems against injection, abuse, and leakage." },
  { id: "inference", title: "Inference", description: "Serving models efficiently: latency, throughput, and cost." },
  { id: "ai-system-design", title: "AI System Design", description: "Designing complete, production-grade AI systems." },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
