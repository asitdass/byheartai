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
import { AgentLoop } from "@/components/visuals/agent-loop";
import { ReactTrace } from "@/components/visuals/react-trace";
import { AgentVsWorkflow } from "@/components/visuals/agent-vs-workflow";
import { ToolSelection } from "@/components/visuals/tool-selection";
import { AgentMemory } from "@/components/visuals/agent-memory";
import { PlanningReflection } from "@/components/visuals/planning-reflection";
import { MultiAgent } from "@/components/visuals/multi-agent";
import { HumanInTheLoop } from "@/components/visuals/human-in-the-loop";
import { McpWhatIs } from "@/components/visuals/mcp-what-is";
import { McpNByM } from "@/components/visuals/mcp-n-by-m";
import { McpArchitecture } from "@/components/visuals/mcp-architecture";
import { McpPrimitives } from "@/components/visuals/mcp-primitives";
import { McpAuthFlow } from "@/components/visuals/mcp-auth-flow";
import { McpCallFlow } from "@/components/visuals/mcp-call-flow";
import { McpAgentHost } from "@/components/visuals/mcp-agent-host";
import { McpSecurityThreats } from "@/components/visuals/mcp-security-threats";
import { PromptVsContext } from "@/components/visuals/prompt-vs-context";
import { ContextPacking } from "@/components/visuals/context-packing";
import { ContextCompression } from "@/components/visuals/context-compression";
import { ContextCaching } from "@/components/visuals/context-caching";
import { LostInTheMiddle } from "@/components/visuals/lost-in-the-middle";
import { ContextStrategies } from "@/components/visuals/context-strategies";
import { ConversationHistory } from "@/components/visuals/conversation-history";
import { LongTermRecall } from "@/components/visuals/long-term-recall";
import { MemoryTypes } from "@/components/visuals/memory-types";
import { UserVsAgentMemory } from "@/components/visuals/user-vs-agent-memory";
import { MemoryLifecycle } from "@/components/visuals/memory-lifecycle";
import { MemoryConflicts } from "@/components/visuals/memory-conflicts";
import { VlmArchitecture } from "@/components/visuals/vlm-architecture";
import { OcrVsVlm } from "@/components/visuals/ocr-vs-vlm";
import { SpeechPipeline } from "@/components/visuals/speech-pipeline";
import { VideoTimeline } from "@/components/visuals/video-timeline";
import { GenerationFlow } from "@/components/visuals/generation-flow";
import { MultimodalRag } from "@/components/visuals/multimodal-rag";
import { MultimodalAgent } from "@/components/visuals/multimodal-agent";
import { FineTuningIdea } from "@/components/visuals/fine-tuning-idea";
import { FullVsPeft } from "@/components/visuals/full-vs-peft";
import { LoraQlora } from "@/components/visuals/lora-qlora";
import { QuantizationBits } from "@/components/visuals/quantization-bits";
import { SftVsDpo } from "@/components/visuals/sft-vs-dpo";
import { FineTuneDecision } from "@/components/visuals/fine-tune-decision";
import { WhyEvalMatters } from "@/components/visuals/why-eval-matters";
import { OfflineVsOnline } from "@/components/visuals/offline-vs-online";
import { HumanEvalRubric } from "@/components/visuals/human-eval-rubric";
import { LlmAsJudge } from "@/components/visuals/llm-as-judge";
import { BenchmarksRegression } from "@/components/visuals/benchmarks-regression";
import { HallucinationSafety } from "@/components/visuals/hallucination-safety";
import { QualityLatencyCost } from "@/components/visuals/quality-latency-cost";
import { ObservabilityIdea } from "@/components/visuals/observability-idea";
import { TracingPillars } from "@/components/visuals/tracing-pillars";
import { TokenCostWaterfall } from "@/components/visuals/token-cost-waterfall";
import { AgentTraceWaterfall } from "@/components/visuals/agent-trace-waterfall";
import { PromptVersionTrace } from "@/components/visuals/prompt-version-trace";
import { PromptInjectionIdea } from "@/components/visuals/prompt-injection-idea";
import { IndirectInjection } from "@/components/visuals/indirect-injection";
import { JailbreakVsInjection } from "@/components/visuals/jailbreak-vs-injection";
import { DataLeakagePaths } from "@/components/visuals/data-leakage-paths";
import { ExcessiveAgency } from "@/components/visuals/excessive-agency";
import { RagPoisoning } from "@/components/visuals/rag-poisoning";
import { InsecureOutput } from "@/components/visuals/insecure-output";
import { LeastPrivilegeLayers } from "@/components/visuals/least-privilege-layers";
import { SecretsSandbox } from "@/components/visuals/secrets-sandbox";
import { InferenceIdea } from "@/components/visuals/inference-idea";
import { ContinuousBatching } from "@/components/visuals/continuous-batching";
import { PagedKvCache } from "@/components/visuals/paged-kv-cache";
import { ServingQuant } from "@/components/visuals/serving-quant";
import { InferenceServer } from "@/components/visuals/inference-server";
import { LatencyThroughput } from "@/components/visuals/latency-throughput";
import { ModelRouting } from "@/components/visuals/model-routing";
import { InferenceCaches } from "@/components/visuals/inference-caches";
import { DistributedGpu } from "@/components/visuals/distributed-gpu";
import { SystemDesignLoop } from "@/components/visuals/system-design-loop";
import { RagChatbotDesign } from "@/components/visuals/rag-chatbot-design";
import { EnterpriseAclWall } from "@/components/visuals/enterprise-acl-wall";
import { SupportAgentDesign } from "@/components/visuals/support-agent-design";
import { CodingAgentDesign } from "@/components/visuals/coding-agent-design";
import { ResearchTeamDesign } from "@/components/visuals/research-team-design";
import { AiSearchDesign } from "@/components/visuals/ai-search-design";
import { ParametersVsHyperparams } from "@/components/visuals/parameters-vs-hyperparams";
import { DatasetsFeaturesLabels } from "@/components/visuals/datasets-features-labels";
import { LossFunctions } from "@/components/visuals/loss-functions";
import { GradientDescent } from "@/components/visuals/gradient-descent";
import { BackpropagationViz } from "@/components/visuals/backpropagation";
import { ReasoningModels } from "@/components/visuals/reasoning-models";
import { StreamingTokens } from "@/components/visuals/streaming-tokens";
import { SlmVsLlm } from "@/components/visuals/slm-vs-llm";
import { SupervisedUnsupervisedRl } from "@/components/visuals/supervised-unsupervised-rl";
import { RegressionIdea } from "@/components/visuals/regression-idea";
import { ClassificationIdea } from "@/components/visuals/classification-idea";
import { ClusteringIdea } from "@/components/visuals/clustering-idea";
import { OverfittingUnderfitting } from "@/components/visuals/overfitting-underfitting";
import { DecisionTreesViz } from "@/components/visuals/decision-trees";
import { RandomForests } from "@/components/visuals/random-forests";
import { GradientBoosting } from "@/components/visuals/gradient-boosting";
import { ClassificationMetrics } from "@/components/visuals/classification-metrics";
import { CrossValidation } from "@/components/visuals/cross-validation";
import { NeuronsLayersActivations } from "@/components/visuals/neurons-layers";
import { CnnIdea } from "@/components/visuals/cnn-idea";
import { RnnIdea } from "@/components/visuals/rnn-idea";
import { LstmGru } from "@/components/visuals/lstm-gru";
import { AutoencoderIdea } from "@/components/visuals/autoencoder-idea";
import { GanIdea } from "@/components/visuals/gan-idea";
import { TransformersVsRnns } from "@/components/visuals/transformers-vs-rnns";

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
  AgentLoop,
  ReactTrace,
  AgentVsWorkflow,
  ToolSelection,
  AgentMemory,
  PlanningReflection,
  MultiAgent,
  HumanInTheLoop,
  McpWhatIs,
  McpNByM,
  McpArchitecture,
  McpPrimitives,
  McpAuthFlow,
  McpCallFlow,
  McpAgentHost,
  McpSecurityThreats,
  PromptVsContext,
  ContextPacking,
  ContextCompression,
  ContextCaching,
  LostInTheMiddle,
  ContextStrategies,
  ConversationHistory,
  LongTermRecall,
  MemoryTypes,
  UserVsAgentMemory,
  MemoryLifecycle,
  MemoryConflicts,
  VlmArchitecture,
  OcrVsVlm,
  SpeechPipeline,
  VideoTimeline,
  GenerationFlow,
  MultimodalRag,
  MultimodalAgent,
  FineTuningIdea,
  FullVsPeft,
  LoraQlora,
  QuantizationBits,
  SftVsDpo,
  FineTuneDecision,
  WhyEvalMatters,
  OfflineVsOnline,
  HumanEvalRubric,
  LlmAsJudge,
  BenchmarksRegression,
  HallucinationSafety,
  QualityLatencyCost,
  ObservabilityIdea,
  TracingPillars,
  TokenCostWaterfall,
  AgentTraceWaterfall,
  PromptVersionTrace,
  PromptInjectionIdea,
  IndirectInjection,
  JailbreakVsInjection,
  DataLeakagePaths,
  ExcessiveAgency,
  RagPoisoning,
  InsecureOutput,
  LeastPrivilegeLayers,
  SecretsSandbox,
  InferenceIdea,
  ContinuousBatching,
  PagedKvCache,
  ServingQuant,
  InferenceServer,
  LatencyThroughput,
  ModelRouting,
  InferenceCaches,
  DistributedGpu,
  SystemDesignLoop,
  RagChatbotDesign,
  EnterpriseAclWall,
  SupportAgentDesign,
  CodingAgentDesign,
  ResearchTeamDesign,
  AiSearchDesign,
  ParametersVsHyperparams,
  DatasetsFeaturesLabels,
  LossFunctions,
  GradientDescent,
  BackpropagationViz,
  ReasoningModels,
  StreamingTokens,
  SlmVsLlm,
  SupervisedUnsupervisedRl,
  RegressionIdea,
  ClassificationIdea,
  ClusteringIdea,
  OverfittingUnderfitting,
  DecisionTreesViz,
  RandomForests,
  GradientBoosting,
  ClassificationMetrics,
  CrossValidation,
  NeuronsLayersActivations,
  CnnIdea,
  RnnIdea,
  LstmGru,
  AutoencoderIdea,
  GanIdea,
  TransformersVsRnns,
};
