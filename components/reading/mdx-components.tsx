import type { MDXComponents } from "mdx/types";
import { OneLine } from "./one-line";
import { MemoryCard } from "./memory-card";
import { Compare } from "./compare";
import { Quiz } from "./quiz";
import { Note, Tip, Warning, CommonMistake } from "./callout";
import { RagPipeline } from "@/components/visuals/rag-pipeline";
import { AttentionVisualizer } from "@/components/visuals/attention-visualizer";
import { TransformerArchitecture } from "@/components/visuals/transformer-architecture";
import { MultiHeadAttention } from "@/components/visuals/multi-head-attention";
import { PositionalEncoding } from "@/components/visuals/positional-encoding";
import { KVCacheVisualizer } from "@/components/visuals/kv-cache-visualizer";
import { TokenizationDemo } from "@/components/visuals/tokenization-demo";
import { TemperatureSampling } from "@/components/visuals/temperature-sampling";
import { ContextWindowVisualizer } from "@/components/visuals/context-window-visualizer";
import { FunctionCallingFlow } from "@/components/visuals/function-calling-flow";
import { SemanticMap } from "@/components/visuals/semantic-map";
import { SimilarityMetrics } from "@/components/visuals/similarity-metrics";
import { DenseVsSparse } from "@/components/visuals/dense-vs-sparse";
import { MatryoshkaVisualizer } from "@/components/visuals/matryoshka-visualizer";
import { NearestNeighborSearch } from "@/components/visuals/nearest-neighbor-search";
import { AnnVsExact } from "@/components/visuals/ann-vs-exact";
import { HnswVisualizer } from "@/components/visuals/hnsw-visualizer";
import { ProductQuantization } from "@/components/visuals/product-quantization";
import { MetadataFiltering } from "@/components/visuals/metadata-filtering";
import { HybridSearchFusion } from "@/components/visuals/hybrid-search-fusion";
import { RagArchitecture } from "@/components/visuals/rag-architecture";
import { ChunkingVisualizer } from "@/components/visuals/chunking-visualizer";
import { QueryTransformation } from "@/components/visuals/query-transformation";
import { RerankingVisualizer } from "@/components/visuals/reranking-visualizer";
import { ContextualRetrieval } from "@/components/visuals/contextual-retrieval";
import { AgenticRag } from "@/components/visuals/agentic-rag";
import { RagEvaluation } from "@/components/visuals/rag-evaluation";

// Components available inside every lesson's MDX.
export const mdxComponents: MDXComponents = {
  OneLine,
  MemoryCard,
  Compare,
  Quiz,
  Note,
  Tip,
  Warning,
  CommonMistake,
  // Registered visuals (referenced by name from MDX)
  RagPipeline,
  AttentionVisualizer,
  TransformerArchitecture,
  MultiHeadAttention,
  PositionalEncoding,
  KVCacheVisualizer,
  TokenizationDemo,
  TemperatureSampling,
  ContextWindowVisualizer,
  FunctionCallingFlow,
  SemanticMap,
  SimilarityMetrics,
  DenseVsSparse,
  MatryoshkaVisualizer,
  NearestNeighborSearch,
  AnnVsExact,
  HnswVisualizer,
  ProductQuantization,
  MetadataFiltering,
  HybridSearchFusion,
  RagArchitecture,
  ChunkingVisualizer,
  QueryTransformation,
  RerankingVisualizer,
  ContextualRetrieval,
  AgenticRag,
  RagEvaluation,
};
