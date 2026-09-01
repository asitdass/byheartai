// Content schema types. See docs/CONTENT_SCHEMA.md for the full model.

export type Level = "beginner" | "intermediate" | "advanced";
export type Status = "draft" | "in-review" | "published" | "deprecated";

export interface Reference {
  title: string;
  url: string;
  kind?: "docs" | "paper" | "spec" | "article" | "video";
}

/** Stable "identity card" for a concept, sourced from MDX front-matter. */
export interface ConceptMeta {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: Level;
  summary: string;
  keywords: string[];

  // knowledge graph
  prerequisites: string[];
  next: string[];
  related: string[];
  alternatives: string[];
  confusedWith: string[];

  // volatile references (by id)
  frameworks: string[];
  products: string[];
  papers: Reference[];

  // lifecycle / trust
  status: Status;
  author: string;
  reviewer?: string;
  datePublished?: string;
  dateUpdated?: string;
  lastReviewed?: string;
  version: number;

  // presentation
  quizId?: string;
  estimatedMinutes?: number;
}

/** A concept plus its raw MDX body. */
export interface Concept extends ConceptMeta {
  body: string;
  /** file path relative to repo root, for diagnostics */
  filePath: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface LearningPath {
  id: string;
  title: string;
  audience: string;
  description: string;
  conceptIds: string[];
  level: Level;
  estimatedHours?: number;
}

// ---- Quizzes ----
export type QuestionType = "single" | "multiple" | "true-false";

export interface Question {
  id: string;
  prompt: string;
  type: QuestionType;
  options: { id: string; text: string }[];
  correct: string[];
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
}

export interface Quiz {
  id: string;
  conceptId: string;
  questions: Question[];
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}
