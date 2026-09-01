# ByHeart AI - Curriculum

> The complete, prerequisite-driven learning universe. Companion to [MASTER_PLAN.md](./MASTER_PLAN.md).

**Last reviewed:** 2026-08-30

This document defines *what to learn*, *in what order*, *what you must know first*, and *exactly how to learn it*. It is designed so that a person with **zero coding knowledge**, an **experienced developer new to AI**, or a **working AI engineer** can all learn everything they need here without going elsewhere.

---

## Table of contents

- [1. Curriculum principles](#1-curriculum-principles)
- [2. Concept levels + naming](#2-concept-levels--naming)
- [3. Stable vs volatile content](#3-stable-vs-volatile-content)
- [4. Full concept hierarchy (2026)](#4-full-concept-hierarchy-2026)
- [5. Per-concept prerequisite map](#5-per-concept-prerequisite-map)
- [6. Learning paths (exact order)](#6-learning-paths-exact-order)
- [7. The MVP: ~40 flagship lessons](#7-the-mvp-40-flagship-lessons)
- [8. Topic clusters (SEO + linking)](#8-topic-clusters-seo--linking)
- [9. How to learn: exact procedures](#9-how-to-learn-exact-procedures)
- [10. Prerequisite ceiling: the "learn from zero" track](#10-prerequisite-ceiling-the-learn-from-zero-track)

---

## 1. Curriculum principles

1. **Every concept declares its prerequisites.** No learner ever hits a term they weren't prepared for. If a lesson needs an idea, that idea is either already taught earlier in the path or linked as a prerequisite.
2. **Concept before product.** We teach the *idea* (e.g. "vector search," "approximate nearest neighbor") before any vendor implementation (Pinecone, Qdrant, pgvector). A vendor is never taught as if it were the universal concept.
3. **One concept per page.** Small, focused, interlinked lessons - not giant mega-pages. This aids reading, SEO, and the knowledge graph.
4. **Beginner and expert on the same page.** The lesson template (one-liner -> ELI-beginner -> ... -> technical depth -> code) lets a beginner stop early and an expert skim to the depth they need.
5. **Foundational-stable vs product-volatile** content is separated (see [section 3](#3-stable-vs-volatile-content)) so model churn never rots teaching.
6. **2026-current, future-extensible.** The curriculum reflects the modern ecosystem (reasoning models, multimodal, agents, tool use, MCP, context engineering, memory, evaluation, observability, inference optimization, model routing, open-weight models, AI security, production systems) and new concepts can be added as leaf nodes without restructuring.

---

## 2. Concept levels + naming

Each concept has a **level**:
- **Beginner (B)** - understandable with no prerequisites or only earlier beginner concepts.
- **Intermediate (I)** - assumes core LLM/ML literacy.
- **Advanced (A)** - assumes intermediate concepts and some engineering context.

Each concept has a stable **`id`** (kebab-case, language-independent, used by the knowledge graph and future translations), e.g. `what-is-rag`, `hnsw`, `rag-vs-fine-tuning`.

---

## 3. Stable vs volatile content

| Class | Examples | Where it lives | Update cadence |
| --- | --- | --- | --- |
| **Stable concepts** | attention, cosine similarity, gradient descent, transformers, what is RAG, HNSW, agent loop | MDX lessons | Slow; periodic review |
| **Volatile facts** | model capabilities/pricing, context-window sizes, provider limits, framework APIs, benchmarks, product availability | Structured data (`/models`, `/tools`) | Fast; independent workflow |

**Rule:** never hardcode a model list, price, or framework API detail inside a stable MDX lesson. Lessons reference volatile data by ID so a model update never requires editing a concept page. (Schemas in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md).)

---

## 4. Full concept hierarchy (2026)

Categories in recommended macro-order. `[B/I/A]` = level. Bold = strong MVP candidate.

### 4.1 Foundations `/learn/foundations`
- **What is AI? [B]**
- **What is Machine Learning? [B]**
- **What is Deep Learning? [B]**
- **What is a Neural Network? [B]**
- **What is a Model? [B]**
- **Training vs Inference [B]**
- Parameters vs Hyperparameters [B]
- Datasets, Features, Labels [B]
- Loss functions [I]
- Optimization + Gradient descent [I]
- Backpropagation [I]

### 4.2 Classical ML `/learn/machine-learning`
- Supervised vs Unsupervised vs Reinforcement [B]
- Regression [B]
- Classification [B]
- Clustering [B]
- Decision trees [I]
- Random forests [I]
- Gradient boosting / XGBoost [I]
- Evaluation metrics: Precision, Recall, F1, ROC-AUC [I]
- Cross-validation [I]
- Overfitting vs Underfitting [B]

### 4.3 Deep Learning `/learn/deep-learning`
- Neurons, layers, activations [B]
- CNNs [I]
- RNNs [I]
- LSTMs / GRUs [I]
- Autoencoders [I]
- GANs [I]
- Why transformers replaced RNNs [I]

### 4.4 Transformers `/learn/transformers`
- **What is a Transformer? [I]**
- **What is Attention? [I]**
- Self-attention [I]
- Cross-attention [I]
- Multi-head attention [A]
- Positional encoding [A]
- Encoder / Decoder / Encoder-decoder [I]
- Transformer block anatomy [A]
- **KV cache [A]**

### 4.5 LLMs `/learn/llms`
- **What is an LLM? [B]**
- **What is a Token? [B]**
- **What is Tokenization? [B]**
- **What is a Context Window? [B]**
- Prompt / System / User / Assistant messages [B]
- Temperature, Top-p, Sampling [I]
- Log probabilities [A]
- **Structured output [I]**
- **Function calling / Tool calling [I]**
- Streaming [I]
- Pretraining vs Instruction tuning [I]
- RLHF / DPO [A]
- Distillation [A]
- Reasoning models [I]
- Small language models (SLMs) [I]

### 4.6 Embeddings `/learn/embeddings`
- **What are Embeddings? [B]**
- Why embeddings exist [B]
- Text / Image / Multimodal embeddings [I]
- Vector representations + Dimensions [I]
- **Similarity: Cosine, Dot product, Euclidean [I]**
- Semantic similarity [B]
- Embedding models + quality [I]
- Embedding drift [A]
- Dense vs Sparse embeddings [I]
- Matryoshka embeddings [A]

### 4.7 Vector Databases `/learn/vector-databases`
- **What is a Vector Database? [B]**
- Why vector databases exist [B]
- **Vector search / similarity search [I]**
- Exact vs Approximate nearest neighbor (ANN) [I]
- **HNSW [A]**
- IVF [A]
- Product Quantization (PQ) [A]
- Metadata filtering [I]
- **Hybrid search [I]**
- Indexing, Recall vs Precision, Latency [I]
- Sharding, Replication, Scalability [A]

### 4.8 RAG `/learn/rag`
- **What is RAG? [B]**
- Why RAG? [B]
- **RAG architecture [I]**
- Ingestion: parsing, cleaning, **chunking**, chunk size/overlap, semantic chunking, metadata [I]
- Retrieval: vector + keyword + **hybrid search**, filtering, query rewriting/expansion, multi-query, parent-child, contextual retrieval [I]
- **Reranking + cross-encoders [I]**
- Generation: context construction, grounding, citation [I]
- Advanced: **Agentic RAG**, Graph RAG, multi-hop, Corrective/Adaptive/Self-RAG, multimodal RAG [A]
- Evaluation: faithfulness, relevance, context precision/recall, answer correctness, hallucination eval [A]
- **RAG vs Fine-tuning [I]** / RAG vs Long context [I]

### 4.9 Agents `/learn/agents`
- **What is an AI Agent? [B]**
- Agent vs Chatbot vs Workflow [B]
- **The Agent loop: Observe -> Reason -> Plan -> Act [I]**
- **Tool use / Function calling [I]**
- **Agent Memory + State [I]**
- Planning + Reflection [A]
- ReAct [I]
- Tool selection [I]
- Human-in-the-loop [I]
- Multi-agent systems + orchestration [A]
- Agent evaluation [A]
- Agent observability [A]
- Agent security [A]

### 4.10 MCP `/learn/mcp`
- **What is MCP (Model Context Protocol)? [I]**
- Why MCP exists [I]
- MCP architecture: client, server, transports [I]
- Tools / Resources / Prompts [I]
- Authentication + authorization [A]
- **Building an MCP server [A]**
- Consuming an MCP server [I]
- MCP + agents / IDEs / external services [I]
- MCP security risks + best practices [A]

### 4.11 Context Engineering `/learn/context-engineering`
- **Prompt Engineering vs Context Engineering [I]**
- Context windows + selection + prioritization [I]
- Context compression [A]
- Context caching [A]
- Long-context strategies [A]
- State management [I]

### 4.12 AI Memory `/learn/memory`
- Short-term / conversation history [B]
- Long-term memory [I]
- Semantic / Episodic / Procedural memory [I]
- User memory vs Agent memory [I]
- Memory storage + retrieval + compression [A]
- Memory conflicts + security [A]

### 4.13 Multimodal AI `/learn/multimodal-ai`
- Vision-language models [I]
- Image understanding / OCR [I]
- Speech-to-text / Text-to-speech [I]
- Audio + Video understanding [A]
- Image / Video generation [I]
- Multimodal embeddings + multimodal RAG [A]
- Multimodal agents [A]

### 4.14 Fine-tuning `/learn/fine-tuning`
- **What is Fine-tuning? [I]**
- Full fine-tuning vs PEFT [A]
- **LoRA / QLoRA [A]**
- **Quantization [I]**
- Instruction tuning vs preference tuning (recap) [A]
- When to fine-tune vs RAG vs prompt [I]

### 4.15 Evaluation `/learn/evaluation`
- **Why evaluation matters [B]**
- Offline vs Online evaluation [I]
- Human evaluation [I]
- Model-based evaluation / **LLM-as-a-Judge [I]**
- Benchmarks + test datasets + regression tests [I]
- Hallucination + safety evaluation [A]
- Quality / latency / cost / reliability tradeoffs [I]

### 4.16 Observability `/learn/observability`
- **What is AI Observability? [I]**
- Tracing, logging, metrics [I]
- Token usage, latency, cost tracking [I]
- Tool-call + retrieval + agent traces [A]
- Prompt versioning + evaluation traces [A]

### 4.17 Security `/learn/security`
- **What is Prompt Injection? [B]**
- Indirect prompt injection [I]
- Jailbreaks [I]
- Data leakage / Sensitive info disclosure [I]
- Tool abuse + Excessive agency [A]
- RAG poisoning [A]
- Insecure output handling [I]
- Agent permission boundaries + least privilege [A]
- Secrets management + sandboxing [I]

### 4.18 Inference / Infrastructure `/learn/inference`
- **What is Inference? [B]**
- Batching + Continuous batching [A]
- KV cache (recap) [A]
- Quantization (recap) [I]
- Model serving + inference servers [I]
- Latency vs Throughput [I]
- **Model routing + fallback models [I]**
- Caching + cost optimization [I]
- GPU memory + distributed inference [A]

### 4.19 AI System Design `/learn/ai-system-design`
- How to design an AI system (requirements -> architecture -> data flow -> model choice -> retrieval -> eval -> security -> observability -> scaling -> cost) [A]
- Design: RAG chatbot [I]
- Design: Enterprise knowledge assistant [A]
- Design: Customer-support agent [A]
- Design: Coding agent [A]
- Design: Research / multi-agent system [A]
- Design: AI search engine [A]

---

## 5. Per-concept prerequisite map

Prerequisites for the highest-traffic concepts (full graph lives in `data/concepts.ts`; validated at build time per [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)). Format: `concept  <-  [prerequisites]`.

```
what-is-ai                 <- []
what-is-ml                 <- [what-is-ai]
what-is-deep-learning      <- [what-is-ml]
what-is-neural-network     <- [what-is-deep-learning]
training-vs-inference      <- [what-is-ml, what-is-model]
what-is-model              <- [what-is-ml]

what-is-transformer        <- [what-is-neural-network]
what-is-attention          <- [what-is-transformer]
self-attention             <- [what-is-attention]
multi-head-attention       <- [self-attention]
positional-encoding        <- [what-is-attention, tokenization]
kv-cache                   <- [what-is-attention, what-is-inference]

what-is-llm                <- [what-is-transformer, training-vs-inference]
what-is-token              <- [what-is-llm]
tokenization               <- [what-is-token]
context-window             <- [what-is-token]
temperature-sampling       <- [what-is-llm, what-is-token]
structured-output          <- [what-is-llm]
function-calling           <- [what-is-llm, structured-output]

what-are-embeddings        <- [what-is-token, vector-representations]
vector-representations     <- [what-is-neural-network]
similarity-metrics         <- [what-are-embeddings]
dense-vs-sparse-embeddings <- [what-are-embeddings]

what-is-vector-database    <- [what-are-embeddings, similarity-metrics]
vector-search              <- [what-is-vector-database, similarity-metrics]
ann-vs-enn                 <- [vector-search]
hnsw                       <- [ann-vs-enn]
ivf                        <- [ann-vs-enn]
product-quantization       <- [ann-vs-enn]
hybrid-search              <- [vector-search, keyword-search]
metadata-filtering         <- [vector-search]

what-is-rag                <- [what-is-llm, what-are-embeddings, vector-search]
rag-architecture           <- [what-is-rag]
chunking                   <- [what-is-rag]
reranking                  <- [vector-search, what-is-rag]
contextual-retrieval       <- [chunking, what-are-embeddings]
agentic-rag                <- [what-is-rag, what-is-agent]
graph-rag                  <- [what-is-rag]
rag-evaluation             <- [what-is-rag, why-evaluation-matters]
rag-vs-fine-tuning         <- [what-is-rag, what-is-fine-tuning]

what-is-agent              <- [what-is-llm, function-calling]
agent-loop                 <- [what-is-agent]
tool-use                   <- [what-is-agent, function-calling]
agent-memory               <- [what-is-agent, ai-memory-basics]
react-pattern              <- [agent-loop]
multi-agent-systems        <- [agent-loop, tool-use]

what-is-mcp                <- [what-is-agent, tool-use]
mcp-server                 <- [what-is-mcp]
mcp-security               <- [what-is-mcp, prompt-injection]

prompt-vs-context-eng      <- [context-window, function-calling]
what-is-fine-tuning        <- [what-is-llm, training-vs-inference]
lora                       <- [what-is-fine-tuning]
quantization               <- [what-is-model, what-is-inference]

why-evaluation-matters     <- [what-is-llm]
llm-as-a-judge             <- [why-evaluation-matters]
what-is-observability      <- [what-is-llm]
prompt-injection           <- [what-is-llm]
what-is-inference          <- [training-vs-inference]
model-routing              <- [what-is-inference, what-is-llm]
multimodal-ai              <- [what-is-llm, what-are-embeddings]
```

**Invariant:** the `prerequisites` graph is a DAG (no cycles). The build fails if a cycle or a dangling reference is introduced.

---

## 6. Learning paths (exact order)

Each path is a linear, resumable track. A learner always has exactly one "Next."

### Path 1 - AI Beginner (0 knowledge -> literate)
1. what-is-ai
2. what-is-ml
3. what-is-deep-learning
4. what-is-neural-network
5. what-is-model
6. training-vs-inference
7. what-is-transformer
8. what-is-attention
9. what-is-llm
10. what-is-token
11. tokenization
12. context-window
13. what-are-embeddings
14. what-is-rag
15. what-is-agent

### Path 2 - LLM Developer
1. what-is-llm
2. what-is-token
3. tokenization
4. context-window
5. prompt-basics (system/user/assistant)
6. temperature-sampling
7. structured-output
8. function-calling
9. what-are-embeddings
10. similarity-metrics
11. what-is-rag
12. chunking
13. reranking
14. tool-use
15. what-is-agent
16. rag-vs-fine-tuning

### Path 3 - AI Engineer
1. what-is-llm
2. what-are-embeddings
3. similarity-metrics
4. what-is-vector-database
5. vector-search
6. hnsw
7. hybrid-search
8. what-is-rag
9. rag-architecture
10. chunking
11. reranking
12. contextual-retrieval
13. what-is-agent
14. agent-loop
15. why-evaluation-matters
16. rag-evaluation
17. what-is-observability
18. model-routing

### Path 4 - AI Systems Engineer
1. what-is-model
2. what-is-inference
3. kv-cache
4. quantization
5. batching-continuous-batching
6. model-serving
7. latency-vs-throughput
8. caching
9. model-routing
10. fallback-models
11. scaling-distributed-inference
12. cost-optimization

### Path 5 - AI Agent Engineer
1. what-is-llm
2. function-calling
3. tool-use
4. what-is-agent
5. agent-loop
6. react-pattern
7. agent-memory
8. prompt-vs-context-eng
9. what-is-mcp
10. mcp-server
11. multi-agent-systems
12. agent-evaluation
13. agent-observability
14. agent-security

### Path 6 - AI Research Foundations
1. math-for-ai (linear algebra, probability, calculus - overview)
2. what-is-ml
3. loss-functions
4. optimization-gradient-descent
5. backpropagation
6. what-is-deep-learning
7. what-is-transformer
8. self-attention
9. multi-head-attention
10. positional-encoding
11. pretraining-vs-instruction-tuning
12. rlhf-dpo
13. reading-research-papers

---

## 7. The MVP: ~40 flagship lessons

The first content release. Chosen for maximum coverage of beginner literacy + practical LLM/AI engineering, forming a **complete self-contained journey** from zero to building RAG and agents. Grouped by category, in suggested authoring order.

**Foundations (6)**
1. What is AI?
2. What is Machine Learning?
3. What is Deep Learning?
4. What is a Neural Network?
5. What is a Model?
6. Training vs Inference

**Transformers (3)**
7. What is a Transformer?
8. What is Attention?
9. What is KV Cache?

**LLMs (8)**
10. What is an LLM?
11. What is a Token?
12. What is Tokenization?
13. What is a Context Window?
14. Temperature, Top-p & Sampling
15. Structured Output
16. Function Calling / Tool Calling
17. What is Prompt Engineering?

**Context (1)**
18. What is Context Engineering?

**Embeddings (3)**
19. What are Embeddings?
20. Similarity: Cosine, Dot Product & Euclidean
21. Dense vs Sparse Embeddings

**Vector Databases (4)**
22. What is a Vector Database?
23. What is Vector Search?
24. What is HNSW?
25. What is Hybrid Search?

**RAG (7)**
26. What is RAG?
27. RAG Architecture
28. What is Chunking?
29. What is Reranking?
30. What is Contextual Retrieval?
31. RAG vs Fine-tuning
32. What is Agentic RAG?

**Agents (4)**
33. What is an AI Agent?
34. The Agent Loop
35. Tool Use & Function Calling (agent context)
36. What is Agent Memory?

**MCP (2)**
37. What is MCP?
38. What is an MCP Server?

**Fine-tuning / Inference (2)**
39. What is Fine-tuning? (incl. LoRA overview)
40. What is Quantization?

**Cross-cutting starter lessons (bonus, if capacity allows)**
- What is AI Evaluation? / LLM-as-a-Judge
- What is AI Observability?
- What is Prompt Injection?
- What is Model Routing?

> Every MVP lesson ships with the full 18-part template ([CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)), a memory card, a quiz, and correct prerequisite/related/next links, so learners can move through them as a single guided path.

---

## 8. Topic clusters (SEO + linking)

Content is organized into interlinked clusters, not mega-pages. Example - the RAG cluster (`/learn/rag/*`), each page linking to the others:

```
what-is-rag  (hub)
  -> rag-architecture
  -> chunking
  -> embeddings (cross-cluster)
  -> vector-search (cross-cluster)
  -> hybrid-search
  -> reranking
  -> query-rewriting
  -> contextual-retrieval
  -> agentic-rag
  -> graph-rag
  -> rag-evaluation
  -> rag-vs-fine-tuning
  -> rag-vs-long-context
```

Each cluster hub answers the informational query and routes to learning, comparison, implementation, and evaluation intents. Comparison pages (`/compare/*`) are first-class and cross-link both clusters they touch (e.g. `rag-vs-fine-tuning` links into RAG and Fine-tuning).

---

## 9. How to learn: exact procedures

### 9.1 The per-lesson procedure (every page)
1. **Check prerequisites** - the right rail shows what you must know first; if any is unfamiliar, follow it, then return.
2. **Read the one-line answer + mental model** - anchor the idea in a sentence and an image in your head.
3. **Manipulate the visual** - change the parameter, watch the effect (build intuition before formalism).
4. **Read "How it works"** - the step-by-step mechanics.
5. **Run the code** - the minimal working example; modify one thing.
6. **Take the quiz** - 3-5 questions; if you miss one, reread that section.
7. **Review "❤️ Know this by heart"** - the memory card is the one thing to retain.
8. **Click Next** - the guaranteed next concept in your path.

### 9.2 Per-path procedures

**Absolute beginner (Maya):** Follow **Path 1** top to bottom. Do not skip. Spend time on the visuals and analogies; skip the "Technical explanation" and "Code" sections on the first pass, then loop back once. Goal: literacy + comfort. Estimated: a focused weekend.

**Experienced dev, new to AI (Dev Raj):** Skim **Path 2 (LLM Developer)** then **Path 3 (AI Engineer)**. Read one-liner + technical + code + "when NOT to use" on each page; use quizzes to find gaps; do the RAG and agent lessons hands-on. Then build a project. Estimated: 1-2 weeks part-time.

**Working AI engineer (Sara):** Use as **reference** (search/`Cmd-K`) plus targeted deep-dives (Vector DBs, RAG advanced, Evaluation, Observability, Security, System Design). Follow **Path 4/5** selectively. Read comparisons and "common mistakes."

**Agent-focused:** **Path 5** end to end, with hands-on tool-use, memory, and MCP-server lessons; finish with agent evaluation + security.

**Research-oriented:** **Path 6**, pairing each concept with its "Further reading" primary paper.

### 9.3 Retention system
- **Memory cards** ("Know this by heart") are collected per path into a reviewable set.
- **Quizzes** gate self-assessed progress.
- **Spaced review (later phase):** resurface memory cards over time for durable retention.

---

## 10. Prerequisite ceiling: the "learn from zero" track

To guarantee **anyone with zero coding knowledge** can learn everything here, the curriculum includes a small set of **on-ramp lessons** that remove hidden prerequisites, so no learner must leave the site:

- **"How to read code on this site"** - what a variable/function/API call is, how to read our minimal examples (no prior programming assumed).
- **"Math you actually need (and don't)"** - the intuition for vectors, similarity, and probability, taught visually; heavy math is optional and clearly marked.
- **"How AI models are made (10-minute mental model)"** - data -> training -> a model -> inference, before any jargon.
- **Every jargon term links to the glossary**, and every glossary term links to its full lesson - so a beginner can always resolve an unknown word in one click without losing their place.

This "prerequisite ceiling" is the mechanism that fulfills the promise: **come in with any level of knowledge and learn everything, without going to another site.**
