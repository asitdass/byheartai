interface GlossaryTerm {
  id: string;
  term: string;
  aliases: string[];
  shortDefinition: string;
  conceptId: string;
}

// Each term links to its full lesson (see docs/CONTENT_SCHEMA.md section 8).
export const glossary: GlossaryTerm[] = [
  {
    id: "rag",
    term: "RAG",
    aliases: ["Retrieval-Augmented Generation"],
    shortDefinition: "Retrieving relevant external information and giving it to a model as context before it answers.",
    conceptId: "what-is-rag",
  },
  {
    id: "embedding",
    term: "Embedding",
    aliases: ["vector embedding"],
    shortDefinition: "A numerical vector that captures the meaning of text, images, or other data so it can be compared mathematically.",
    conceptId: "what-are-embeddings",
  },
  {
    id: "llm",
    term: "LLM",
    aliases: ["Large Language Model"],
    shortDefinition: "A large neural network trained to predict and generate text, powering modern chatbots and assistants.",
    conceptId: "what-is-llm",
  },
];

export type { GlossaryTerm };
