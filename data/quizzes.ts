import type { Quiz } from "@/lib/types";
import { curriculumFillQuizzes } from "./quizzes-curriculum-fill";

export const quizzes: Quiz[] = [
  {
    id: "quiz-what-is-ai",
    conceptId: "what-is-ai",
    questions: [
      {
        id: "q1",
        prompt: "What best describes modern AI?",
        type: "single",
        options: [
          { id: "a", text: "Software with a human-like conscious mind" },
          { id: "b", text: "Software that performs tasks we associate with intelligence, mostly by learning patterns from data" },
          { id: "c", text: "Only hand-written if/then rules" },
          { id: "d", text: "A single specific algorithm" },
        ],
        correct: ["b"],
        explanation:
          "AI is a broad umbrella for software that does 'smart' tasks. Most modern AI learns patterns from data rather than following hand-written rules — and it is not conscious.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How do Machine Learning and Deep Learning relate to AI?",
        type: "single",
        options: [
          { id: "a", text: "They are completely separate fields from AI" },
          { id: "b", text: "AI is a subset of Machine Learning" },
          { id: "c", text: "Deep Learning is inside Machine Learning, which is inside AI" },
          { id: "d", text: "They all mean exactly the same thing" },
        ],
        correct: ["c"],
        explanation:
          "AI is the umbrella; Machine Learning is a subset of AI; Deep Learning is a subset of Machine Learning.",
        difficulty: "easy",
      },
      {
        id: "q3",
        prompt: "True or false: all AI systems learn from data.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Some AI is rule-based (hand-written rules). Learning from data describes machine learning specifically, which is the dominant but not the only form of AI.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-machine-learning",
    conceptId: "what-is-machine-learning",
    questions: [
      {
        id: "q1",
        prompt: "What makes machine learning different from traditional programming?",
        type: "single",
        options: [
          { id: "a", text: "It runs faster" },
          { id: "b", text: "It learns rules from examples instead of being given the rules" },
          { id: "c", text: "It never makes mistakes" },
          { id: "d", text: "It doesn't need any data" },
        ],
        correct: ["b"],
        explanation:
          "In ML you provide examples and the system learns the patterns itself, rather than a human writing every rule.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which are types of machine learning? (Select all that apply.)",
        type: "multiple",
        options: [
          { id: "a", text: "Supervised learning" },
          { id: "b", text: "Unsupervised learning" },
          { id: "c", text: "Reinforcement learning" },
          { id: "d", text: "Deterministic learning" },
        ],
        correct: ["a", "b", "c"],
        explanation:
          "The three broad flavors are supervised, unsupervised, and reinforcement learning. 'Deterministic learning' is not a standard category.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is overfitting?",
        type: "single",
        options: [
          { id: "a", text: "When a model memorizes the training data but fails to generalize to new data" },
          { id: "b", text: "When a model is too small" },
          { id: "c", text: "When training is too fast" },
          { id: "d", text: "When you have too much data" },
        ],
        correct: ["a"],
        explanation:
          "Overfitting means the model learned the training set too specifically (including noise) and performs poorly on unseen data.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-deep-learning",
    conceptId: "what-is-deep-learning",
    questions: [
      {
        id: "q1",
        prompt: "What does the 'deep' in deep learning refer to?",
        type: "single",
        options: [
          { id: "a", text: "Deep philosophical understanding" },
          { id: "b", text: "Many layers stacked in a neural network" },
          { id: "c", text: "Deep storage of data" },
          { id: "d", text: "A very large hard drive" },
        ],
        correct: ["b"],
        explanation:
          "'Deep' refers to neural networks with many stacked layers, which build increasingly abstract representations.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is a key advantage of deep learning over classical ML?",
        type: "single",
        options: [
          { id: "a", text: "It never needs data" },
          { id: "b", text: "It learns useful features automatically from raw data" },
          { id: "c", text: "It always runs on a phone" },
          { id: "d", text: "It requires no compute" },
        ],
        correct: ["b"],
        explanation:
          "Deep learning performs representation learning — it discovers the important features itself instead of relying on hand-crafted ones.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: deep learning is always the best choice for every problem.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "For small or tabular datasets, simpler models like gradient boosting are often faster, cheaper, and equally accurate.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-neural-network",
    conceptId: "what-is-neural-network",
    questions: [
      {
        id: "q1",
        prompt: "What does a neural network adjust when it learns?",
        type: "single",
        options: [
          { id: "a", text: "The number of pixels" },
          { id: "b", text: "The weights of the connections between neurons" },
          { id: "c", text: "The screen brightness" },
          { id: "d", text: "The programming language" },
        ],
        correct: ["b"],
        explanation:
          "Learning means adjusting the connection weights (and biases) so the network's outputs match the training data.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why are activation functions important?",
        type: "single",
        options: [
          { id: "a", text: "They add non-linearity so the network can learn complex patterns" },
          { id: "b", text: "They make the network run on GPUs" },
          { id: "c", text: "They store the training data" },
          { id: "d", text: "They are optional decorations" },
        ],
        correct: ["a"],
        explanation:
          "Without non-linear activation functions, stacked layers would collapse into a single linear function, unable to model complex relationships.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What algorithm efficiently computes how each weight contributed to the error?",
        type: "single",
        options: [
          { id: "a", text: "Backpropagation" },
          { id: "b", text: "Compression" },
          { id: "c", text: "Tokenization" },
          { id: "d", text: "Encryption" },
        ],
        correct: ["a"],
        explanation:
          "Backpropagation computes gradients through every layer, which gradient descent then uses to update the weights.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-model",
    conceptId: "what-is-model",
    questions: [
      {
        id: "q1",
        prompt: "What is an AI model, concretely?",
        type: "single",
        options: [
          { id: "a", text: "The training process itself" },
          { id: "b", text: "An architecture plus the learned parameters, saved as a reusable artifact" },
          { id: "c", text: "A database of facts" },
          { id: "d", text: "The dataset used for training" },
        ],
        correct: ["b"],
        explanation:
          "A model is the finished artifact: the architecture (structure) together with the learned parameters (weights).",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "True or false: a bigger model is always more accurate for your task.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Bigger models cost more to run and aren't always more accurate for a specific task; the right size depends on the problem.",
        difficulty: "easy",
      },
      {
        id: "q3",
        prompt: "What technique shrinks a model by lowering numeric precision?",
        type: "single",
        options: [
          { id: "a", text: "Quantization" },
          { id: "b", text: "Chunking" },
          { id: "c", text: "Reranking" },
          { id: "d", text: "Prompting" },
        ],
        correct: ["a"],
        explanation:
          "Quantization reduces the precision of parameters (e.g. fp16 to int8) to shrink the model and speed up inference.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-training-vs-inference",
    conceptId: "training-vs-inference",
    questions: [
      {
        id: "q1",
        prompt: "During inference, what happens to the model's parameters?",
        type: "single",
        options: [
          { id: "a", text: "They are updated with each request" },
          { id: "b", text: "They stay frozen — no learning happens" },
          { id: "c", text: "They are deleted" },
          { id: "d", text: "They double in size" },
        ],
        correct: ["b"],
        explanation:
          "Inference only runs the forward pass; parameters are frozen. Learning would require a separate training or fine-tuning run.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which phase is typically slow and compute-heavy?",
        type: "single",
        options: [
          { id: "a", text: "Training" },
          { id: "b", text: "Inference" },
          { id: "c", text: "Neither" },
          { id: "d", text: "Both are equally slow per call" },
        ],
        correct: ["a"],
        explanation:
          "Training computes gradients and updates parameters over many passes, making it far more expensive per run than a single inference call.",
        difficulty: "easy",
      },
      {
        id: "q3",
        prompt: "True or false: a standard chatbot permanently learns from your conversation as you chat.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Standard inference changes nothing in the model. Any lasting learning would need a separate training/fine-tuning process.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-rag",
    conceptId: "what-is-rag",
    questions: [
      {
        id: "q1",
        prompt: "What does RAG do that plain prompting does not?",
        type: "single",
        options: [
          { id: "a", text: "It retrains the model on your data" },
          { id: "b", text: "It retrieves relevant information and adds it to the context before answering" },
          { id: "c", text: "It makes the model bigger" },
          { id: "d", text: "It removes the need for a language model" },
        ],
        correct: ["b"],
        explanation:
          "RAG retrieves relevant external information and places it in the model's context at answer time. It does not change the model's weights.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which of these are steps in a typical RAG pipeline? (Select all that apply.)",
        type: "multiple",
        options: [
          { id: "a", text: "Chunking documents" },
          { id: "b", text: "Embedding chunks into vectors" },
          { id: "c", text: "Retraining the base model on every query" },
          { id: "d", text: "Retrieving the most similar chunks for a query" },
        ],
        correct: ["a", "b", "d"],
        explanation:
          "A RAG pipeline chunks documents, embeds them, and retrieves the most similar chunks at query time. No retraining happens per query.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: RAG guarantees the model will never hallucinate.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "RAG reduces hallucination by grounding answers in retrieved context, but it does not eliminate it. Poor retrieval or ignored context can still produce wrong answers.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-transformer",
    conceptId: "what-is-transformer",
    questions: [
      {
        id: "q1",
        prompt: "What key idea made transformers better than the models before them?",
        type: "single",
        options: [
          { id: "a", text: "They read text strictly one word at a time" },
          { id: "b", text: "They process all words at once and use attention to relate them" },
          { id: "c", text: "They avoid using any neural networks" },
          { id: "d", text: "They memorize the training data exactly" },
        ],
        correct: ["b"],
        explanation:
          "Transformers process the whole sequence in parallel and use attention so each word can draw context from any other word — a big leap over sequential RNNs.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How do a 'transformer' and an 'LLM' relate?",
        type: "single",
        options: [
          { id: "a", text: "They are exactly the same thing" },
          { id: "b", text: "A transformer is the architecture; an LLM is a large model built with it" },
          { id: "c", text: "An LLM is the architecture; a transformer is a product" },
          { id: "d", text: "They are unrelated" },
        ],
        correct: ["b"],
        explanation:
          "The transformer is the underlying architecture. An LLM is a large model built using that architecture — and transformers also power image and audio models.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a transformer reads text strictly left to right, one word at a time.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Transformers attend to all positions at once. (Generative models do mask future tokens, but they still process available positions in parallel.)",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-attention",
    conceptId: "what-is-attention",
    questions: [
      {
        id: "q1",
        prompt: "What does attention let each word do?",
        type: "single",
        options: [
          { id: "a", text: "Ignore all other words" },
          { id: "b", text: "Decide which other words are most relevant and blend in their information" },
          { id: "c", text: "Change its own spelling" },
          { id: "d", text: "Run the model faster with no other effect" },
        ],
        correct: ["b"],
        explanation:
          "Attention computes how relevant every other word is, then blends in the most relevant information to build a context-aware representation.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "In attention, what are the three learned roles for each token?",
        type: "single",
        options: [
          { id: "a", text: "Input, hidden, output" },
          { id: "b", text: "Query, key, value" },
          { id: "c", text: "Encoder, decoder, embedder" },
          { id: "d", text: "Token, weight, bias" },
        ],
        correct: ["b"],
        explanation:
          "Each token produces a query (what it looks for), a key (what it offers), and a value (the information it carries). Query·key gives relevance; values are blended by those weights.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is the role of softmax in attention?",
        type: "single",
        options: [
          { id: "a", text: "It turns relevance scores into weights that add up to 1" },
          { id: "b", text: "It removes the need for values" },
          { id: "c", text: "It shuffles the word order" },
          { id: "d", text: "It trains the model" },
        ],
        correct: ["a"],
        explanation:
          "Softmax normalizes the raw scores into positive weights summing to 1, so the output is a proper weighted blend of the values.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-self-attention",
    conceptId: "self-attention",
    questions: [
      {
        id: "q1",
        prompt: "What makes attention 'self'-attention?",
        type: "single",
        options: [
          { id: "a", text: "Queries, keys, and values all come from the same sequence" },
          { id: "b", text: "It only works on a single word" },
          { id: "c", text: "It needs no training" },
          { id: "d", text: "It compares two different documents" },
        ],
        correct: ["a"],
        explanation:
          "In self-attention, Q, K, and V are all projections of the same input sequence, so each token attends to the other tokens in that same sequence.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why do generative (decoder) transformers use a causal mask?",
        type: "single",
        options: [
          { id: "a", text: "To make training slower on purpose" },
          { id: "b", text: "To stop a token from attending to future tokens it shouldn't see yet" },
          { id: "c", text: "To delete old tokens" },
          { id: "d", text: "To translate between languages" },
        ],
        correct: ["b"],
        explanation:
          "A causal mask lets position i attend only to positions ≤ i, so the model can't 'cheat' by looking ahead while predicting the next token.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "How does self-attention's cost scale with sequence length n?",
        type: "single",
        options: [
          { id: "a", text: "About O(n) (linear)" },
          { id: "b", text: "About O(n²) (quadratic)" },
          { id: "c", text: "It doesn't depend on length" },
          { id: "d", text: "About O(log n)" },
        ],
        correct: ["b"],
        explanation:
          "Every token compares with every token, forming an n×n matrix, so cost grows quadratically — a key reason long context is expensive.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-multi-head-attention",
    conceptId: "multi-head-attention",
    questions: [
      {
        id: "q1",
        prompt: "What is the point of using multiple attention heads?",
        type: "single",
        options: [
          { id: "a", text: "To make the model smaller" },
          { id: "b", text: "So each head can focus on a different kind of relationship at once" },
          { id: "c", text: "To avoid using attention at all" },
          { id: "d", text: "To read one word at a time" },
        ],
        correct: ["b"],
        explanation:
          "Running several heads in parallel lets the model capture multiple relationship types (e.g. subject-verb, pronoun links) simultaneously, then combine them.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How are the specializations of each head decided?",
        type: "single",
        options: [
          { id: "a", text: "Engineers hand-assign each head a job" },
          { id: "b", text: "They emerge automatically during training" },
          { id: "c", text: "They are random and never change" },
          { id: "d", text: "The user sets them at runtime" },
        ],
        correct: ["b"],
        explanation:
          "Head specializations are learned — they emerge from training rather than being hand-coded.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What do Grouped-Query and Multi-Query Attention (GQA/MQA) optimize?",
        type: "single",
        options: [
          { id: "a", text: "They make training data larger" },
          { id: "b", text: "They share keys/values across heads to shrink the KV cache and speed up inference" },
          { id: "c", text: "They remove attention entirely" },
          { id: "d", text: "They add more positional encodings" },
        ],
        correct: ["b"],
        explanation:
          "MQA/GQA share keys and values across heads, reducing KV-cache memory and speeding up inference with little quality loss.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-positional-encoding",
    conceptId: "positional-encoding",
    questions: [
      {
        id: "q1",
        prompt: "Why do transformers need positional encoding?",
        type: "single",
        options: [
          { id: "a", text: "Attention has no built-in sense of word order" },
          { id: "b", text: "To make the vectors longer for no reason" },
          { id: "c", text: "To translate languages" },
          { id: "d", text: "To delete rare words" },
        ],
        correct: ["a"],
        explanation:
          "Attention treats input as an unordered set, so position must be added explicitly — otherwise 'man bites dog' and 'dog bites man' look identical.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is the difference between a token's embedding and its positional encoding?",
        type: "single",
        options: [
          { id: "a", text: "They are the same thing" },
          { id: "b", text: "The embedding encodes what a token means; positional encoding encodes where it is" },
          { id: "c", text: "The embedding encodes position; positional encoding encodes meaning" },
          { id: "d", text: "Neither has anything to do with position" },
        ],
        correct: ["b"],
        explanation:
          "The embedding captures meaning; positional encoding adds the token's position. The two are combined so attention can use both.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "Which positional scheme is the dominant choice in modern LLMs?",
        type: "single",
        options: [
          { id: "a", text: "RoPE (Rotary Position Embedding)" },
          { id: "b", text: "No positional information at all" },
          { id: "c", text: "One-hot word counts" },
          { id: "d", text: "Alphabetical ordering" },
        ],
        correct: ["a"],
        explanation:
          "RoPE encodes relative position inside attention and supports context-length extension, making it the default in modern LLMs.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-kv-cache",
    conceptId: "kv-cache",
    questions: [
      {
        id: "q1",
        prompt: "What does a KV cache store, and why?",
        type: "single",
        options: [
          { id: "a", text: "The final answer, to skip generation" },
          { id: "b", text: "Past tokens' keys and values, so they don't need recomputing each step" },
          { id: "c", text: "The user's password" },
          { id: "d", text: "The training data" },
        ],
        correct: ["b"],
        explanation:
          "During generation, past tokens' keys and values don't change, so caching and reusing them means only the newest token must be computed.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "The KV cache mainly trades off which two resources?",
        type: "single",
        options: [
          { id: "a", text: "Accuracy for creativity" },
          { id: "b", text: "Memory for speed" },
          { id: "c", text: "Training time for data size" },
          { id: "d", text: "Tokens for embeddings" },
        ],
        correct: ["b"],
        explanation:
          "The cache uses extra memory (growing with sequence length) to avoid recomputation, making generation much faster.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "How does the KV cache relate to the context window?",
        type: "single",
        options: [
          { id: "a", text: "They are the same thing" },
          { id: "b", text: "The context window is how many tokens the model can consider; the KV cache makes generating within it fast" },
          { id: "c", text: "The KV cache limits how many tokens exist in the language" },
          { id: "d", text: "The context window stores keys and values" },
        ],
        correct: ["b"],
        explanation:
          "The context window is the capacity; the KV cache is the stored keys/values that speed up generation within that window (and is a big reason large windows are costly to serve).",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-token",
    conceptId: "what-is-token",
    questions: [
      {
        id: "q1",
        prompt: "What is a token in the context of LLMs?",
        type: "single",
        options: [
          { id: "a", text: "A single letter, always" },
          { id: "b", text: "A small chunk of text — often a word or word-piece — that the model reads and predicts" },
          { id: "c", text: "A whole sentence" },
          { id: "d", text: "A password for the API" },
        ],
        correct: ["b"],
        explanation:
          "Models operate on tokens: small chunks that are frequently a short word, a piece of a longer word, or punctuation.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Roughly how many characters is one English token, as a rule of thumb?",
        type: "single",
        options: [
          { id: "a", text: "About 1 character" },
          { id: "b", text: "About 4 characters (≈ ¾ of a word)" },
          { id: "c", text: "About 20 characters" },
          { id: "d", text: "Exactly one word, always" },
        ],
        correct: ["b"],
        explanation:
          "A common rule of thumb is 1 token ≈ 4 characters ≈ ¾ of a word — though it varies by language and content.",
        difficulty: "easy",
      },
      {
        id: "q3",
        prompt: "True or false: only your prompt counts toward token cost, not the model's response.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Both input (prompt) and output (response) tokens are counted — and both consume the context window.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-tokenization",
    conceptId: "tokenization",
    questions: [
      {
        id: "q1",
        prompt: "What does tokenization do?",
        type: "single",
        options: [
          { id: "a", text: "Turns text into tokens using a learned vocabulary" },
          { id: "b", text: "Turns tokens into meaning-vectors" },
          { id: "c", text: "Trains the model" },
          { id: "d", text: "Runs the model's tools" },
        ],
        correct: ["a"],
        explanation:
          "Tokenization splits raw text into discrete tokens (and their IDs) using a learned vocabulary — the step before embedding.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which algorithm is most associated with modern subword tokenization?",
        type: "single",
        options: [
          { id: "a", text: "Byte-Pair Encoding (BPE)" },
          { id: "b", text: "Bubble sort" },
          { id: "c", text: "Gradient descent" },
          { id: "d", text: "Softmax" },
        ],
        correct: ["a"],
        explanation:
          "BPE (and relatives like WordPiece and Unigram/SentencePiece) builds a subword vocabulary by merging frequent character pairs.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "How does tokenization differ from embedding?",
        type: "single",
        options: [
          { id: "a", text: "They are the same step" },
          { id: "b", text: "Tokenization splits text into token IDs; embedding maps each ID to a meaning-vector" },
          { id: "c", text: "Embedding happens before tokenization" },
          { id: "d", text: "Tokenization produces vectors directly" },
        ],
        correct: ["b"],
        explanation:
          "First tokenize (text → token IDs), then embed (each ID → a vector). They are distinct, sequential steps.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-context-window",
    conceptId: "context-window",
    questions: [
      {
        id: "q1",
        prompt: "What is the context window?",
        type: "single",
        options: [
          { id: "a", text: "The model's permanent long-term memory" },
          { id: "b", text: "The maximum number of tokens the model can consider at once for one request" },
          { id: "c", text: "The speed of the model" },
          { id: "d", text: "The size of the training data" },
        ],
        correct: ["b"],
        explanation:
          "The context window is the token budget the model can 'see' in a single request — its short-term working memory.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What counts against the context window?",
        type: "single",
        options: [
          { id: "a", text: "Only the system prompt" },
          { id: "b", text: "Only pasted documents" },
          { id: "c", text: "Everything: instructions, conversation, documents, and the generated response" },
          { id: "d", text: "Nothing — it's unlimited" },
        ],
        correct: ["c"],
        explanation:
          "All input (instructions, history, documents) plus the output being generated share the same token budget.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a larger context window means the model uses every token in it equally well.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Models often show a 'lost in the middle' effect — content at the start and end is used more reliably than material buried in the middle.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-temperature-sampling",
    conceptId: "temperature-sampling",
    questions: [
      {
        id: "q1",
        prompt: "What does a low temperature do?",
        type: "single",
        options: [
          { id: "a", text: "Makes the model pick likely tokens more consistently (focused, repeatable)" },
          { id: "b", text: "Makes the model more random and creative" },
          { id: "c", text: "Makes the model factually smarter" },
          { id: "d", text: "Increases the context window" },
        ],
        correct: ["a"],
        explanation:
          "Low temperature sharpens the probability distribution, so the model almost always picks the most likely tokens — focused and repeatable.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does top-p (nucleus) sampling do?",
        type: "single",
        options: [
          { id: "a", text: "Keeps exactly the top 5 tokens always" },
          { id: "b", text: "Keeps the smallest set of tokens whose probabilities add up to p" },
          { id: "c", text: "Removes all randomness" },
          { id: "d", text: "Doubles the temperature" },
        ],
        correct: ["b"],
        explanation:
          "Top-p keeps the smallest group of top tokens whose combined probability reaches p, adapting the candidate set to the distribution's shape.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: raising temperature makes the model more knowledgeable.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Temperature only affects randomness of token choice, not knowledge. For factual/structured tasks, high temperature usually hurts.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-structured-output",
    conceptId: "structured-output",
    questions: [
      {
        id: "q1",
        prompt: "What is the point of structured output?",
        type: "single",
        options: [
          { id: "a", text: "To make replies more poetic" },
          { id: "b", text: "To return data in a strict, machine-readable format (like JSON) that software can parse reliably" },
          { id: "c", text: "To make the model faster" },
          { id: "d", text: "To increase the context window" },
        ],
        correct: ["b"],
        explanation:
          "Structured output constrains the model to a strict format (often JSON matching a schema) so programs can consume it reliably.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which approach gives the strongest guarantee that output matches your schema?",
        type: "single",
        options: [
          { id: "a", text: "Politely asking for JSON in the prompt" },
          { id: "b", text: "Schema-constrained decoding (restricting tokens to valid ones)" },
          { id: "c", text: "Raising the temperature" },
          { id: "d", text: "Adding more examples only" },
        ],
        correct: ["b"],
        explanation:
          "Schema-constrained (grammar-constrained) decoding restricts generation to tokens that keep the output valid, guaranteeing the shape.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: simply writing 'reply in JSON' always guarantees valid JSON matching your schema.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Without enforced constraints, models may add prose, fences, or invalid JSON. Use constrained modes and validate.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-function-calling",
    conceptId: "function-calling",
    questions: [
      {
        id: "q1",
        prompt: "In function calling, who actually runs the tool/function?",
        type: "single",
        options: [
          { id: "a", text: "The model runs it internally" },
          { id: "b", text: "Your code runs it; the model only requests the call and supplies arguments" },
          { id: "c", text: "The user runs it manually every time" },
          { id: "d", text: "Nobody — it's simulated" },
        ],
        correct: ["b"],
        explanation:
          "The model emits a structured request with arguments; your application executes the real function and returns the result.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How does function calling relate to structured output?",
        type: "single",
        options: [
          { id: "a", text: "They are unrelated" },
          { id: "b", text: "Function calling is structured output aimed at running a tool (the arguments follow a schema)" },
          { id: "c", text: "Structured output requires function calling" },
          { id: "d", text: "Function calling avoids any structure" },
        ],
        correct: ["b"],
        explanation:
          "Function calling uses structured output to produce schema-valid tool arguments — it's structured output pointed at actions.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is a critical safety practice with function calling?",
        type: "single",
        options: [
          { id: "a", text: "Always execute requested actions immediately" },
          { id: "b", text: "Validate arguments, enforce permissions, and confirm destructive actions (treat requests as untrusted)" },
          { id: "c", text: "Give the model direct database admin access" },
          { id: "d", text: "Never return errors to the model" },
        ],
        correct: ["b"],
        explanation:
          "The model's tool requests are untrusted input. Validate arguments, apply permissions, and confirm risky operations before acting.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-prompt-engineering",
    conceptId: "prompt-engineering",
    questions: [
      {
        id: "q1",
        prompt: "What best describes prompt engineering?",
        type: "single",
        options: [
          { id: "a", text: "Secret magic words that unlock hidden abilities" },
          { id: "b", text: "Communicating clearly: specific instructions, context, examples, and desired format" },
          { id: "c", text: "Retraining the model's weights" },
          { id: "d", text: "Increasing the temperature" },
        ],
        correct: ["b"],
        explanation:
          "Prompt engineering is clear communication — goal, context, examples, constraints, and output format — not magic phrases.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is 'few-shot' prompting?",
        type: "single",
        options: [
          { id: "a", text: "Asking the question very quickly" },
          { id: "b", text: "Including a few input→output examples so the model matches the pattern" },
          { id: "c", text: "Using a few different models" },
          { id: "d", text: "Limiting the response to a few tokens" },
        ],
        correct: ["b"],
        explanation:
          "Few-shot prompting provides example pairs in the prompt (in-context learning) so the model imitates the demonstrated pattern.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "When is prompt engineering NOT the right fix?",
        type: "single",
        options: [
          { id: "a", text: "When you need clearer formatting" },
          { id: "b", text: "When the model lacks the needed facts or tools — then add retrieval, tools, or fine-tuning" },
          { id: "c", text: "When you want a specific tone" },
          { id: "d", text: "When you want a shorter answer" },
        ],
        correct: ["b"],
        explanation:
          "If the gap is missing knowledge or capability, better wording won't help — supply data (RAG), tools, or fine-tuning instead.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-are-embeddings",
    conceptId: "what-are-embeddings",
    questions: [
      {
        id: "q1",
        prompt: "What is an embedding?",
        type: "single",
        options: [
          { id: "a", text: "A list of numbers (a vector) that captures the meaning of something" },
          { id: "b", text: "A compressed image file" },
          { id: "c", text: "A keyword index" },
          { id: "d", text: "The model's training data" },
        ],
        correct: ["a"],
        explanation:
          "An embedding is a vector that represents meaning, so similar things get similar vectors and can be compared with math.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why can embedding search match texts that share no words?",
        type: "single",
        options: [
          { id: "a", text: "It secretly translates the text" },
          { id: "b", text: "It compares meaning (vector closeness), not exact spelling" },
          { id: "c", text: "It uses a thesaurus lookup" },
          { id: "d", text: "It doesn't — it needs shared words" },
        ],
        correct: ["b"],
        explanation:
          "Embeddings place similar meanings close together, so 'reset password' and 'recover credentials' match by meaning even with no shared words.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: embeddings from two different models can be compared directly.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Vectors are only comparable within the same model's space. Use one model for both queries and documents.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-similarity-metrics",
    conceptId: "similarity-metrics",
    questions: [
      {
        id: "q1",
        prompt: "What does cosine similarity measure?",
        type: "single",
        options: [
          { id: "a", text: "The direction (angle) between two vectors, ignoring their length" },
          { id: "b", text: "Only the length of the vectors" },
          { id: "c", text: "The number of shared words" },
          { id: "d", text: "The model's confidence" },
        ],
        correct: ["a"],
        explanation:
          "Cosine similarity is the angle between vectors — it ignores magnitude, focusing purely on direction (−1 to 1).",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "For Euclidean distance, which value means 'more similar'?",
        type: "single",
        options: [
          { id: "a", text: "A larger distance" },
          { id: "b", text: "A smaller distance" },
          { id: "c", text: "Exactly 1.0" },
          { id: "d", text: "A negative distance" },
        ],
        correct: ["b"],
        explanation:
          "Euclidean distance is a gap: smaller = closer = more similar. This is the opposite direction from cosine/dot product.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "When vectors are normalized to length 1, cosine similarity and dot product are…",
        type: "single",
        options: [
          { id: "a", text: "Completely unrelated" },
          { id: "b", text: "Equivalent (they rank results the same)" },
          { id: "c", text: "Always opposite" },
          { id: "d", text: "Impossible to compute" },
        ],
        correct: ["b"],
        explanation:
          "On unit-length vectors, dot product equals cosine similarity — which is why databases often use dot product on normalized vectors.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-embedding-models",
    conceptId: "embedding-models",
    questions: [
      {
        id: "q1",
        prompt: "What does the 'dimensions' of an embedding model refer to?",
        type: "single",
        options: [
          { id: "a", text: "How many numbers are in each output vector" },
          { id: "b", text: "How many documents it can store" },
          { id: "c", text: "The screen resolution" },
          { id: "d", text: "The number of languages it speaks" },
        ],
        correct: ["a"],
        explanation:
          "Dimensions = the length of each vector (e.g. 384, 768, 1536). More can capture nuance but cost more storage and compute.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What's the safest way to choose an embedding model?",
        type: "single",
        options: [
          { id: "a", text: "Always pick the one with the most dimensions" },
          { id: "b", text: "Use benchmarks as a shortlist, then test on your own data" },
          { id: "c", text: "Pick whichever is cheapest, always" },
          { id: "d", text: "Use a different model for queries and documents" },
        ],
        correct: ["b"],
        explanation:
          "Leaderboards like MTEB help shortlist, but benchmark rank rarely transfers perfectly — always evaluate on your own content.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you can embed your documents with one model and your queries with another.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Both sides must use the same model, or the vectors live in different spaces and similarity is meaningless.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-dense-vs-sparse",
    conceptId: "dense-vs-sparse-embeddings",
    questions: [
      {
        id: "q1",
        prompt: "What best describes a dense embedding?",
        type: "single",
        options: [
          { id: "a", text: "A long, mostly-zero vector with one slot per vocabulary word" },
          { id: "b", text: "A short vector where every number is meaningful and captures meaning" },
          { id: "c", text: "A list of keywords" },
          { id: "d", text: "A database index" },
        ],
        correct: ["b"],
        explanation:
          "Dense embeddings are compact (e.g. 768 values), with every value meaningful — great for capturing semantic meaning.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What are sparse vectors especially good at?",
        type: "single",
        options: [
          { id: "a", text: "Matching exact terms like names, codes, and identifiers" },
          { id: "b", text: "Understanding synonyms and paraphrases" },
          { id: "c", text: "Generating text" },
          { id: "d", text: "Compressing images" },
        ],
        correct: ["a"],
        explanation:
          "Sparse/keyword representations excel at exact-term precision (e.g. 'iPhone 15', 'error E-4021') where dense models can miss.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What does hybrid search do?",
        type: "single",
        options: [
          { id: "a", text: "Uses only dense embeddings" },
          { id: "b", text: "Combines dense (meaning) and sparse (exact terms) and fuses their scores" },
          { id: "c", text: "Removes the need for embeddings" },
          { id: "d", text: "Only works offline" },
        ],
        correct: ["b"],
        explanation:
          "Hybrid search runs both dense and sparse retrieval and fuses the results, getting semantic recall plus exact-term precision.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-matryoshka-embeddings",
    conceptId: "matryoshka-embeddings",
    questions: [
      {
        id: "q1",
        prompt: "What makes Matryoshka embeddings special?",
        type: "single",
        options: [
          { id: "a", text: "The most important information is packed into the first dimensions, so you can truncate them" },
          { id: "b", text: "They have no dimensions" },
          { id: "c", text: "They can only be used at full length" },
          { id: "d", text: "They are always sparse" },
        ],
        correct: ["a"],
        explanation:
          "MRL training front-loads the important information, so a shortened prefix is still a usable embedding.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why can't you just truncate any ordinary embedding?",
        type: "single",
        options: [
          { id: "a", text: "Ordinary embeddings spread information across all dimensions, so chopping destroys quality" },
          { id: "b", text: "It's illegal" },
          { id: "c", text: "Ordinary embeddings are too short" },
          { id: "d", text: "You actually can, with no downside" },
        ],
        correct: ["a"],
        explanation:
          "Only MRL-trained models concentrate information early. Regular embeddings distribute it, so truncation ruins them.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is a typical benefit of truncating Matryoshka embeddings?",
        type: "single",
        options: [
          { id: "a", text: "Much larger storage use" },
          { id: "b", text: "Big savings in storage and speed with only a small quality drop" },
          { id: "c", text: "Perfect accuracy increase" },
          { id: "d", text: "It retrains the model" },
        ],
        correct: ["b"],
        explanation:
          "Shorter vectors cost less storage/memory and search faster; MRL makes the quality loss small (quality degrades gracefully).",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-what-is-vector-database",
    conceptId: "what-is-vector-database",
    questions: [
      {
        id: "q1",
        prompt: "What is a vector database built to do?",
        type: "single",
        options: [
          { id: "a", text: "Store embeddings and find the most similar ones quickly" },
          { id: "b", text: "Only store exact-match records like a spreadsheet" },
          { id: "c", text: "Train language models" },
          { id: "d", text: "Render web pages" },
        ],
        correct: ["a"],
        explanation:
          "A vector database stores embeddings and returns the nearest (most similar) vectors fast — the memory layer behind semantic search and RAG.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Beyond similarity search, what else does a vector database typically provide?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — only search" },
          { id: "b", text: "Indexing, metadata filtering, updates/deletes, and scaling" },
          { id: "c", text: "Image editing" },
          { id: "d", text: "Model fine-tuning" },
        ],
        correct: ["b"],
        explanation:
          "Vector databases add indexing, filtering, CRUD, persistence, and scaling around the core nearest-neighbor search.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a regular (relational) database is ideal for 'find the 5 most similar in meaning' queries.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Regular databases excel at exact matches, not semantic similarity. Vector databases are purpose-built for nearest-neighbor search.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-vector-search",
    conceptId: "vector-search",
    questions: [
      {
        id: "q1",
        prompt: "What does vector search return?",
        type: "single",
        options: [
          { id: "a", text: "The top-k stored vectors closest to the query vector" },
          { id: "b", text: "A random sample of documents" },
          { id: "c", text: "Only exact keyword matches" },
          { id: "d", text: "The largest vectors" },
        ],
        correct: ["a"],
        explanation:
          "You embed the query and return its nearest neighbors — the top-k most similar stored vectors.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why do large-scale systems use ANN indexes for vector search?",
        type: "single",
        options: [
          { id: "a", text: "Exact search over millions of vectors is too slow" },
          { id: "b", text: "ANN is always 100% accurate" },
          { id: "c", text: "To avoid using embeddings" },
          { id: "d", text: "They don't — they scan everything" },
        ],
        correct: ["a"],
        explanation:
          "Exact search is O(n) per query. ANN indexes trade a little recall for massive speed, enabling low-latency search at scale.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What should the similarity metric used at query time match?",
        type: "single",
        options: [
          { id: "a", text: "Whatever is fastest that day" },
          { id: "b", text: "The metric the embedding model was trained/recommended for" },
          { id: "c", text: "Always Euclidean, regardless of model" },
          { id: "d", text: "The user's screen size" },
        ],
        correct: ["b"],
        explanation:
          "Use the metric the embeddings expect (often cosine). Mismatched metrics between indexing and querying degrade results.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-ann-vs-exact",
    conceptId: "ann-vs-exact",
    questions: [
      {
        id: "q1",
        prompt: "How does exact (brute-force) nearest-neighbor search work?",
        type: "single",
        options: [
          { id: "a", text: "It compares the query with every stored vector" },
          { id: "b", text: "It checks only a random vector" },
          { id: "c", text: "It guesses without comparing" },
          { id: "d", text: "It uses keywords only" },
        ],
        correct: ["a"],
        explanation:
          "Exact search compares against all N vectors — always correct, but its cost grows linearly with N.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does 'recall' measure in approximate search?",
        type: "single",
        options: [
          { id: "a", text: "How fast the query runs" },
          { id: "b", text: "The fraction of true nearest neighbors the approximate search actually finds" },
          { id: "c", text: "How much memory the index uses" },
          { id: "d", text: "The number of vectors stored" },
        ],
        correct: ["b"],
        explanation:
          "Recall is the share of the true nearest neighbors returned. Good ANN hits 95–99%+ recall while being far faster.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is the main trade-off you tune with ANN search?",
        type: "single",
        options: [
          { id: "a", text: "Color vs shape" },
          { id: "b", text: "Recall vs latency (and memory)" },
          { id: "c", text: "Text vs images" },
          { id: "d", text: "Training vs inference" },
        ],
        correct: ["b"],
        explanation:
          "Higher search effort raises recall but adds latency; lower effort is faster but misses more. Measure recall on your data.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-hnsw",
    conceptId: "hnsw",
    questions: [
      {
        id: "q1",
        prompt: "How does HNSW search a query?",
        type: "single",
        options: [
          { id: "a", text: "It scans every vector alphabetically" },
          { id: "b", text: "It starts at sparse top layers (long jumps) and descends to dense bottom layers (fine steps)" },
          { id: "c", text: "It only searches one random point" },
          { id: "d", text: "It sorts by vector length" },
        ],
        correct: ["b"],
        explanation:
          "HNSW is a layered graph: upper layers make big jumps, lower layers refine — coarse-to-fine navigation to the nearest neighbors.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which HNSW parameter trades recall for latency at query time?",
        type: "single",
        options: [
          { id: "a", text: "efSearch" },
          { id: "b", text: "The font size" },
          { id: "c", text: "The embedding dimension" },
          { id: "d", text: "The number of GPUs" },
        ],
        correct: ["a"],
        explanation:
          "efSearch sets the candidate list size at query time: higher = better recall but more latency.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is a key downside of HNSW?",
        type: "single",
        options: [
          { id: "a", text: "It is very slow to search" },
          { id: "b", text: "It is memory-hungry (the graph lives in RAM) and deletions are awkward" },
          { id: "c", text: "It cannot achieve high recall" },
          { id: "d", text: "It only works on images" },
        ],
        correct: ["b"],
        explanation:
          "HNSW gives great recall/latency but uses lots of RAM and handles deletes poorly — often paired with quantization to save memory.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-ivf-and-quantization",
    conceptId: "ivf-and-quantization",
    questions: [
      {
        id: "q1",
        prompt: "What does IVF (inverted file index) do?",
        type: "single",
        options: [
          { id: "a", text: "Clusters vectors so search only scans the few nearest clusters" },
          { id: "b", text: "Compresses each vector to one bit" },
          { id: "c", text: "Removes the need for embeddings" },
          { id: "d", text: "Sorts vectors by date" },
        ],
        correct: ["a"],
        explanation:
          "IVF groups vectors into clusters; at query time you search only the nearest clusters (tuned by nprobe), skipping the rest.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does Product Quantization (PQ) achieve?",
        type: "single",
        options: [
          { id: "a", text: "It makes vectors larger" },
          { id: "b", text: "It compresses vectors into compact codes, saving lots of memory" },
          { id: "c", text: "It guarantees perfect accuracy" },
          { id: "d", text: "It trains the embedding model" },
        ],
        correct: ["b"],
        explanation:
          "PQ splits a vector into sub-vectors and replaces each with a centroid ID, shrinking storage 8–32× for a small accuracy cost.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "After searching a compressed/approximate index, what recovers precision?",
        type: "single",
        options: [
          { id: "a", text: "Re-ranking the shortlist with full-precision vectors" },
          { id: "b", text: "Deleting the index" },
          { id: "c", text: "Lowering nprobe to zero" },
          { id: "d", text: "Using more compression" },
        ],
        correct: ["a"],
        explanation:
          "A common recipe shortlists with the compressed index, then re-ranks the top candidates using full-precision vectors.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-metadata-filtering",
    conceptId: "metadata-filtering",
    questions: [
      {
        id: "q1",
        prompt: "What does metadata filtering add to vector search?",
        type: "single",
        options: [
          { id: "a", text: "Structured rules (tags, dates, permissions) that results must satisfy" },
          { id: "b", text: "More embedding dimensions" },
          { id: "c", text: "A faster GPU" },
          { id: "d", text: "Automatic translation" },
        ],
        correct: ["a"],
        explanation:
          "It restricts similarity search to items matching structured conditions, so results are both relevant and valid.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is the risk of post-filtering with a highly selective filter?",
        type: "single",
        options: [
          { id: "a", text: "It returns too many results" },
          { id: "b", text: "It can return almost nothing, because filtering happens after top-k similarity" },
          { id: "c", text: "It always crashes" },
          { id: "d", text: "It ignores the query" },
        ],
        correct: ["b"],
        explanation:
          "Post-filtering a top-k list can leave very few results when matches are rare — pre-filtering or filtered ANN avoids this.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "Why is metadata filtering often a security requirement?",
        type: "single",
        options: [
          { id: "a", text: "It encrypts the vectors" },
          { id: "b", text: "In multi-tenant apps it scopes results to the right tenant/permissions" },
          { id: "c", text: "It hides the UI" },
          { id: "d", text: "It speeds up training" },
        ],
        correct: ["b"],
        explanation:
          "Filtering on fields like tenantId/permissions ensures users only retrieve data they're allowed to see — a correctness and security boundary.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-hybrid-search",
    conceptId: "hybrid-search",
    questions: [
      {
        id: "q1",
        prompt: "What does hybrid search combine?",
        type: "single",
        options: [
          { id: "a", text: "Dense (semantic) and sparse (keyword) retrieval" },
          { id: "b", text: "Two different LLMs" },
          { id: "c", text: "Training and inference" },
          { id: "d", text: "Images and audio" },
        ],
        correct: ["a"],
        explanation:
          "Hybrid search runs both dense (meaning) and sparse (keyword) retrieval and fuses the rankings for the best of both.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is Reciprocal Rank Fusion (RRF) convenient for combining the two lists?",
        type: "single",
        options: [
          { id: "a", text: "It uses ranks, avoiding the problem that dense and sparse scores are on different scales" },
          { id: "b", text: "It ignores one of the lists" },
          { id: "c", text: "It requires no documents" },
          { id: "d", text: "It only works for images" },
        ],
        correct: ["a"],
        explanation:
          "RRF combines by rank position (score = Σ 1/(k+rank)), so it doesn't require normalizing incompatible dense/sparse scores.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you can just add raw dense and sparse scores together.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Dense and sparse scores live on different scales, so naive addition is meaningless — use RRF or normalize before weighting.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-rag-architecture",
    conceptId: "rag-architecture",
    questions: [
      {
        id: "q1",
        prompt: "What are the two phases of a RAG system?",
        type: "single",
        options: [
          { id: "a", text: "Training and inference" },
          { id: "b", text: "Ingestion (offline) and answering (per query)" },
          { id: "c", text: "Encoding and decoding" },
          { id: "d", text: "Prompting and fine-tuning" },
        ],
        correct: ["b"],
        explanation:
          "RAG has an offline ingestion pipeline (chunk, embed, store) and a per-query answering pipeline (retrieve, rerank, generate).",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why should you evaluate retrieval and generation separately?",
        type: "single",
        options: [
          { id: "a", text: "To know which phase caused a bad answer, so you fix the right thing" },
          { id: "b", text: "It's required by law" },
          { id: "c", text: "To make the system slower" },
          { id: "d", text: "There's no reason to" },
        ],
        correct: ["a"],
        explanation:
          "A bad answer can come from wrong chunks (retrieval) or from ignoring good chunks (generation). Separating them tells you what to fix.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What connects the two phases of RAG?",
        type: "single",
        options: [
          { id: "a", text: "The vector store of embedded chunks" },
          { id: "b", text: "The user's browser" },
          { id: "c", text: "The training dataset" },
          { id: "d", text: "Nothing connects them" },
        ],
        correct: ["a"],
        explanation:
          "Ingestion writes vectors to the store; answering reads from it. The vector store is the seam between the two phases.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-chunking",
    conceptId: "chunking",
    questions: [
      {
        id: "q1",
        prompt: "Why do we chunk documents in RAG?",
        type: "single",
        options: [
          { id: "a", text: "So retrieval can return the exact relevant passage, not the whole document" },
          { id: "b", text: "To train the model" },
          { id: "c", text: "To translate the text" },
          { id: "d", text: "To make documents larger" },
        ],
        correct: ["a"],
        explanation:
          "Chunking splits documents into passages so the system retrieves just the relevant part, improving precision and saving context.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does chunk overlap help with?",
        type: "single",
        options: [
          { id: "a", text: "Preventing ideas from being split awkwardly across chunk boundaries" },
          { id: "b", text: "Making chunks smaller" },
          { id: "c", text: "Removing metadata" },
          { id: "d", text: "Speeding up training" },
        ],
        correct: ["a"],
        explanation:
          "Overlap lets neighboring chunks share some text, so a sentence or idea isn't cut in half at a boundary.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is the trade-off with chunk size?",
        type: "single",
        options: [
          { id: "a", text: "Bigger chunks keep more context but dilute relevance; smaller chunks are precise but can lose context" },
          { id: "b", text: "Bigger is always better" },
          { id: "c", text: "Smaller is always better" },
          { id: "d", text: "Chunk size has no effect" },
        ],
        correct: ["a"],
        explanation:
          "Chunk size balances precision vs. context. The right size depends on your content and model — measure and tune.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-query-transformation",
    conceptId: "query-transformation",
    questions: [
      {
        id: "q1",
        prompt: "What is query transformation?",
        type: "single",
        options: [
          { id: "a", text: "Improving or reframing the user's question before retrieval" },
          { id: "b", text: "Translating the answer" },
          { id: "c", text: "Compressing the vector database" },
          { id: "d", text: "Fine-tuning the model" },
        ],
        correct: ["a"],
        explanation:
          "Query transformation rewrites, expands, or reframes the query before searching so retrieval finds better chunks.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does HyDE do?",
        type: "single",
        options: [
          { id: "a", text: "Writes a hypothetical answer and embeds THAT to search" },
          { id: "b", text: "Deletes the query" },
          { id: "c", text: "Doubles the temperature" },
          { id: "d", text: "Removes stop words only" },
        ],
        correct: ["a"],
        explanation:
          "HyDE generates a hypothetical answer and searches with its embedding, which often matches target documents better than the raw question.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "In multi-turn chat, why rewrite a follow-up like 'what about the annual one?'",
        type: "single",
        options: [
          { id: "a", text: "Because alone it has no meaning — rewriting into a standalone query lets retrieval work" },
          { id: "b", text: "To make it shorter" },
          { id: "c", text: "To hide it from the user" },
          { id: "d", text: "There's no reason to rewrite it" },
        ],
        correct: ["a"],
        explanation:
          "Follow-ups depend on prior context. Rewriting them into standalone queries (using chat history) is needed for retrieval to succeed.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-reranking",
    conceptId: "reranking",
    questions: [
      {
        id: "q1",
        prompt: "What does a reranker do?",
        type: "single",
        options: [
          { id: "a", text: "Re-scores the retrieved shortlist by reading each query-document pair, reordering by relevance" },
          { id: "b", text: "Generates the final answer" },
          { id: "c", text: "Embeds the documents" },
          { id: "d", text: "Splits documents into chunks" },
        ],
        correct: ["a"],
        explanation:
          "A reranker re-scores the shortlist from first-stage retrieval, pushing the truly most relevant chunks to the top.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How does a cross-encoder differ from a bi-encoder?",
        type: "single",
        options: [
          { id: "a", text: "A cross-encoder reads the query and document together (accurate, slow); a bi-encoder embeds them separately (fast)" },
          { id: "b", text: "They are identical" },
          { id: "c", text: "A bi-encoder is always more accurate" },
          { id: "d", text: "A cross-encoder doesn't use the query" },
        ],
        correct: ["a"],
        explanation:
          "Bi-encoders embed separately (fast, used for retrieval); cross-encoders process the pair jointly (accurate, used for reranking).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is the standard two-stage retrieval pattern?",
        type: "single",
        options: [
          { id: "a", text: "Retrieve wide (high recall), then rerank narrow (high precision)" },
          { id: "b", text: "Rerank everything, then retrieve" },
          { id: "c", text: "Skip retrieval entirely" },
          { id: "d", text: "Only ever return one chunk" },
        ],
        correct: ["a"],
        explanation:
          "Retrieve a broad shortlist with the fast bi-encoder, then rerank it with the accurate cross-encoder — recall plus precision.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-contextual-retrieval",
    conceptId: "contextual-retrieval",
    questions: [
      {
        id: "q1",
        prompt: "What does contextual retrieval add to each chunk?",
        type: "single",
        options: [
          { id: "a", text: "A short situating context blurb, added before embedding" },
          { id: "b", text: "More zeros" },
          { id: "c", text: "A translation" },
          { id: "d", text: "A larger font" },
        ],
        correct: ["a"],
        explanation:
          "It prepends a brief context (document/section/topic) to each chunk before embedding, so ambiguous chunks become self-explanatory.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why does this improve retrieval?",
        type: "single",
        options: [
          { id: "a", text: "Ambiguous chunks (e.g. 'the refund window is 30 days') gain the context needed to match the right query" },
          { id: "b", text: "It makes chunks shorter" },
          { id: "c", text: "It retrains the embedding model" },
          { id: "d", text: "It removes the need for a vector database" },
        ],
        correct: ["a"],
        explanation:
          "A chunk that can't stand alone matches the wrong queries. Adding context makes its embedding reflect what it's actually about.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "When is the context blurb typically generated?",
        type: "single",
        options: [
          { id: "a", text: "Once at ingestion time (cost amortized over all future queries)" },
          { id: "b", text: "On every single query" },
          { id: "c", text: "Never — it's manual only" },
          { id: "d", text: "During model training" },
        ],
        correct: ["a"],
        explanation:
          "The blurb is generated once when indexing (often with prompt caching), so the extra cost is paid once, not per query.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-agentic-rag",
    conceptId: "agentic-rag",
    questions: [
      {
        id: "q1",
        prompt: "How does agentic RAG differ from basic RAG?",
        type: "single",
        options: [
          { id: "a", text: "It adds loops and judgment — grading retrieval, retrying, and checking grounding" },
          { id: "b", text: "It removes retrieval entirely" },
          { id: "c", text: "It only works offline" },
          { id: "d", text: "It never uses an LLM" },
        ],
        correct: ["a"],
        explanation:
          "Agentic RAG turns the one-shot pipeline into a self-correcting loop that judges its own retrieval and answers.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which pattern best fits 'answer a question needing several linked lookups'?",
        type: "single",
        options: [
          { id: "a", text: "Multi-hop RAG" },
          { id: "b", text: "Single fixed retrieval" },
          { id: "c", text: "Lowering temperature" },
          { id: "d", text: "Removing the reranker" },
        ],
        correct: ["a"],
        explanation:
          "Multi-hop RAG chains retrievals and reasoning steps to answer questions that require connecting multiple pieces of information.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "What is an important guardrail for agentic RAG?",
        type: "single",
        options: [
          { id: "a", text: "Cap the number of loops to avoid runaway cost/latency" },
          { id: "b", text: "Always loop forever until perfect" },
          { id: "c", text: "Disable logging" },
          { id: "d", text: "Never evaluate it" },
        ],
        correct: ["a"],
        explanation:
          "Self-correcting loops can spiral into many expensive calls — limit iterations and log decisions for observability.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-rag-evaluation",
    conceptId: "rag-evaluation",
    questions: [
      {
        id: "q1",
        prompt: "RAG evaluation splits into which two halves?",
        type: "single",
        options: [
          { id: "a", text: "Retrieval quality and generation quality" },
          { id: "b", text: "Speed and color" },
          { id: "c", text: "Training and inference" },
          { id: "d", text: "Frontend and backend" },
        ],
        correct: ["a"],
        explanation:
          "You measure retrieval (did we fetch the right context?) and generation (did the model use it faithfully?) separately.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What does 'faithfulness' measure?",
        type: "single",
        options: [
          { id: "a", text: "Whether the answer is supported by the retrieved context (no hallucination)" },
          { id: "b", text: "How fast the answer is" },
          { id: "c", text: "The number of chunks retrieved" },
          { id: "d", text: "The model's size" },
        ],
        correct: ["a"],
        explanation:
          "Faithfulness (groundedness) checks that the answer's claims are supported by the retrieved context, not invented.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "A bad answer has high context recall but low faithfulness. What should you fix?",
        type: "single",
        options: [
          { id: "a", text: "The generation side — prompt/grounding — since the right chunks were retrieved but ignored" },
          { id: "b", text: "The retrieval side, since chunks are missing" },
          { id: "c", text: "Buy a bigger GPU" },
          { id: "d", text: "Nothing — it's fine" },
        ],
        correct: ["a"],
        explanation:
          "High recall means the right chunk was retrieved; low faithfulness means the model didn't use it — fix the prompt/grounding.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-rag-vs-fine-tuning",
    conceptId: "rag-vs-fine-tuning",
    questions: [
      {
        id: "q1",
        prompt: "What's the core question when choosing between RAG and fine-tuning?",
        type: "single",
        options: [
          { id: "a", text: "Is the gap knowledge (use RAG) or behavior (use fine-tuning)?" },
          { id: "b", text: "Which is newer?" },
          { id: "c", text: "Which has a nicer name?" },
          { id: "d", text: "Which uses more GPUs?" },
        ],
        correct: ["a"],
        explanation:
          "RAG adds knowledge at answer time; fine-tuning bakes in behavior/skill/format. Diagnose which gap you have.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is fine-tuning a poor choice for fast-changing facts?",
        type: "single",
        options: [
          { id: "a", text: "It bakes knowledge into weights, can't cite sources, and goes stale without retraining" },
          { id: "b", text: "It's always free" },
          { id: "c", text: "It updates instantly" },
          { id: "d", text: "It provides citations automatically" },
        ],
        correct: ["a"],
        explanation:
          "Fine-tuning internalizes behavior, not up-to-date facts. For changing, citable knowledge, RAG is the right tool.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: RAG and fine-tuning are mutually exclusive — you must pick one.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "They're complementary. Strong systems often fine-tune for style/format and use RAG for up-to-date, grounded facts.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-agent",
    conceptId: "what-is-agent",
    questions: [
      {
        id: "q1",
        prompt: "What best defines an AI agent (vs. a plain LLM reply)?",
        type: "single",
        options: [
          { id: "a", text: "A larger, smarter model" },
          { id: "b", text: "An LLM given a goal and tools that decides and takes actions in a loop until done" },
          { id: "c", text: "A model that never uses tools" },
          { id: "d", text: "A database of answers" },
        ],
        correct: ["b"],
        explanation:
          "An agent = LLM (brain) + tools (hands) + a loop + a goal. The power comes from acting and iterating, not from a smarter model.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which is a defining feature of an agent?",
        type: "single",
        options: [
          { id: "a", text: "It answers in exactly one turn" },
          { id: "b", text: "Each turn it chooses the next action — call a tool or finish" },
          { id: "c", text: "It cannot access external data" },
          { id: "d", text: "It requires no stopping condition" },
        ],
        correct: ["b"],
        explanation:
          "Autonomy over the next step is the defining feature: the model decides whether to act (tool call) or finish.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: agents should always be used instead of simple prompts or fixed workflows.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Use the simplest thing that works. Agents shine on open-ended, multi-step tasks; simple prompts or workflows are cheaper and more reliable otherwise.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-agent-vs-chatbot-vs-workflow",
    conceptId: "agent-vs-chatbot-vs-workflow",
    questions: [
      {
        id: "q1",
        prompt: "What most distinguishes an agent from a workflow?",
        type: "single",
        options: [
          { id: "a", text: "Who decides the control flow: the developer (workflow) or the model (agent)" },
          { id: "b", text: "Agents can't use tools" },
          { id: "c", text: "Workflows are always more expensive" },
          { id: "d", text: "Chatbots are a kind of workflow" },
        ],
        correct: ["a"],
        explanation:
          "A workflow follows steps fixed in advance; an agent decides its own next step. The difference is who controls the flow.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "You have a task whose steps are always the same. What should you build?",
        type: "single",
        options: [
          { id: "a", text: "An autonomous agent" },
          { id: "b", text: "A fixed workflow — cheaper and predictable" },
          { id: "c", text: "A multi-agent system" },
          { id: "d", text: "Nothing is possible" },
        ],
        correct: ["b"],
        explanation:
          "If you know the exact steps in advance, a workflow is more predictable, faster, and cheaper than an agent.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: any chatbot that uses a tool is an agent.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "The test is whether it decides its own multi-step process. A single tool-using reply isn't necessarily agentic.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-agent-loop",
    conceptId: "agent-loop",
    questions: [
      {
        id: "q1",
        prompt: "What are the stages of the agent loop?",
        type: "single",
        options: [
          { id: "a", text: "Observe → Reason → Plan → Act, repeating" },
          { id: "b", text: "Train → Test → Deploy" },
          { id: "c", text: "Encode → Decode → Stop" },
          { id: "d", text: "Ask → Answer, once" },
        ],
        correct: ["a"],
        explanation:
          "The loop cycles observe → reason → plan → act, feeding each new result back in until the goal is met.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why must an agent loop have a stopping condition?",
        type: "single",
        options: [
          { id: "a", text: "To make the model smarter" },
          { id: "b", text: "To prevent infinite/runaway loops that waste time and money" },
          { id: "c", text: "It doesn't need one" },
          { id: "d", text: "To disable tools" },
        ],
        correct: ["b"],
        explanation:
          "Each iteration is an LLM call. Without a goal check, max steps, or budget, an agent can loop expensively forever.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: feeding tool errors back into the loop helps the agent recover.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Returning errors as observations lets the agent reason about the failure and try a different action.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-react",
    conceptId: "react",
    questions: [
      {
        id: "q1",
        prompt: "What does ReAct stand for and interleave?",
        type: "single",
        options: [
          { id: "a", text: "Reason + Act — interleaving Thought, Action, and Observation" },
          { id: "b", text: "Retrieve + Act — retrieval only" },
          { id: "c", text: "Recall + Activate — memory only" },
          { id: "d", text: "Rewrite + Actualize" },
        ],
        correct: ["a"],
        explanation:
          "ReAct = Reason + Act: a loop of Thought (reasoning) → Action (tool call) → Observation (result), until an answer.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why does interleaving reasoning with actions reduce hallucination?",
        type: "single",
        options: [
          { id: "a", text: "It makes the model larger" },
          { id: "b", text: "Actions ground each step in real tool results instead of guesses" },
          { id: "c", text: "It removes the need for tools" },
          { id: "d", text: "It disables reasoning" },
        ],
        correct: ["b"],
        explanation:
          "Each Action fetches real information; reasoning then reacts to actual observations rather than inventing facts.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: in ReAct, a fact the model can't be sure of should trigger an Action, not a guess.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "External or time-sensitive facts should be looked up via an Action rather than guessed in a Thought.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-tool-selection",
    conceptId: "tool-selection",
    questions: [
      {
        id: "q1",
        prompt: "How does an agent decide which tool to use?",
        type: "single",
        options: [
          { id: "a", text: "Randomly" },
          { id: "b", text: "By matching the task to each tool's name and description" },
          { id: "c", text: "It always uses the first tool" },
          { id: "d", text: "By the tool's file size" },
        ],
        correct: ["b"],
        explanation:
          "The model chooses from tool names and descriptions, so clear, distinct descriptions are essential.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "An agent keeps calling the wrong tool. What's the most likely fix?",
        type: "single",
        options: [
          { id: "a", text: "Use a bigger model only" },
          { id: "b", text: "Clarify the tool names and descriptions (and reduce overlap)" },
          { id: "c", text: "Add more similar tools" },
          { id: "d", text: "Remove all descriptions" },
        ],
        correct: ["b"],
        explanation:
          "Wrong tool choices are usually a design problem — clearer, non-overlapping names/descriptions fix them.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: with very many tools, retrieving the top-k relevant ones per query helps selection.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Tool retrieval (RAG over tools) keeps the choice space small and relevant instead of listing everything.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-agent-memory",
    conceptId: "agent-memory",
    questions: [
      {
        id: "q1",
        prompt: "Which describes the three memory types an agent uses?",
        type: "single",
        options: [
          { id: "a", text: "Short-term (context window), long-term (external store, retrieved), and state (task progress)" },
          { id: "b", text: "RAM, ROM, and cache only" },
          { id: "c", text: "Only the context window" },
          { id: "d", text: "Only a vector database" },
        ],
        correct: ["a"],
        explanation:
          "Short-term = what's in context now; long-term = external facts retrieved when relevant; state = plan/progress.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why must long-running agents actively manage memory?",
        type: "single",
        options: [
          { id: "a", text: "The model remembers everything automatically" },
          { id: "b", text: "The model forgets between calls, and the context window is limited and costly" },
          { id: "c", text: "Memory is free and infinite" },
          { id: "d", text: "Tools store all memory for you" },
        ],
        correct: ["b"],
        explanation:
          "Anything not placed back in context is gone, and context is finite/expensive — so you summarize, store, and retrieve.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: long-term agent memory is often implemented with embeddings and vector search.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Facts are embedded and stored, then semantically retrieved when relevant — RAG-style long-term memory.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-planning-reflection",
    conceptId: "planning-reflection",
    questions: [
      {
        id: "q1",
        prompt: "What do planning and reflection add to an agent?",
        type: "single",
        options: [
          { id: "a", text: "Planning decomposes the goal into steps; reflection critiques and fixes the agent's own work" },
          { id: "b", text: "They remove the need for tools" },
          { id: "c", text: "They make the model smaller" },
          { id: "d", text: "They disable the loop" },
        ],
        correct: ["a"],
        explanation:
          "Planning structures the work before acting; reflection reviews results to catch and repair mistakes.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What makes reflection most reliable?",
        type: "single",
        options: [
          { id: "a", text: "Pure self-judgment with no external check" },
          { id: "b", text: "A grounded signal like tests, tool errors, a rubric, or a separate critic" },
          { id: "c", text: "Skipping verification" },
          { id: "d", text: "Always trusting the first output" },
        ],
        correct: ["b"],
        explanation:
          "Models are unreliable self-critics; grounding reflection in real signals makes the feedback trustworthy.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: planning and reflection are worth the extra cost on every task.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "They add LLM calls (tokens, latency). Use them on hard, high-stakes, long-horizon tasks — not simple ones.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-human-in-the-loop",
    conceptId: "human-in-the-loop",
    questions: [
      {
        id: "q1",
        prompt: "What is human-in-the-loop for agents?",
        type: "single",
        options: [
          { id: "a", text: "A person approves/edits/rejects risky or irreversible actions before the agent proceeds" },
          { id: "b", text: "Replacing the agent entirely with a human" },
          { id: "c", text: "Letting the agent do anything with no oversight" },
          { id: "d", text: "A type of tool" },
        ],
        correct: ["a"],
        explanation:
          "HITL inserts human approval at high-stakes checkpoints while the agent handles the routine work.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How should you decide which actions need approval?",
        type: "single",
        options: [
          { id: "a", text: "Approve everything" },
          { id: "b", text: "Gate by risk and reversibility — irreversible/costly/sensitive actions need approval" },
          { id: "c", text: "Never approve anything" },
          { id: "d", text: "Randomly" },
        ],
        correct: ["b"],
        explanation:
          "Too many approvals kills value and causes rubber-stamping; gate only genuinely risky/irreversible actions.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: HITL requires the agent's execution to be pausable and resumable.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "The loop must checkpoint state, wait for the human's decision, and then resume — interruptible execution.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-multi-agent-systems",
    conceptId: "multi-agent-systems",
    questions: [
      {
        id: "q1",
        prompt: "What is the most common multi-agent coordination pattern?",
        type: "single",
        options: [
          { id: "a", text: "A supervisor/orchestrator that delegates sub-tasks to specialist agents and combines results" },
          { id: "b", text: "One agent doing everything alone" },
          { id: "c", text: "No coordination at all" },
          { id: "d", text: "Agents that never communicate" },
        ],
        correct: ["a"],
        explanation:
          "The supervisor pattern coordinates specialists; other patterns include pipeline, parallel, and debate.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When are multi-agent systems most worthwhile?",
        type: "single",
        options: [
          { id: "a", text: "Always, by default" },
          { id: "b", text: "For separable, parallelizable sub-problems (e.g., research) or where context isolation helps" },
          { id: "c", text: "For the simplest possible tasks" },
          { id: "d", text: "Only when you have one tool" },
        ],
        correct: ["b"],
        explanation:
          "They shine on parallelizable, separable work; for tightly-coupled tasks a single agent is cheaper and easier.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: multi-agent systems add cost, latency, and coordination failure modes.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "More agents means more LLM calls and more ways to miscommunicate — prefer a single agent until you clearly need more.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-mcp",
    conceptId: "what-is-mcp",
    questions: [
      {
        id: "q1",
        prompt: "What is MCP, in one line?",
        type: "single",
        options: [
          { id: "a", text: "A smarter language model" },
          { id: "b", text: "An open protocol so AI hosts can use tools, resources, and prompts from external servers" },
          { id: "c", text: "The agent loop of observe → reason → plan → act" },
          { id: "d", text: "A vector database" },
        ],
        correct: ["b"],
        explanation:
          "MCP is USB-C for AI apps: a shared client-server language. It is not a model and not an agent.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How does MCP relate to function calling?",
        type: "single",
        options: [
          { id: "a", text: "They are the same thing" },
          { id: "b", text: "MCP replaces function calling" },
          { id: "c", text: "Function calling is how the model asks; MCP is how the app finds and runs tools from many systems" },
          { id: "d", text: "MCP runs inside the model's weights" },
        ],
        correct: ["c"],
        explanation:
          "The model still emits a structured tool request. MCP standardizes discovery, invocation, and identity across hosts and vendors.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: the three MCP roles are host, client, and server.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "The host is the app; clients live inside it (one per server); servers expose capabilities for one system.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-why-mcp-exists",
    conceptId: "why-mcp-exists",
    questions: [
      {
        id: "q1",
        prompt: "What problem does MCP exist to solve?",
        type: "single",
        options: [
          { id: "a", text: "Making models larger" },
          { id: "b", text: "The N×M connector explosion — every app rebuilding the same integrations" },
          { id: "c", text: "Training data copyright" },
          { id: "d", text: "GPU shortages" },
        ],
        correct: ["b"],
        explanation:
          "Without a protocol, 4 apps × 4 systems = 16 custom connectors. MCP turns that into N + M.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Who should typically maintain a GitHub MCP server?",
        type: "single",
        options: [
          { id: "a", text: "Every AI app vendor, separately" },
          { id: "b", text: "The system vendor (or a shared community server) — write once, many hosts" },
          { id: "c", text: "The language model itself" },
          { id: "d", text: "No one; MCP servers are generated automatically from weights" },
        ],
        correct: ["b"],
        explanation:
          "A protocol lets the system owner maintain one connector instead of every host re-implementing the API.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: function calling already solved cross-app interoperability for tools.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Function calling is per-app. It does not give any host a standard way to discover any vendor's tools with shared auth.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-mcp-architecture",
    conceptId: "mcp-architecture",
    questions: [
      {
        id: "q1",
        prompt: "What are the two main MCP transports?",
        type: "single",
        options: [
          { id: "a", text: "gRPC and WebSockets" },
          { id: "b", text: "stdio (local) and Streamable HTTP (remote)" },
          { id: "c", text: "SMTP and FTP" },
          { id: "d", text: "Only Bluetooth" },
        ],
        correct: ["b"],
        explanation:
          "Local servers use stdio (subprocess). Remote servers use Streamable HTTP. Legacy HTTP+SSE is deprecated.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What did the 2026-07-28 spec change about remote MCP?",
        type: "single",
        options: [
          { id: "a", text: "It added a mandatory initialize handshake" },
          { id: "b", text: "It made the protocol core stateless — no session id; each request is self-describing" },
          { id: "c", text: "It removed JSON-RPC" },
          { id: "d", text: "It required OAuth on stdio servers" },
        ],
        correct: ["b"],
        explanation:
          "Handshake and Mcp-Session-Id went away. Version, client info, and capabilities travel in _meta so any replica can serve any request.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if your app needs state across calls, you should hide it in a transport session.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Mint an explicit handle and pass it as a tool argument so the model can thread it. Don't hide state in the transport.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-mcp-primitives",
    conceptId: "mcp-primitives",
    questions: [
      {
        id: "q1",
        prompt: "Which MCP primitive has side effects?",
        type: "single",
        options: [
          { id: "a", text: "Resources" },
          { id: "b", text: "Prompts" },
          { id: "c", text: "Tools" },
          { id: "d", text: "None of them" },
        ],
        correct: ["c"],
        explanation:
          "Tools act (create, delete, query). Resources are read into context. Prompts are reusable recipes.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When should a schema or file usually be a resource instead of a tool?",
        type: "single",
        options: [
          { id: "a", text: "Never — everything should be a tool" },
          { id: "b", text: "When you want read-only context without granting an action" },
          { id: "c", text: "Only if it mutates the database" },
          { id: "d", text: "When you need OAuth" },
        ],
        correct: ["b"],
        explanation:
          "Resources add context without side effects. Turning every read into a tool trains models to 'act' when they only needed information.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: MCP prompts are where you should put delete/send/pay actions.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Prompts fill the conversation with a starting recipe. Side effects belong in tools (often with human confirmation).",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-mcp-auth",
    conceptId: "mcp-auth",
    questions: [
      {
        id: "q1",
        prompt: "How should a remote (HTTP) MCP server authenticate callers?",
        type: "single",
        options: [
          { id: "a", text: "OAuth 2.1 with PKCE and tokens bound to that server's audience" },
          { id: "b", text: "OAuth on stdio only" },
          { id: "c", text: "No auth — MCP is local only" },
          { id: "d", text: "Share one API key in the URL" },
        ],
        correct: ["a"],
        explanation:
          "Remote servers are OAuth resource servers. Tokens must be audience-bound so a token for A fails on B.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is token passthrough, and is it allowed?",
        type: "single",
        options: [
          { id: "a", text: "Forwarding the client's token to an upstream API — forbidden" },
          { id: "b", text: "Refreshing a token — required" },
          { id: "c", text: "Putting the token in _meta — recommended" },
          { id: "d", text: "Using env vars on stdio — forbidden" },
        ],
        correct: ["a"],
        explanation:
          "The server must not pass through the inbound token. Upstream APIs get a separate token minted for them.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: local stdio MCP servers should use OAuth 2.1.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "stdio servers are launched by the host; credentials belong in the environment. OAuth is for remote HTTP.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-building-mcp-server",
    conceptId: "building-mcp-server",
    questions: [
      {
        id: "q1",
        prompt: "What should you focus on when building an MCP server?",
        type: "single",
        options: [
          { id: "a", text: "Reimplementing JSON-RPC by hand and hiding state in sessions" },
          { id: "b", text: "A small, clear catalog for one system, an official SDK, least privilege, and a stateless wire protocol" },
          { id: "c", text: "Exposing the entire company as one tool named do_all" },
          { id: "d", text: "Making the server also be the agent loop" },
        ],
        correct: ["b"],
        explanation:
          "SDKs handle the protocol. Your job is a sharp schema, safety, and stateless HTTP with explicit handles if you need continuity.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "If a tool needs a human confirmation mid-call, what should the server do (2026 spec)?",
        type: "single",
        options: [
          { id: "a", text: "Hold an open bidirectional stream forever" },
          { id: "b", text: "Return resultType input_required (MRTR) and let the client retry with answers" },
          { id: "c", text: "Email the developer" },
          { id: "d", text: "Skip confirmation always" },
        ],
        correct: ["b"],
        explanation:
          "Multi Round-Trip Requests replaced always-open streams for elicitation on a stateless core.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: tool descriptions are the docs the model reads — vague names cause wrong calls.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Models select tools from name + description. Fewer, sharper tools beat a junk drawer of overlapping ones.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-consuming-mcp-server",
    conceptId: "consuming-mcp-server",
    questions: [
      {
        id: "q1",
        prompt: "When your app consumes MCP, who executes tools/call?",
        type: "single",
        options: [
          { id: "a", text: "The model, by speaking JSON-RPC" },
          { id: "b", text: "The host's client, after policy checks — the model only requested the tool" },
          { id: "c", text: "The GPU" },
          { id: "d", text: "Nobody; MCP is read-only" },
        ],
        correct: ["b"],
        explanation:
          "Same as function calling: the model asks, the host runs. The host owns allow-lists, HITL, and logging.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why namespace tool names when connecting several servers?",
        type: "single",
        options: [
          { id: "a", text: "JSON-RPC forbids duplicate strings in the universe" },
          { id: "b", text: "Different servers can expose the same name (create_issue) — the host must disambiguate" },
          { id: "c", text: "It makes OAuth faster" },
          { id: "d", text: "Namespaces are required by stdio" },
        ],
        correct: ["b"],
        explanation:
          "linear.create_issue vs jira.create_issue prevents collisions and helps the model pick the right system.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should dump every connected server's tools into the model context.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Giant catalogs hurt selection, cost, and safety. Allow-list and retrieve the relevant tools.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-mcp-and-agents",
    conceptId: "mcp-and-agents",
    questions: [
      {
        id: "q1",
        prompt: "In an agent that uses MCP, what stays in the host vs the server?",
        type: "single",
        options: [
          { id: "a", text: "The agent loop (when to call/stop) stays in the host; the server exposes capabilities" },
          { id: "b", text: "MCP replaces the agent loop" },
          { id: "c", text: "Servers plan multi-step tasks for the host" },
          { id: "d", text: "IDEs cannot be MCP hosts" },
        ],
        correct: ["a"],
        explanation:
          "MCP is the catalog of hands. Planning, memory, and stopping conditions remain host/agent concerns.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Can a product like Linear be both an MCP host and an MCP server?",
        type: "single",
        options: [
          { id: "a", text: "No, a process can only be one role" },
          { id: "b", text: "Yes — in-app assistants make it a host; publishing tools for Cursor makes it a server" },
          { id: "c", text: "Only if it uses stdio" },
          { id: "d", text: "Only deprecated servers can do that" },
        ],
        correct: ["b"],
        explanation:
          "Role is per connection. Products often implement both sides of the ecosystem.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should usually hide a whole second agent behind a single MCP tool.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Nested agents behind one tools/call are hard to authorize, debug, and evaluate. Prefer the host's loop.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-mcp-security",
    conceptId: "mcp-security",
    questions: [
      {
        id: "q1",
        prompt: "What is tool poisoning?",
        type: "single",
        options: [
          { id: "a", text: "A slow network" },
          { id: "b", text: "Malicious instructions hidden in a tool description or schema that the model reads and the user often doesn't" },
          { id: "c", text: "Using too many tokens" },
          { id: "d", text: "A deprecated transport" },
        ],
        correct: ["b"],
        explanation:
          "Models treat catalog text as trusted. Review full schemas before enabling a server; isolate sensitive tools.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which set is the core remote-MCP identity hardening?",
        type: "single",
        options: [
          { id: "a", text: "Audience-bound tokens, no passthrough, PKCE, exact redirect URIs, per-client consent" },
          { id: "b", text: "Disable TLS" },
          { id: "c", text: "Share one token across all servers" },
          { id: "d", text: "Trust marketplace one-liners" },
        ],
        correct: ["a"],
        explanation:
          "These stop confused-deputy and replay-across-servers failures. Gateways should also authorize on Mcp-Method / Mcp-Name.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: local stdio MCP is automatically safe because it isn't on the internet.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "stdio servers often have more access to the user's machine. Sandbox, allow-list, and review schemas anyway.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-prompt-vs-context",
    conceptId: "prompt-engineering-vs-context-engineering",
    questions: [
      {
        id: "q1",
        prompt: "What is the difference between prompt engineering and context engineering?",
        type: "single",
        options: [
          { id: "a", text: "They are two names for rewriting a sentence" },
          { id: "b", text: "Prompt engineering writes the instruction; context engineering designs the full payload the model sees each call" },
          { id: "c", text: "Context engineering only means a bigger context window" },
          { id: "d", text: "Prompt engineering replaced context engineering in 2026" },
        ],
        correct: ["b"],
        explanation:
          "Wording still matters. For agents and RAG, what you pack — retrieval, tools, memory, history, budget — matters more.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When should you reach for context engineering rather than only a better prompt?",
        type: "single",
        options: [
          { id: "a", text: "Only when fine-tuning" },
          { id: "b", text: "As soon as retrieval, tools, memory, or multiple steps enter the picture" },
          { id: "c", text: "Never; prompts always suffice" },
          { id: "d", text: "Only for image models" },
        ],
        correct: ["b"],
        explanation:
          "One-shot tasks can stay prompt-first. Anything with state or external data is a packing problem.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: RAG is the same thing as context engineering.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "RAG is one select tactic. Context engineering also covers write, compress, isolate, order, and budget.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-context-selection",
    conceptId: "context-selection",
    questions: [
      {
        id: "q1",
        prompt: "How should you treat the context window?",
        type: "single",
        options: [
          { id: "a", text: "As a warehouse to fill to the advertised maximum" },
          { id: "b", text: "As a budget: keep the question and instructions, select the rest, drop noise first" },
          { id: "c", text: "As infinite memory" },
          { id: "d", text: "As only the system prompt" },
        ],
        correct: ["b"],
        explanation:
          "Extra tokens compete for attention and money. Pack a working set, not the closet.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What should be first to cut when you overflow?",
        type: "single",
        options: [
          { id: "a", text: "The current user question" },
          { id: "b", text: "Old history and bulky tool/retrieval dumps" },
          { id: "c", text: "The output format instructions" },
          { id: "d", text: "Nothing — buy a million-token model instead" },
        ],
        correct: ["b"],
        explanation:
          "Must-keep: question + live instructions. History and raw dumps compress or drop first.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: dumping every MCP tool into every call is good because the model has more options.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Giant catalogs hurt selection and quality. Retrieve a shortlist of tools, like you rerank documents.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-context-compression",
    conceptId: "context-compression",
    questions: [
      {
        id: "q1",
        prompt: "What is the safest first compression move?",
        type: "single",
        options: [
          { id: "a", text: "Rewrite the entire chat in flowing prose" },
          { id: "b", text: "Trim bulky tool outputs; keep pointers (file:line, ids)" },
          { id: "c", text: "Delete the user question" },
          { id: "d", text: "Disable tools" },
        ],
        correct: ["b"],
        explanation:
          "Deletion of dumps hallucinates less than rewriting. Then compact old turns into structured state.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When should you compact?",
        type: "single",
        options: [
          { id: "a", text: "Whenever it feels long" },
          { id: "b", text: "On a numeric trigger — token %, turn count, or huge tool results" },
          { id: "c", text: "After every token" },
          { id: "d", text: "Never; long context makes it unnecessary" },
        ],
        correct: ["b"],
        explanation:
          "Pick a threshold. Too early loses evidence; too late you've already paid for landfill context.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: free-form 'summarize the conversation' is enough for production agents.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Unstructured summaries drift and invent facts. Use a schema: goal, done, open, constraints, pointers.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-context-caching",
    conceptId: "context-caching",
    questions: [
      {
        id: "q1",
        prompt: "What does prompt caching reuse?",
        type: "single",
        options: [
          { id: "a", text: "The model's final answer from last week" },
          { id: "b", text: "The KV prefill of a token-identical prefix across requests" },
          { id: "c", text: "Your vector database" },
          { id: "d", text: "GPU weights" },
        ],
        correct: ["b"],
        explanation:
          "It's stored attention K/V for the prefix so you skip recomputing tools and instructions each turn.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why does a timestamp at the start of the system prompt wreck caching?",
        type: "single",
        options: [
          { id: "a", text: "Models cannot read dates" },
          { id: "b", text: "Caching is exact prefix match — a changed byte at the front invalidates everything after" },
          { id: "c", text: "Timestamps are illegal in JSON" },
          { id: "d", text: "It only affects output tokens" },
        ],
        correct: ["b"],
        explanation:
          "Stable tools and instructions first; anything that changes (clocks, shuffled RAG) last.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: prompt caching is the same as the KV cache used while generating tokens inside one response.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Within-request KV cache speeds decoding. Prompt caching reuses prefill across HTTP calls.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-long-context",
    conceptId: "long-context-strategies",
    questions: [
      {
        id: "q1",
        prompt: "What is lost-in-the-middle?",
        type: "single",
        options: [
          { id: "a", text: "Models forget how to tokenize" },
          { id: "b", text: "Facts buried in the middle of a long input are used worse than facts at the start or end" },
          { id: "c", text: "The GPU overheats" },
          { id: "d", text: "RAG cannot retrieve" },
        ],
        correct: ["b"],
        explanation:
          "Liu et al. showed U-shaped use of long context. Place what matters at the edges, or retrieve less.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A 1M-token window means you should paste the company drive. What's wrong?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — advertised length equals quality" },
          { id: "b", text: "Cost, latency, and attention dilution; retrieval plus a working set usually wins" },
          { id: "c", text: "Windows cannot hold files" },
          { id: "d", text: "Only images fail" },
        ],
        correct: ["b"],
        explanation:
          "Long context is capacity. Selection is still the strategy. Needle-in-haystack scores aren't your product eval.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a long window is a good safety margin for a known-relevant document that must stay whole.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "That's the honest use: one spec or file that chunking would shred — not a substitute for RAG.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-context-state",
    conceptId: "context-state",
    questions: [
      {
        id: "q1",
        prompt: "What are the four context-engineering moves for managing state?",
        type: "single",
        options: [
          { id: "a", text: "Train, test, deploy, monitor" },
          { id: "b", text: "Write, select, compress, isolate" },
          { id: "c", text: "Encode, decode, embed, rank" },
          { id: "d", text: "Prompt, retry, fine-tune, quit" },
        ],
        correct: ["b"],
        explanation:
          "Write state out of the window, select the next slice in, compress when full, isolate sub-tasks in their own windows.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why shouldn't the raw chat log be the only source of truth?",
        type: "single",
        options: [
          { id: "a", text: "Logs are always encrypted" },
          { id: "b", text: "Transcripts rot, get compacted, and contradict themselves — promote decisions into structured state" },
          { id: "c", text: "Models cannot read logs" },
          { id: "d", text: "Chat logs cannot contain tokens" },
        ],
        correct: ["b"],
        explanation:
          "State is inspectable progress: goals, decisions, ids. Pass those, not the whole diary.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: isolate means you should always use a multi-agent swarm.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Isolate is a window tactic for a sub-task that would pollute the parent. A checklist in one agent is often enough.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-short-term-memory",
    conceptId: "short-term-memory",
    questions: [
      {
        id: "q1",
        prompt: "What are the two layers of short-term memory?",
        type: "single",
        options: [
          { id: "a", text: "The session log you store, and the smaller working set in the context window" },
          { id: "b", text: "Fine-tuning and RAG" },
          { id: "c", text: "RAM and GPU only" },
          { id: "d", text: "User memory and legal memory" },
        ],
        correct: ["a"],
        explanation:
          "The log can hold the whole thread. The model only sees what you pack into the window this call.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A fact from turn 2 is missing in turn 40. The session DB still has it. What failed?",
        type: "single",
        options: [
          { id: "a", text: "The model's weights forgot" },
          { id: "b", text: "Working-set selection — it wasn't put back into context (or state)" },
          { id: "c", text: "Embeddings cannot store numbers" },
          { id: "d", text: "MCP deleted it" },
        ],
        correct: ["b"],
        explanation:
          "Storage without packing is a log the model cannot see. Pin, summarize, or copy into state.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: saving the chat means the model remembers it on the next call automatically.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Nothing is remembered unless it is resubmitted in the working set (or retrieved as long-term memory).",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-long-term-memory",
    conceptId: "long-term-memory",
    questions: [
      {
        id: "q1",
        prompt: "Where does long-term memory actually live?",
        type: "single",
        options: [
          { id: "a", text: "In the model weights after each chat" },
          { id: "b", text: "In an external store you write to and retrieve from across sessions" },
          { id: "c", text: "Only in the current context window" },
          { id: "d", text: "In the GPU cache forever" },
        ],
        correct: ["b"],
        explanation:
          "The net forgets when the window is gone. Persistence is your database, not training.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How is long-term memory different from RAG over a handbook?",
        type: "single",
        options: [
          { id: "a", text: "There is no difference" },
          { id: "b", text: "The corpus is extracted memories (often per user), not your official docs" },
          { id: "c", text: "Memory cannot use embeddings" },
          { id: "d", text: "RAG never retrieves" },
        ],
        correct: ["b"],
        explanation:
          "Same retrieval shape; different corpus and write policy. Don't embed raw chats as if they were facts.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: fine-tuning is the right way to remember Ada is vegetarian.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Per-user facts belong in a store. Fine-tuning is slow, shared across users, and bad for changing facts.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-memory-types",
    conceptId: "memory-types",
    questions: [
      {
        id: "q1",
        prompt: "Match the types: facts, events, skills.",
        type: "single",
        options: [
          { id: "a", text: "Semantic = facts, episodic = events, procedural = skills" },
          { id: "b", text: "Semantic = events, episodic = skills, procedural = facts" },
          { id: "c", text: "They are three names for the context window" },
          { id: "d", text: "Procedural memory is only for robots with motors" },
        ],
        correct: ["a"],
        explanation:
          "That's the CoALA / cognitive split used by modern agent memory stacks.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is it a bug to treat the transcript as semantic knowledge?",
        type: "single",
        options: [
          { id: "a", text: "Transcripts cannot be stored" },
          { id: "b", text: "You retrieve noisy, redundant, contradictory chat instead of a distilled fact" },
          { id: "c", text: "Events cannot have timestamps" },
          { id: "d", text: "Skills must live in the window" },
        ],
        correct: ["b"],
        explanation:
          "Extract facts out of episodes. Forget with TTL on events, supersede on facts, version on skills.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: episodic memories should usually live forever like semantic facts.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Episodes need TTL or archives. Semantic facts persist until superseded. Procedural memory is versioned.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-user-vs-agent-memory",
    conceptId: "user-vs-agent-memory",
    questions: [
      {
        id: "q1",
        prompt: "What belongs in user memory vs agent memory?",
        type: "single",
        options: [
          { id: "a", text: "User: Ada's diet and timezone. Agent: playbooks and this run's todos" },
          { id: "b", text: "They must share one index" },
          { id: "c", text: "User memory is only passwords" },
          { id: "d", text: "Agent memory is Ada's medical history" },
        ],
        correct: ["a"],
        explanation:
          "Personal data is user-scoped and erasable. Operational knowledge can be shared across users.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why filter every retrieve by user_id for user memory?",
        type: "single",
        options: [
          { id: "a", text: "It makes embeddings faster" },
          { id: "b", text: "Without it, one person's data can appear in another person's prompt — a leak" },
          { id: "c", text: "SQL forbids unfiltered queries" },
          { id: "d", text: "Models cannot read metadata" },
        ],
        correct: ["b"],
        explanation:
          "Metadata filters are a security control, not a recall tweak.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: users should be able to see and delete their stored facts.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Silent profile memory destroys trust and collides with access/erasure rights.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-memory-storage",
    conceptId: "memory-storage",
    questions: [
      {
        id: "q1",
        prompt: "What is the memory pipeline?",
        type: "single",
        options: [
          { id: "a", text: "Extract structured writes → store by type → retrieve a small filtered set → forget on purpose" },
          { id: "b", text: "Embed every chat forever and hope" },
          { id: "c", text: "Fine-tune daily" },
          { id: "d", text: "Fill the context window to the max" },
        ],
        correct: ["a"],
        explanation:
          "Hybrid stores (KV/graph/vectors/files) match semantic/episodic/procedural types.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is forgetting a feature?",
        type: "single",
        options: [
          { id: "a", text: "Disk is free and retrieval never degrades" },
          { id: "b", text: "Old episodes and stale facts poison search and the prompt — TTL, supersede, version" },
          { id: "c", text: "Models legally cannot store dates" },
          { id: "d", text: "Forgetting means deleting the user" },
        ],
        correct: ["b"],
        explanation:
          "A year of raw episodes is a haystack. Weeding keeps retrieval useful and safer.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: when you know the key (e.g. timezone), you should still only use vector search.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Exact keys belong in KV/SQL. Vectors are for fuzzy recall when you don't have a key.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-memory-conflicts",
    conceptId: "memory-conflicts",
    questions: [
      {
        id: "q1",
        prompt: "What is memory poisoning?",
        type: "single",
        options: [
          { id: "a", text: "A slow vector index" },
          { id: "b", text: "Untrusted text written as a durable fact, then replayed in future sessions" },
          { id: "c", text: "Using too few tokens" },
          { id: "d", text: "Prompt caching" },
        ],
        correct: ["b"],
        explanation:
          "It's prompt injection that persists. Filter writes; don't let model- or web-origin text become policy.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Two values arrive for diet. What should a governed write do?",
        type: "single",
        options: [
          { id: "a", text: "Last-write-wins, always" },
          { id: "b", text: "Compare provenance/trust: conflict, ask, or supersede — never silent clobber from a weaker source" },
          { id: "c", text: "Delete all memory" },
          { id: "d", text: "Ignore timestamps" },
        ],
        correct: ["b"],
        explanation:
          "Keep provenance. Time-valid facts may both be true. Real contradictions need a policy, not luck.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if you cannot govern writes, it is safer not to persist long-term memory.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "A session-only assistant beats a poisoned brain that lasts for months.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-vision-language-models",
    conceptId: "vision-language-models",
    questions: [
      {
        id: "q1",
        prompt: "How does a VLM read a picture?",
        type: "single",
        options: [
          { id: "a", text: "It grows camera eyes" },
          { id: "b", text: "The image is encoded as visual tokens that sit next to text tokens in the context window" },
          { id: "c", text: "It only reads a human-written caption" },
          { id: "d", text: "Pixels are stored in the GPU forever" },
        ],
        correct: ["b"],
        explanation:
          "No eyeballs — patches or learned visual tokens enter the same transformer as words, and they cost context.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why crop a screenshot before sending it to a VLM?",
        type: "single",
        options: [
          { id: "a", text: "Models cannot see color" },
          { id: "b", text: "Visual tokens are expensive and attention is finite — a 4K desktop buries the error dialog" },
          { id: "c", text: "Cropping is required by HTTP" },
          { id: "d", text: "VLMs only accept squares" },
        ],
        correct: ["b"],
        explanation:
          "Send the region that matters. Treat pixels as untrusted (visual prompt injection).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a model that describes an image is the same as a model that generates one.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Understanding reads existing pixels. Generation invents new ones. Don't mix them up.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-image-understanding-ocr",
    conceptId: "image-understanding-ocr",
    questions: [
      {
        id: "q1",
        prompt: "When must you use OCR (or native PDF text) instead of only a VLM?",
        type: "single",
        options: [
          { id: "a", text: "When you need the exact printed string — totals, IBANs, IDs" },
          { id: "b", text: "When describing a sunset" },
          { id: "c", text: "Never; VLMs are always exact" },
          { id: "d", text: "Only for videos" },
        ],
        correct: ["a"],
        explanation:
          "VLMs paraphrase and hallucinate digits. Extract, validate, then reason.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why does layout matter for OCR?",
        type: "single",
        options: [
          { id: "a", text: "It doesn't" },
          { id: "b", text: "Tables and columns dumped as one string mix up which number belongs to which field" },
          { id: "c", text: "Layout is only for CSS" },
          { id: "d", text: "Models ignore reading order on purpose" },
        ],
        correct: ["b"],
        explanation:
          "Keep bounding boxes and reading order. Prefer native PDF text over photographing a digital file.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should wire a VLM's spoken IBAN straight into a payment.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Extract, checksum, confirm. Never pay from 'I think it says.'",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-speech-stt-tts",
    conceptId: "speech-stt-tts",
    questions: [
      {
        id: "q1",
        prompt: "What is the STT → LLM → TTS cascade?",
        type: "single",
        options: [
          { id: "a", text: "Transcribe speech to text, think in text, speak the reply" },
          { id: "b", text: "Generate a video from a photo" },
          { id: "c", text: "Fine-tune on audio only" },
          { id: "d", text: "Skip the language model" },
        ],
        correct: ["a"],
        explanation:
          "It's searchable and lossy on emotion. Native audio models keep tone but are harder to index.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When do you still want a transcript even if you have a native audio model?",
        type: "single",
        options: [
          { id: "a", text: "Never" },
          { id: "b", text: "When you need a searchable, editable medical/legal log" },
          { id: "c", text: "Only for images" },
          { id: "d", text: "Transcripts are illegal" },
        ],
        correct: ["b"],
        explanation:
          "Records and RAG want text. Run native in parallel if distress or overlap matters.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: STT transcripts are perfect ground truth.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Names, jargon, and homophones fail. Show and allow edits. Don't clone voices without consent.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-audio-video-understanding",
    conceptId: "audio-video-understanding",
    questions: [
      {
        id: "q1",
        prompt: "What's the right way to understand long video?",
        type: "single",
        options: [
          { id: "a", text: "Paste the entire MP4 into a million-token window" },
          { id: "b", text: "Index a timeline of sampled frames, speech, sounds, and OCR — then retrieve seconds" },
          { id: "c", text: "Use only the first frame" },
          { id: "d", text: "Convert video to a GIF and hope" },
        ],
        correct: ["b"],
        explanation:
          "Dense video is expensive and still misses a beep. Timestamps let you cite 1:04.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why keep an audio-event index, not only captions?",
        type: "single",
        options: [
          { id: "a", text: "Captions always include alarms" },
          { id: "b", text: "A beep or crash may never become a word in the transcript" },
          { id: "c", text: "Audio cannot be timestamped" },
          { id: "d", text: "OCR replaces sound" },
        ],
        correct: ["b"],
        explanation:
          "Non-speech audio is evidence. Omni models help on short clips; long video is still retrieval.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a long advertised context window makes video indexing unnecessary.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "You still pay, wait, and lose needles. Index then retrieve — same lesson as long-context text.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-image-video-generation",
    conceptId: "image-video-generation",
    questions: [
      {
        id: "q1",
        prompt: "What does an image/video generator do?",
        type: "single",
        options: [
          { id: "a", text: "Invent new pixels from a prompt — a paintbrush, not a camera" },
          { id: "b", text: "Read your CCTV as legal proof" },
          { id: "c", text: "Replace OCR" },
          { id: "d", text: "Store memories in weights each time you prompt" },
        ],
        correct: ["a"],
        explanation:
          "Photorealism is not proof. Label synthetic media; don't cite it as a source.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is video generation harder than still images?",
        type: "single",
        options: [
          { id: "a", text: "It isn't" },
          { id: "b", text: "Motion must stay coherent across frames (identity, physics, hands) and costs far more compute" },
          { id: "c", text: "Videos cannot have prompts" },
          { id: "d", text: "Diffusion only works on GIFs" },
        ],
        correct: ["b"],
        explanation:
          "That's why clips are short and still glitchy. Understanding vs generation remain different jobs.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a generated 'dashboard screenshot' is production telemetry.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "It is fiction with a UI skin. Also: likeness/deepfakes need consent.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-multimodal-rag",
    conceptId: "multimodal-rag",
    questions: [
      {
        id: "q1",
        prompt: "What is multimodal RAG?",
        type: "single",
        options: [
          { id: "a", text: "Only searching Wikipedia" },
          { id: "b", text: "Retrieval that can return images, frames, OCR, or audio — not only paragraphs" },
          { id: "c", text: "Generating fake photos of your docs" },
          { id: "d", text: "Deleting the media after captioning" },
        ],
        correct: ["b"],
        explanation:
          "CLIP-like spaces search by 'looks like.' Parallel OCR/STT/audio indexes catch numbers and beeps.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "For 'the slide with Q3 revenue,' what should you retrieve?",
        type: "single",
        options: [
          { id: "a", text: "OCR/text to find the slide, plus the image so a VLM can read the chart" },
          { id: "b", text: "A CLIP match to a random red square" },
          { id: "c", text: "The whole 2-hour recording in context" },
          { id: "d", text: "Nothing; generate a new chart" },
        ],
        correct: ["a"],
        explanation:
          "Numbers want text indexes; you still show the pixels. Pack a few snippets, not 40 photos.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: transcribing every video and throwing away the media is enough.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "You can search words and still be unable to show what the camera saw. Keep pointers to media.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-multimodal-agents",
    conceptId: "multimodal-agents",
    questions: [
      {
        id: "q1",
        prompt: "What is new about multimodal agents vs text agents?",
        type: "single",
        options: [
          { id: "a", text: "They don't use a loop" },
          { id: "b", text: "Observations and actions include pixels and sound — the observe-reason-act loop is the same" },
          { id: "c", text: "They cannot use tools" },
          { id: "d", text: "They replace HITL" },
        ],
        correct: ["b"],
        explanation:
          "Screenshots and mics are observations. Clicks and speech are actions. Scope them.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is visual prompt injection?",
        type: "single",
        options: [
          { id: "a", text: "A prettier system prompt" },
          { id: "b", text: "Instructions hidden in pixels (or audio) that the model obeys as if they were trusted" },
          { id: "c", text: "OCR failing" },
          { id: "d", text: "A cache miss" },
        ],
        correct: ["b"],
        explanation:
          "Treat pixels like untrusted tool output. Prefer DOM/AX trees when you control the UI.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: seeing the user's screen means the agent should be allowed to click anything.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Observation is not permission. Least-privilege tools and HITL on send/pay/delete.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-fine-tuning",
    conceptId: "what-is-fine-tuning",
    questions: [
      {
        id: "q1",
        prompt: "What does fine-tuning actually change?",
        type: "single",
        options: [
          { id: "a", text: "The documents in your vector store" },
          { id: "b", text: "The model's weights, so behavior like format and tone becomes more reliable" },
          { id: "c", text: "Only the system prompt" },
          { id: "d", text: "The GPU driver" },
        ],
        correct: ["b"],
        explanation:
          "It's continued training. Facts that change still belong in RAG — weights go stale and can't cite.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is fine-tuning a poor way to add the employee handbook?",
        type: "single",
        options: [
          { id: "a", text: "Models cannot read English" },
          { id: "b", text: "Facts go stale, you can't cite, and retraining every edit is expensive" },
          { id: "c", text: "Handbooks are illegal to retrieve" },
          { id: "d", text: "LoRA forbids text" },
        ],
        correct: ["b"],
        explanation:
          "Knowledge vs behavior: lookup → RAG. Habit → fine-tune.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: more scraped examples always beat a few hundred gold ones.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Quality dominates. Dirty data teaches dirty habits and can leak PII into weights.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-full-vs-peft",
    conceptId: "full-vs-peft",
    questions: [
      {
        id: "q1",
        prompt: "What is PEFT?",
        type: "single",
        options: [
          { id: "a", text: "Training every parameter of the base model" },
          { id: "b", text: "Freezing the base and training a small adapter" },
          { id: "c", text: "Deleting the model" },
          { id: "d", text: "Only quantization" },
        ],
        correct: ["b"],
        explanation:
          "You ship base + a small adapter instead of a full second copy. LoRA is the usual PEFT method.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is PEFT the 2026 default for products?",
        type: "single",
        options: [
          { id: "a", text: "It's illegal to full-FT" },
          { id: "b", text: "Cheaper VRAM, swappable adapters per product, less catastrophic forgetting" },
          { id: "c", text: "Adapters cannot be loaded in vLLM" },
          { id: "d", text: "Full FT never works" },
        ],
        correct: ["b"],
        explanation:
          "Full FT is for lab-scale rewrites when PEFT saturates — not the first move.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should train one mega-adapter for ten unrelated jobs.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "One base, many adapters. Mixing unrelated tasks in one LoRA muddies both.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-lora-qlora",
    conceptId: "lora-qlora",
    questions: [
      {
        id: "q1",
        prompt: "What does LoRA train instead of W?",
        type: "single",
        options: [
          { id: "a", text: "Two small matrices A and B whose product is added to frozen W" },
          { id: "b", text: "Only the tokenizer" },
          { id: "c", text: "The entire optimizer state of the universe" },
          { id: "d", text: "Nothing; LoRA is prompting" },
        ],
        correct: ["a"],
        explanation:
          "Low-rank update ΔW ≈ A×B. Rank r is capacity. QLoRA also stores frozen W in 4-bit.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "QLoRA is best described as:",
        type: "single",
        options: [
          { id: "a", text: "A totally different algorithm from LoRA" },
          { id: "b", text: "LoRA plus a 4-bit frozen base so training fits in less VRAM" },
          { id: "c", text: "The GGUF file format" },
          { id: "d", text: "Full fine-tuning in 2-bit" },
        ],
        correct: ["b"],
        explanation:
          "Same adapters. Training-time quantization of W is not the same as packing GGUF for serving.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: rank r=64 is always better than r=16.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Extra rank overfits small datasets and costs VRAM. Start typical (e.g. 16) and raise if eval stalls.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-quantization",
    conceptId: "quantization",
    questions: [
      {
        id: "q1",
        prompt: "What is quantization?",
        type: "single",
        options: [
          { id: "a", text: "Storing weights with fewer bits so the model uses less memory" },
          { id: "b", text: "Adding more layers" },
          { id: "c", text: "RAG" },
          { id: "d", text: "A type of tokenizer" },
        ],
        correct: ["a"],
        explanation:
          "16-bit → 8- or 4-bit with rounding. Eval your real tasks after you shrink.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How do QLoRA and GGUF/GPTQ differ?",
        type: "single",
        options: [
          { id: "a", text: "They are identical" },
          { id: "b", text: "QLoRA uses 4-bit during training of a frozen base; GPTQ/AWQ/GGUF shrink a model for serving" },
          { id: "c", text: "GGUF is only for training" },
          { id: "d", text: "QLoRA cannot use LoRA" },
        ],
        correct: ["b"],
        explanation:
          "Same 'fewer bits' idea, different lifecycle stage. Convert deliberately after training.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you can skip eval after 4-bit quantization if MMLU looked fine in a blog.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Your JSON schema or legal clause can break while a public benchmark barely moves.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-instruction-vs-preference",
    conceptId: "instruction-vs-preference",
    questions: [
      {
        id: "q1",
        prompt: "SFT vs DPO data looks like:",
        type: "single",
        options: [
          { id: "a", text: "SFT: prompt → gold reply. DPO: prompt → chosen vs rejected" },
          { id: "b", text: "SFT needs a reward model; DPO does not use data" },
          { id: "c", text: "They are the same rows" },
          { id: "d", text: "DPO only works on images" },
        ],
        correct: ["a"],
        explanation:
          "Imitate first (SFT), then preferences (DPO). PPO/RLHF is the heavier lab stack.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why did product teams standardize on SFT → DPO instead of PPO?",
        type: "single",
        options: [
          { id: "a", text: "PPO is illegal" },
          { id: "b", text: "DPO is one offline training step with no separate reward model, comparable quality for many jobs" },
          { id: "c", text: "SFT is no longer used" },
          { id: "d", text: "DPO does not need a GPU" },
        ],
        correct: ["b"],
        explanation:
          "Still do SFT first. GRPO/RL when a verifier can score answers (code, math).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should DPO a base model that never saw SFT for your task.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Preferences without an imitation baseline wander. Demonstrations first.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-when-to-fine-tune",
    conceptId: "when-to-fine-tune",
    questions: [
      {
        id: "q1",
        prompt: "What's the cheap order of operations?",
        type: "single",
        options: [
          { id: "a", text: "Fine-tune first, then maybe prompt" },
          { id: "b", text: "Prompt → RAG for facts → fine-tune for stubborn behavior" },
          { id: "c", text: "Always full-FT 70B" },
          { id: "d", text: "Never retrieve" },
        ],
        correct: ["b"],
        explanation:
          "If few-shot works, stop. Combine RAG + a LoRA for the usual production stack.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Weekly-changing docs. What do you do?",
        type: "single",
        options: [
          { id: "a", text: "Fine-tune the docs into weights every Friday" },
          { id: "b", text: "RAG (and prompts). Fine-tuning would go stale and can't cite" },
          { id: "c", text: "Quantize the handbook" },
          { id: "d", text: "DPO on random pairs" },
        ],
        correct: ["b"],
        explanation:
          "Lookup problem → retrieval. Fine-tune the summary format if that still fails.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a tuned model should still use RAG for facts that change.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "SFT the voice/schema; retrieve the current truth. Weights are not a wiki.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-why-evaluation-matters",
    conceptId: "why-evaluation-matters",
    questions: [
      {
        id: "q1",
        prompt: "What is an eval set for, in one line?",
        type: "single",
        options: [
          { id: "a", text: "A screenshot of the best demo chat" },
          { id: "b", text: "Frozen tasks that look like the real job, scored before users see a change" },
          { id: "c", text: "Training data you fine-tune on every Friday" },
          { id: "d", text: "A public leaderboard rank" },
        ],
        correct: ["b"],
        explanation:
          "Demos lie. The eval set is the spec: you run it whenever the system changes.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "You rewrite the prompt and leadership likes one transcript. What should block shipping?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — a liked transcript is proof" },
          { id: "b", text: "A drop (or mixed slice) on the frozen eval set" },
          { id: "c", text: "Whether the new prompt is longer" },
          { id: "d", text: "Only whether latency improved" },
        ],
        correct: ["b"],
        explanation:
          "One transcript is not the user population. Score the frozen set; watch slices, not one blended vanity number.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should few-shot or train on the eval set to boost the dashboard.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "That's cheating — same as training on the test fold. The number stops meaning 'will it work on new users?'",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-offline-vs-online-eval",
    conceptId: "offline-vs-online-eval",
    questions: [
      {
        id: "q1",
        prompt: "Offline vs online — which pair is right?",
        type: "single",
        options: [
          { id: "a", text: "Offline = live thumbs; online = CI gold set" },
          { id: "b", text: "Offline = frozen set in the lab/CI; online = live users, A/B, task success" },
          { id: "c", text: "You only ever need one of them" },
          { id: "d", text: "Online eval cannot measure latency" },
        ],
        correct: ["b"],
        explanation:
          "Gate in CI (offline). Confirm on real traffic (online). Shadow before showing users a new prompt.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why can a perfect gold-set score still fail in production?",
        type: "single",
        options: [
          { id: "a", text: "Because eval is fake by definition" },
          { id: "b", text: "The real query mix drifts; the frozen set isn't the whole world" },
          { id: "c", text: "Online metrics are always lower" },
          { id: "d", text: "CI cannot run LLM judges" },
        ],
        correct: ["b"],
        explanation:
          "Replay new production traces (PII-stripped) into the lab and grow the gold set. That's the loop.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should A/B a prompt in production before it passes the offline gate.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Don't use users as the first test suite. Offline pass, then shadow, then A/B.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-human-evaluation",
    conceptId: "human-evaluation",
    questions: [
      {
        id: "q1",
        prompt: "Why a rubric instead of only thumbs?",
        type: "single",
        options: [
          { id: "a", text: "Thumbs are illegal" },
          { id: "b", text: "A thumb hides which axis failed — grounded vs helpful vs safe" },
          { id: "c", text: "Rubrics replace the need for any gold answers" },
          { id: "d", text: "Humans cannot do pairwise comparisons" },
        ],
        correct: ["b"],
        explanation:
          "Same answer can be helpful and ungrounded. Split the axes. Pairwise A/B is often easier than a lonely 1–5.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What are humans mainly for in a 2026 eval stack?",
        type: "single",
        options: [
          { id: "a", text: "Scoring every production reply" },
          { id: "b", text: "Defining the rubric, building gold, calibrating judges, sampling live traces" },
          { id: "c", text: "Replacing unit tests" },
          { id: "d", text: "Only kickoff workshops" },
        ],
        correct: ["b"],
        explanation:
          "Volume scoring is judges + code. Humans set and audit the bar — especially experts on high-stakes domains.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if two raters always disagree, you should just average their scores and ship.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Low agreement means the task is underspecified. Fix the rubric before you trust the labels.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-llm-as-a-judge",
    conceptId: "llm-as-a-judge",
    questions: [
      {
        id: "q1",
        prompt: "What must you do before trusting an LLM judge in CI?",
        type: "single",
        options: [
          { id: "a", text: "Use the same model that generated the answers" },
          { id: "b", text: "Calibrate it against humans on your task (and control known biases)" },
          { id: "c", text: "Ask it to fact-check the whole web with no source" },
          { id: "d", text: "Never pass retrieved context (it 'knows')" },
        ],
        correct: ["b"],
        explanation:
          "The meta-metric is agreement with humans on *your* rubric. Verbosity, position, and self-preference will otherwise run the product.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "You run pairwise judging. What's the standard bias fix?",
        type: "single",
        options: [
          { id: "a", text: "Always put the new model first so it wins" },
          { id: "b", text: "Swap A/B order and average — judges often pick the first seat" },
          { id: "c", text: "Make both answers longer" },
          { id: "d", text: "Remove the rubric" },
        ],
        correct: ["b"],
        explanation:
          "Position bias is well documented. Also penalize extra unsupported claims (verbosity bias).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: an LLM judge should be the only ship gate for safety.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Judges miss novel jailbreaks and can be talked into a story. Red-team sets, code checks, and human audit still matter.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-benchmarks-regression",
    conceptId: "benchmarks-regression",
    questions: [
      {
        id: "q1",
        prompt: "What are public leaderboards actually good for?",
        type: "single",
        options: [
          { id: "a", text: "QA for your production assistant" },
          { id: "b", text: "Shopping for / comparing general base models — not your product spec" },
          { id: "c", text: "Training data" },
          { id: "d", text: "Replacing CI" },
        ],
        correct: ["b"],
        explanation:
          "They leak, saturate, and aren't your users. Private gold + CI is product QA.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A PR should fail when…",
        type: "single",
        options: [
          { id: "a", text: "A public quiz score didn't go up" },
          { id: "b", text: "Your tracked gold-set metric drops more than the noise budget" },
          { id: "c", text: "The prompt got shorter" },
          { id: "d", text: "You added unit tests" },
        ],
        correct: ["b"],
        explanation:
          "Regression tests are the gate. Unit checks (schema, tool ids) sit next to the graded gold set.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you may train or few-shot on the private gold set to lift the dashboard.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Then the dashboard no longer predicts new users. Version the set; never train on it.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-hallucination-safety-eval",
    conceptId: "hallucination-safety-eval",
    questions: [
      {
        id: "q1",
        prompt: "Groundedness (faithfulness) measures…",
        type: "single",
        options: [
          { id: "a", text: "Whether the answer sounds true on the open web" },
          { id: "b", text: "Whether claims are supported by the provided context" },
          { id: "c", text: "Whether the user liked the tone" },
          { id: "d", text: "Whether a jailbreak succeeded" },
        ],
        correct: ["b"],
        explanation:
          "World-factuality is a different score (gold / trusted source). Safety is another. Don't blend them.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Faithfulness is high but the price is still wrong. Likely cause?",
        type: "single",
        options: [
          { id: "a", text: "The generator is always the bug" },
          { id: "b", text: "The model faithfully quoted a stale or wrong chunk — fix corpus/retrieval" },
          { id: "c", text: "You need a longer system prompt about being nice" },
          { id: "d", text: "Safety eval failed" },
        ],
        correct: ["b"],
        explanation:
          "Faithful to junk is still wrong. Split groundedness vs factuality or you'll rewrite the prompt for a month.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: on empty retrieval, 'I don't know' should count as a quality failure.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "That's a grounding win. Inventing a policy would be the fail.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-quality-latency-cost",
    conceptId: "quality-latency-cost",
    questions: [
      {
        id: "q1",
        prompt: "What should you optimize in production, given an SLO?",
        type: "single",
        options: [
          { id: "a", text: "Always the smartest model" },
          { id: "b", text: "Dollars per successful task under latency/quality/reliability gates" },
          { id: "c", text: "Tokens generated, regardless of success" },
          { id: "d", text: "Mean latency only" },
        ],
        correct: ["b"],
        explanation:
          "Count retries and tool loops. p95 beats the mean. A trophy model that misses p95 is a product fail.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A larger model is +2 on gold and p95 goes 1.4s → 7s. What's the sane next move?",
        type: "single",
        options: [
          { id: "a", text: "Ship it — quality always wins" },
          { id: "b", text: "Keep the SLO: route easy vs hard, or keep the faster model if bounce eats the gain" },
          { id: "c", text: "Drop the faithfulness gate to save money" },
          { id: "d", text: "Ignore latency; users will wait" },
        ],
        correct: ["b"],
        explanation:
          "Eval both routes. Don't 'optimize cost' by dropping the quality floor either — cheap wrong answers are expensive.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a cheap model that loops eight times on tools is still cheap.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Cost is per successful task, including loops, RAG, retries, and judges — not the sticker $ / 1k tokens.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-observability",
    conceptId: "what-is-observability",
    questions: [
      {
        id: "q1",
        prompt: "Observability vs evaluation vs monitoring — which mapping is right?",
        type: "single",
        options: [
          { id: "a", text: "Observability = gold-set score; eval = is it up?" },
          { id: "b", text: "Monitoring = is it up?; observability = what happened on this request?; eval = is the product good?" },
          { id: "c", text: "They are three names for the same dashboard" },
          { id: "d", text: "Observability replaces the need for an eval set" },
        ],
        correct: ["b"],
        explanation:
          "Traces explain an incident. Eval says whether quality moved. A green p95 is monitoring, not a why.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What belongs on an LLM span that HTTP 200 does not tell you?",
        type: "single",
        options: [
          { id: "a", text: "Only the Kubernetes pod name" },
          { id: "b", text: "Model, token counts, prompt version, retrieve ids, tool names" },
          { id: "c", text: "The full unredacted prompt in a shared Slack" },
          { id: "d", text: "Nothing — status code is enough" },
        ],
        correct: ["b"],
        explanation:
          "AI calls can 200 and still invent a policy. Instrument the insides. Redact payloads.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: buying an LLM dashboard product is the same as being able to explain why a tool fired.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "The concept is a reconstructable span tree (and versions). A UI without those attributes is still a black box.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-tracing-logging-metrics",
    conceptId: "tracing-logging-metrics",
    questions: [
      {
        id: "q1",
        prompt: "What joins logs, metrics, and traces?",
        type: "single",
        options: [
          { id: "a", text: "The user's email as a metric label" },
          { id: "b", text: "A shared trace id (and span ids on logs)" },
          { id: "c", text: "Putting everything in stdout" },
          { id: "d", text: "A weekly PDF" },
        ],
        correct: ["b"],
        explanation:
          "Alert → trace_id → waterfall. Without the id you have three piles of noise.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why tail-sample LLM traffic instead of only a random 5% at the start?",
        type: "single",
        options: [
          { id: "a", text: "Random 5% always catches jailbreaks" },
          { id: "b", text: "Keep errors, slow, and expensive traces after the fact — happy-path chatter is huge" },
          { id: "c", text: "You must store 100% of token streams" },
          { id: "d", text: "Metrics replace sampling" },
        ],
        correct: ["b"],
        explanation:
          "Head sampling is cheap and misses rare disasters. Tail sampling keeps the incidents you actually needed.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: the raw user prompt is a good Prometheus label.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "High cardinality explodes the time series and leaks PII. Use prompt_version, model, route.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-token-latency-cost",
    conceptId: "token-latency-cost",
    questions: [
      {
        id: "q1",
        prompt: "Which token fields should a 2026 LLM span record?",
        type: "single",
        options: [
          { id: "a", text: "Output tokens only" },
          { id: "b", text: "Input, cached input, reasoning/hidden, and output" },
          { id: "c", text: "Only the monthly invoice" },
          { id: "d", text: "Character count of the UI" },
        ],
        correct: ["b"],
        explanation:
          "Reasoning tokens and uncached input are where bills hide. Cached prefixes still show full input size.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What's the cost KPI that matches production eval?",
        type: "single",
        options: [
          { id: "a", text: "Sticker $ / 1k tokens of the trophy model" },
          { id: "b", text: "Dollars per successful task, including retries, tools, and loops" },
          { id: "c", text: "Mean latency only" },
          { id: "d", text: "GPU utilization of a laptop demo" },
        ],
        correct: ["b"],
        explanation:
          "A cheap model that loops eight times is not cheap. Alert on loop spikes and cache-busts. Use p95.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: time to first token and total time are the same number.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "TTFT is chat UX. Total time is when the JSON is valid or the tool loop finished.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-agent-traces",
    conceptId: "agent-traces",
    questions: [
      {
        id: "q1",
        prompt: "Why nest retrieve / llm / tool as child spans?",
        type: "single",
        options: [
          { id: "a", text: "It looks nicer in marketing" },
          { id: "b", text: "So you can see which stage failed — empty retrieval vs ignored chunk vs bad tool" },
          { id: "c", text: "So you can skip RAG evaluation" },
          { id: "d", text: "So you must log every chunk's full text" },
        ],
        correct: ["b"],
        explanation:
          "A single timer around 'the agent' tells you it was slow, not which child. Record ids and status; hash secret payloads.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "The final message is polite but delete_account ran. What catches that?",
        type: "single",
        options: [
          { id: "a", text: "BLEU on the last sentence" },
          { id: "b", text: "The tool span on the trajectory / waterfall" },
          { id: "c", text: "HTTP 200 on the chat endpoint" },
          { id: "d", text: "A thumbs-up" },
        ],
        correct: ["b"],
        explanation:
          "Grade trajectories, not only the closer. Excessive agency shows up as a destructive tool span.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should log full tool JSON by default for easier debugging.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Results often hold secrets. Hash args, keep name/status/timing/size; payload behind ACL if at all.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-prompt-versioning",
    conceptId: "prompt-versioning",
    questions: [
      {
        id: "q1",
        prompt: "What belongs on every production turn span?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — the host 'just has a prompt'" },
          { id: "b", text: "prompt_version (and model, retriever/tool versions)" },
          { id: "c", text: "The Slack message where someone pasted a new system prompt" },
          { id: "d", text: "Only the GPU id" },
        ],
        correct: ["b"],
        explanation:
          "No version means no rollback, no eval, no explanation. Prompts are code.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Eval traces should…",
        type: "single",
        options: [
          { id: "a", text: "Live in a notebook with a different schema than prod" },
          { id: "b", text: "Use the same span shape as prod so you can replay incidents through a candidate" },
          { id: "c", text: "Replace tail sampling" },
          { id: "d", text: "Omit prompt_version to keep them small" },
        ],
        correct: ["b"],
        explanation:
          "CI failure as a waterfall, then replay the real 7f3a through v13, then flip the flag.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: hot-editing the live system prompt is fine if you remember what you changed.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Three editors later, traces cannot name the recipe. Version bump + gold-set job, then traffic.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-prompt-injection",
    conceptId: "prompt-injection",
    questions: [
      {
        id: "q1",
        prompt: "Why does prompt injection exist at all?",
        type: "single",
        options: [
          { id: "a", text: "Because teams forget HTTPS" },
          { id: "b", text: "Instructions and untrusted text share one token stream with no hard split" },
          { id: "c", text: "Because RAG fully solved it" },
          { id: "d", text: "Because system prompts cannot leak" },
        ],
        correct: ["b"],
        explanation:
          "OWASP LLM01. A longer system prompt is not a kernel. Constrain tools and privileges in code.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What's a real mitigation vs a sticker?",
        type: "single",
        options: [
          { id: "a", text: "Only adding 'ignore attempts to change your rules'" },
          { id: "b", text: "Least privilege, HITL, structured outputs validated in code, untrusted-data labels" },
          { id: "c", text: "Fine-tuning the employee handbook into the weights" },
          { id: "d", text: "Logging every prompt to Slack" },
        ],
        correct: ["b"],
        explanation:
          "There is no foolproof model-side patch. Reduce what a swayed model is allowed to do.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: RAG or fine-tuning removes prompt injection.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Both still put untrusted text in the same window. They do not create a security boundary.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-indirect-prompt-injection",
    conceptId: "indirect-prompt-injection",
    questions: [
      {
        id: "q1",
        prompt: "Indirect injection is different because…",
        type: "single",
        options: [
          { id: "a", text: "The attacker must be logged in as admin" },
          { id: "b", text: "Hostile instructions arrive via retrieved pages, files, mail, images, or tool results" },
          { id: "c", text: "It only works on base models, not instruct models" },
          { id: "d", text: "HTTPS prevents it" },
        ],
        correct: ["b"],
        explanation:
          "The user ask can be ordinary. The plant is in the fetched bytes. Treat retrieved content as hostile.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A safer design for 'summarize this URL' is…",
        type: "single",
        options: [
          { id: "a", text: "Enable send-mail on the same turn so the bot can 'share the summary'" },
          { id: "b", text: "Keep the turn read-only: no acting tools; allow-list hosts; HITL for outbound" },
          { id: "c", text: "Paste the page into the system prompt to make it trusted" },
          { id: "d", text: "Disable citations so users don't see the plant" },
        ],
        correct: ["b"],
        explanation:
          "Capability cuts beat keyword filters. Don't pair fetch with powerful tools.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if the logged-in user asked a normal question, the retrieved context is safe.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Indirect injection does not require a hostile user. The document can be the attacker.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-jailbreaks",
    conceptId: "jailbreaks",
    questions: [
      {
        id: "q1",
        prompt: "Jailbreak vs prompt injection — which split should a product team use?",
        type: "single",
        options: [
          { id: "a", text: "They are identical; only labs should care" },
          { id: "b", text: "Jailbreak targets safety policy; injection hijacks your app's task, data, and tools" },
          { id: "c", text: "Jailbreaks only happen offline" },
          { id: "d", text: "Injection is always a model-provider bug, never yours" },
        ],
        correct: ["b"],
        explanation:
          "A refusing chatbot can still send mail if you wired the tool. Different owners, different controls.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A polite final message is proof no dangerous tool ran. What's wrong?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — tone is the audit" },
          { id: "b", text: "You must trace the tool spans; the closer can lie" },
          { id: "c", text: "Only jailbreaks call tools" },
          { id: "d", text: "HTTP 200 is enough" },
        ],
        correct: ["b"],
        explanation:
          "Observability: grade trajectories. Don't use 'the model refused' as evidence of no side effect.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a passing public safety leaderboard means your refund tool cannot be invoked wrongly.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Lab refusals ≠ your agency controls. Assume injection even when jailbreak eval looks strong.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-data-leakage",
    conceptId: "data-leakage",
    questions: [
      {
        id: "q1",
        prompt: "Where should API keys live?",
        type: "single",
        options: [
          { id: "a", text: "In the system prompt so the model can call APIs" },
          { id: "b", text: "In a vault / runtime env the model never sees" },
          { id: "c", text: "In the gold eval set for realism" },
          { id: "d", text: "In unredacted traces for debugging" },
        ],
        correct: ["b"],
        explanation:
          "System prompts leak (LLM07). If the model sees a key, injection can ask for it.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "The bot quoted another customer's invoice. Likely cause?",
        type: "single",
        options: [
          { id: "a", text: "Need a longer 'never reveal other customers' sentence" },
          { id: "b", text: "Retrieval skipped tenant ACL / metadata filter" },
          { id: "c", text: "HTTPS was off" },
          { id: "d", text: "The model is always admin" },
        ],
        correct: ["b"],
        explanation:
          "ACL at retrieve time. Prompt stickers are not authorization.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should treat the system prompt as a secret vault.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Assume it can be quoted. Rules that must hold belong in code.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-tool-abuse",
    conceptId: "tool-abuse",
    questions: [
      {
        id: "q1",
        prompt: "Excessive agency means…",
        type: "single",
        options: [
          { id: "a", text: "The GPU is too fast" },
          { id: "b", text: "The model has a bigger tool kit / more privilege than the job needs" },
          { id: "c", text: "You used HITL" },
          { id: "d", text: "You traced tool spans" },
        ],
        correct: ["b"],
        explanation:
          "OWASP LLM06. If the model can do it, injection can try it. Shrink the kit.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Who supplies the user id for a refund tool?",
        type: "single",
        options: [
          { id: "a", text: "The model, from the chat" },
          { id: "b", text: "The server session — never a model-supplied id" },
          { id: "c", text: "The retrieved PDF" },
          { id: "d", text: "A second model that 'checks'" },
        ],
        correct: ["b"],
        explanation:
          "Authorization in your API. Don't ask the model to approve itself.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: one mega-agent with every plugin is a good default for production.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Split read vs write routes. HITL for irreversible. Demos are not a threat model.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-rag-poisoning",
    conceptId: "rag-poisoning",
    questions: [
      {
        id: "q1",
        prompt: "RAG poisoning is mainly…",
        type: "single",
        options: [
          { id: "a", text: "A faster embedding model" },
          { id: "b", text: "Hostile or false text (or vectors) written into the index so retrieval serves them" },
          { id: "c", text: "Only a jailbreak chat" },
          { id: "d", text: "HTTPS certificate expiry" },
        ],
        correct: ["b"],
        explanation:
          "Who can write the corpus is a security question. Grounded to junk can still pass faithfulness.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A support bot cites a fake refund policy from a crawled page. What failed first?",
        type: "single",
        options: [
          { id: "a", text: "Need a bigger model" },
          { id: "b", text: "Ingest / write control — the open web was treated as a trusted handbook" },
          { id: "c", text: "Temperature was too high" },
          { id: "d", text: "Citations prove truth, so nothing failed" },
        ],
        correct: ["b"],
        explanation:
          "Citations show what was retrieved, not that it was authorized. Quarantine uploads; don't crawl into privileged bots.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if faithfulness is high, the corpus cannot be poisoned.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Faithfulness is 'matches the chunk.' Poisoning makes the chunk itself the lie.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-insecure-output-handling",
    conceptId: "insecure-output-handling",
    questions: [
      {
        id: "q1",
        prompt: "LLM output should be treated as…",
        type: "single",
        options: [
          { id: "a", text: "Trusted HTML because it's your assistant" },
          { id: "b", text: "Untrusted input to the next interpreter (UI, SQL, shell, URL)" },
          { id: "c", text: "A sanitizer" },
          { id: "d", text: "Safe if the system prompt said 'be nice'" },
        ],
        correct: ["b"],
        explanation:
          "OWASP LLM05. Encode, bind parameters, allow-list. Don't eval generated text.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "How should a model drive a database lookup?",
        type: "single",
        options: [
          { id: "a", text: "Concatenate its clause into SQL" },
          { id: "b", text: "Structured tool args, then your code uses bound parameters" },
          { id: "c", text: "Ask it to 'not use injection'" },
          { id: "d", text: "innerHTML the query" },
        ],
        correct: ["b"],
        explanation:
          "The model never composes SQL (or shell). Your code owns the sink.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: stripping the string 'script' is a substitute for HTML encoding.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Filters lose. Encoders and CSP win. Same as any untrusted form post.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-least-privilege",
    conceptId: "least-privilege",
    questions: [
      {
        id: "q1",
        prompt: "Which stack is least privilege for agents?",
        type: "single",
        options: [
          { id: "a", text: "One god service account and a stern prompt" },
          { id: "b", text: "Caller identity, tiny kit, schema, code policy, HITL, sandbox" },
          { id: "c", text: "Let the researcher agent inherit payer tools" },
          { id: "d", text: "Ask a second model 'are you sure?'" },
        ],
        correct: ["b"],
        explanation:
          "The model is never admin. Approve is not an LLM. Denies belong on traces.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "HITL that only asks 'looks good?' without showing args is…",
        type: "single",
        options: [
          { id: "a", text: "Fine — humans can feel intent" },
          { id: "b", text: "Broken — the human must see the exact action" },
          { id: "c", text: "Required by OAuth" },
          { id: "d", text: "The same as schema validation" },
        ],
        correct: ["b"],
        explanation:
          "Rubber-stamp UX is not a gate. Show the args; the model cannot click Approve.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: internal agents can skip these layers because employees are trusted.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Internal is production data, plus plants in tickets and wikis. Same stack.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-secrets-sandboxing",
    conceptId: "secrets-sandboxing",
    questions: [
      {
        id: "q1",
        prompt: "Why keep secrets out of the context window?",
        type: "single",
        options: [
          { id: "a", text: "Tokens are expensive" },
          { id: "b", text: "If the model sees a key, injection can try to exfiltrate it" },
          { id: "c", text: "Vaults are slower than prompts" },
          { id: "d", text: "System prompts cannot leak" },
        ],
        correct: ["b"],
        explanation:
          "Runtime env / IAM. The model proposes tool calls; your code attaches the key.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Unbounded agent loops are…",
        type: "single",
        options: [
          { id: "a", text: "A sign the agent is thorough" },
          { id: "b", text: "A denial-of-wallet / availability issue — cap loops, tokens, and $" },
          { id: "c", text: "Only a latency cosmetic" },
          { id: "d", text: "Fixed by a bigger GPU" },
        ],
        correct: ["b"],
        explanation:
          "OWASP LLM10. Alert when caps hit. Local MCP still needs a jail — it often has more disk.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: generated code is safe to run unsandboxed on a developer's machine.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "That's where the keys are. The generator is influenceable. Jail, allow-list egress, fail closed.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-what-is-inference",
    conceptId: "what-is-inference",
    questions: [
      {
        id: "q1",
        prompt: "Prefill vs decode — which pair is right?",
        type: "single",
        options: [
          { id: "a", text: "Prefill updates weights; decode is training" },
          { id: "b", text: "Prefill ingests the prompt (often TTFT); decode emits tokens one by one (often memory-bound)" },
          { id: "c", text: "They are two names for the KV cache" },
          { id: "d", text: "Decode only happens in training" },
        ],
        correct: ["b"],
        explanation:
          "Inference uses frozen weights. Queue + prefill dominate first token; decode is the stream. Reasoning models hide extra decode tokens.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A bot feels slow. Traces show 200ms prefill and 1.8s queue. What should you fix first?",
        type: "single",
        options: [
          { id: "a", text: "Buy a smarter model" },
          { id: "b", text: "Capacity / scheduling — users wait before the GPU starts" },
          { id: "c", text: "Temperature" },
          { id: "d", text: "Fine-tune the handbook" },
        ],
        correct: ["b"],
        explanation:
          "TTFT includes queue. A trophy model does not shrink a 1.8s line.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: if the GPU is on, you are training.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "If weights aren't updating, it's inference. Serving is the usual production case.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-batching-continuous-batching",
    conceptId: "batching-continuous-batching",
    questions: [
      {
        id: "q1",
        prompt: "What's wrong with a static batch of mixed chat lengths?",
        type: "single",
        options: [
          { id: "a", text: "GPUs cannot run more than one request" },
          { id: "b", text: "Short requests wait until the longest one finishes; lots of padding" },
          { id: "c", text: "It requires tensor parallel" },
          { id: "d", text: "It disables the KV cache" },
        ],
        correct: ["b"],
        explanation:
          "Continuous batching lets finished sequences leave and new ones join at the next token step.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Chunked prefill exists so that…",
        type: "single",
        options: [
          { id: "a", text: "Training can use inference kernels" },
          { id: "b", text: "A huge new prompt doesn't freeze every in-flight decode" },
          { id: "c", text: "You can skip the scheduler" },
          { id: "d", text: "Quantization becomes lossless" },
        ],
        correct: ["b"],
        explanation:
          "Interleave pieces of prefill with decode to protect TTFT *and* ongoing streams.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: raising max batch size always improves a chat SLO.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Throughput may rise while per-user latency dies. Pick the SLO first.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-kv-cache-serving",
    conceptId: "kv-cache-serving",
    questions: [
      {
        id: "q1",
        prompt: "What usually limits concurrent long-context chats first?",
        type: "single",
        options: [
          { id: "a", text: "The number of Python threads" },
          { id: "b", text: "GPU memory for KV, not just the weight file" },
          { id: "c", text: "Disk size of the tokenizer" },
          { id: "d", text: "HTTP keep-alive" },
        ],
        correct: ["b"],
        explanation:
          "Size hardware for weights plus KV. Paging and GQA exist because naive reservations waste RAM.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Paged KV is closest to…",
        type: "single",
        options: [
          { id: "a", text: "Storing the whole context window twice" },
          { id: "b", text: "OS-style pages: allocate cache blocks as tokens arrive, share prefix pages" },
          { id: "c", text: "Deleting attention" },
          { id: "d", text: "Training with dropout" },
        ],
        correct: ["b"],
        explanation:
          "PagedAttention-style engines. Prefix sharing is the engine cousin of HTTP prompt caching.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: context window, KV cache, and prompt cache are the same thing.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Window = max tokens seen. KV = stored K/V for this run. Prompt/prefix cache = reuse across calls.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-serving-quantization",
    conceptId: "serving-quantization",
    questions: [
      {
        id: "q1",
        prompt: "QLoRA vs serving quant — what's the split?",
        type: "single",
        options: [
          { id: "a", text: "They are identical checkpoints" },
          { id: "b", text: "QLoRA is a training recipe; serving shrinks weights, activations, and/or KV for inference" },
          { id: "c", text: "QLoRA is only for GPUs named GGUF" },
          { id: "d", text: "Serving quant updates gradients" },
        ],
        correct: ["b"],
        explanation:
          "Same family of fewer bits, different artifacts. Eval after every bit drop.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why quantize the KV cache?",
        type: "single",
        options: [
          { id: "a", text: "To train faster" },
          { id: "b", text: "Long context × users is often bigger than the weights — KV quant buys concurrency" },
          { id: "c", text: "To skip eval" },
          { id: "d", text: "Because 4-bit KV is always more accurate" },
        ],
        correct: ["b"],
        explanation:
          "Watch long-context recall. 4-bit is not automatically faster than FP8 on modern GPUs.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a blog saying 4-bit is lossless replaces your gold-set eval.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "JSON, rare names, and long context wobble first. Measure your suite.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-model-serving",
    conceptId: "model-serving",
    questions: [
      {
        id: "q1",
        prompt: "An inference server's three layers are…",
        type: "single",
        options: [
          { id: "a", text: "Training, dropout, Adam" },
          { id: "b", text: "API, scheduler, engine/GPU" },
          { id: "c", text: "HTML, CSS, JS" },
          { id: "d", text: "Only the product name on the box" },
        ],
        correct: ["b"],
        explanation:
          "Compatible HTTP is a lingua franca, not the architecture. Scale on queue and KV, not CPU.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "CPU is 30% and TTFT is 6s. What's likely?",
        type: "single",
        options: [
          { id: "a", text: "You should scale on CPU like a web app" },
          { id: "b", text: "Queue / KV is the signal — CPU is the wrong autoscale metric" },
          { id: "c", text: "The model is training" },
          { id: "d", text: "You need more Python workers only" },
        ],
        correct: ["b"],
        explanation:
          "LLM servers can look idle on CPU while users wait for GPU slots.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: speculative decoding fixes a five-second admission queue.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "It speeds decode when the draft agrees. It does not create GPU slots.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-latency-vs-throughput",
    conceptId: "latency-vs-throughput",
    questions: [
      {
        id: "q1",
        prompt: "Bigger decode batches usually…",
        type: "single",
        options: [
          { id: "a", text: "Lower per-user latency and lower tokens/s" },
          { id: "b", text: "Raise tokens/s/GPU and often raise per-user latency" },
          { id: "c", text: "Change nothing" },
          { id: "d", text: "Only affect training loss" },
        ],
        correct: ["b"],
        explanation:
          "Chat SLOs want the left of that trade; overnight jobs want the right. Split pools if you need both.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which set should you report for interactive chat?",
        type: "single",
        options: [
          { id: "a", text: "Only mean tokens/s" },
          { id: "b", text: "Queue, TTFT, ITL, E2E (p95) plus goodput" },
          { id: "c", text: "GPU clock only" },
          { id: "d", text: "BLEU" },
        ],
        correct: ["b"],
        explanation:
          "Don't mix queue, prefill, and decode into one 'latency' number. Goodput ignores wasted retries.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: hedging every request to two models is a cheap default.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "It can help tail latency and doubles cost. VIP slice, not default.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-model-routing",
    conceptId: "model-routing",
    questions: [
      {
        id: "q1",
        prompt: "A sane default policy is…",
        type: "single",
        options: [
          { id: "a", text: "Always the smartest model" },
          { id: "b", text: "Cheap when you can, strong when you must, fallback when the first call dies" },
          { id: "c", text: "Random model each turn" },
          { id: "d", text: "Two models on every call, always" },
        ],
        correct: ["b"],
        explanation:
          "Eval slices. Tag model_id. Fallback must not gain extra tools.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why route to roles (`faq_fast`) instead of a hardcoded trophy name in app code?",
        type: "single",
        options: [
          { id: "a", text: "Provider names never change" },
          { id: "b", text: "Ids churn; config-bound roles survive swaps and canaries" },
          { id: "c", text: "Roles disable tracing" },
          { id: "d", text: "The 8B and 70B share one prompt version automatically" },
        ],
        correct: ["b"],
        explanation:
          "A v13 prompt on the 8B is not v13 on the 70B. Shadow before you flip traffic.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should add a router before you have eval slices for easy vs hard.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "A router that wins on average and fails the hard slice is a product fail.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-inference-caching",
    conceptId: "inference-caching",
    questions: [
      {
        id: "q1",
        prompt: "Which cache means 'this is the same answer'?",
        type: "single",
        options: [
          { id: "a", text: "Semantic similarity 0.82" },
          { id: "b", text: "Exact replay of the same request (and scope), or a true prefix KV hit" },
          { id: "c", text: "Any embedding nearest neighbor" },
          { id: "d", text: "The monthly invoice" },
        ],
        correct: ["b"],
        explanation:
          "Semantic is 'looks similar' — dangerous for IDs and money. Prefix skips prefill of a stable stem.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Hit rate went to 0% after a tiny system-prompt tweak. Why?",
        type: "single",
        options: [
          { id: "a", text: "GPUs hate punctuation" },
          { id: "b", text: "Prefix cache keys on exact prefix bytes — you busted it. Version the prompt; put volatile text after the breakpoint" },
          { id: "c", text: "You need more tensor parallel" },
          { id: "d", text: "Semantic cache requires HTTPS" },
        ],
        correct: ["b"],
        explanation:
          "Include prompt version, tenant, and index version in keys. Don't cache errors.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should semantic-cache support chats at 0.82 similarity by default.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "You will mix order IDs and tenants. Curated FAQs with TTL, not all chats.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-distributed-inference",
    conceptId: "distributed-inference",
    questions: [
      {
        id: "q1",
        prompt: "What must fit in GPU memory at serve time?",
        type: "single",
        options: [
          { id: "a", text: "Only the parameter count × 2 bytes" },
          { id: "b", text: "Weights plus activations plus KV for live users" },
          { id: "c", text: "Only the tokenizer" },
          { id: "d", text: "Optimizer states, always" },
        ],
        correct: ["b"],
        explanation:
          "Serving OOMs are usually KV. Optimizer states are a training thing.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Disaggregated serving splits…",
        type: "single",
        options: [
          { id: "a", text: "Training from fine-tuning" },
          { id: "b", text: "Prefill pools (compute) from decode pools (KV-heavy), shipping KV between them" },
          { id: "c", text: "CPU from RAM only" },
          { id: "d", text: "The tokenizer from BPE" },
        ],
        correct: ["b"],
        explanation:
          "Matches the two inference phases. Interconnect is the tax. Try quant/paging before a cluster.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: tensor-parallelizing a 7B across eight GPUs is usually a free speedup.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Communication overhead will own a small model. Replicate instead, or don't distribute.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-how-to-design-ai-system",
    conceptId: "how-to-design-ai-system",
    questions: [
      {
        id: "q1",
        prompt: "What should you write before picking a model?",
        type: "single",
        options: [
          { id: "a", text: "The framework README" },
          { id: "b", text: "The user job and SLOs (quality, latency, cost, reliability)" },
          { id: "c", text: "A list of 40 MCP servers" },
          { id: "d", text: "A multi-agent org chart" },
        ],
        correct: ["b"],
        explanation:
          "The model is a component. No job, no architecture — you're decorating a guess.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When do you reach for an agent instead of a workflow?",
        type: "single",
        options: [
          { id: "a", text: "Always — agents are the 2026 default" },
          { id: "b", text: "When the steps cannot be known in advance and eval shows a workflow fails" },
          { id: "c", text: "When you have GPUs" },
          { id: "d", text: "When the system prompt is long" },
        ],
        correct: ["b"],
        explanation:
          "Start simpler. Known steps → workflow. Facts that change → RAG, not fine-tune-the-wiki.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: eval, security, and traces can wait until after the demo ships to users.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "The gold set is the spec. Security and traces are not phase 2 if anyone depends on the answers.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-rag-chatbot",
    conceptId: "design-rag-chatbot",
    questions: [
      {
        id: "q1",
        prompt: "A RAG chatbot is primarily…",
        type: "single",
        options: [
          { id: "a", text: "A fine-tune of the employee handbook" },
          { id: "b", text: "Grounded Q&A: retrieve approved chunks, generate with real citations" },
          { id: "c", text: "A mega-agent with shell access" },
          { id: "d", text: "Pasting the wiki into a million-token window" },
        ],
        correct: ["b"],
        explanation:
          "Update docs, not weights. Hybrid + rerank. Eval retrieval and generation separately.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Empty retrieval should…",
        type: "single",
        options: [
          { id: "a", text: "Count as a quality failure — the model must still answer" },
          { id: "b", text: "Say it doesn't know — that's a grounded success" },
          { id: "c", text: "Trigger send-email to the user" },
          { id: "d", text: "Fine-tune overnight" },
        ],
        correct: ["b"],
        explanation:
          "Inventing a policy is the fail. 'I don't know' is the win.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should fine-tune PDFs into the model instead of indexing them.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Facts that change belong in RAG. Fine-tune habits later if format still slips.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-enterprise-assistant",
    conceptId: "design-enterprise-assistant",
    questions: [
      {
        id: "q1",
        prompt: "Where must tenant/ACL checks run?",
        type: "single",
        options: [
          { id: "a", text: "Only in the system prompt" },
          { id: "b", text: "At retrieve time (filters or separate indexes), before chunks enter the window" },
          { id: "c", text: "After generation, if the answer 'looks internal'" },
          { id: "d", text: "Never — employees are trusted" },
        ],
        correct: ["b"],
        explanation:
          "The model is not your authorization layer. A god bot token is a leak.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Why is semantic cache dangerous here?",
        type: "single",
        options: [
          { id: "a", text: "It uses too much VRAM" },
          { id: "b", text: "A 'similar' question can return another person's or team's answer" },
          { id: "c", text: "It disables SSO" },
          { id: "d", text: "Citations become illegal" },
        ],
        correct: ["b"],
        explanation:
          "Prefix-cache only non-secret stems. Eval leak slices, not just average quality.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a prompt that says 'don't reveal other teams' is a substitute for metadata filters.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Injection and helpfulness will quote the chunk if retrieval returned it.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-support-agent",
    conceptId: "design-support-agent",
    questions: [
      {
        id: "q1",
        prompt: "Where should the customer id come from?",
        type: "single",
        options: [
          { id: "a", text: "Whatever the chat claims" },
          { id: "b", text: "The session / CRM — never from the model's story" },
          { id: "c", text: "A retrieved PDF" },
          { id: "d", text: "The system prompt" },
        ],
        correct: ["b"],
        explanation:
          "Preview tools, then HITL or a code policy. Tiny kit. Attachments are untrusted.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What's the primary success metric?",
        type: "single",
        options: [
          { id: "a", text: "Thumbs-up rate only" },
          { id: "b", text: "Tickets resolved correctly (plus safety: no unauthorized refunds)" },
          { id: "c", text: "Tokens generated" },
          { id: "d", text: "How agentic the loop looks" },
        ],
        correct: ["b"],
        explanation:
          "Polite text can still call the wrong tool — trace spans. FAQs can stay RAG-only.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: refund and unrestricted SQL belong on the same support kit for convenience.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "That's excessive agency. Injection in a ticket will pick the biggest tool.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-coding-agent",
    conceptId: "design-coding-agent",
    questions: [
      {
        id: "q1",
        prompt: "How should a coding agent see the repo?",
        type: "single",
        options: [
          { id: "a", text: "Paste the monorepo into the window" },
          { id: "b", text: "Tools: search, read, patch — pack only what the task needs" },
          { id: "c", text: "Weights fine-tuned on every file nightly" },
          { id: "d", text: "Unsandboxed exec with the developer's cloud keys" },
        ],
        correct: ["b"],
        explanation:
          "Long context still loses the middle. Tests in a jail are the judge. PR is HITL.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What verifies the change?",
        type: "single",
        options: [
          { id: "a", text: "Another LLM saying 'looks good'" },
          { id: "b", text: "Tests / typecheck / linters in a sandbox, then a human on the PR" },
          { id: "c", text: "BLEU against Stack Overflow" },
          { id: "d", text: "GPU utilization" },
        ],
        correct: ["b"],
        explanation:
          "Code as judge. Cap loops. Don't merge from the model.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a million-token window means you should dump the whole repository every turn.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "It's a bill, a leak surface, and a lost-in-the-middle problem. Use tools.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-research-multi-agent",
    conceptId: "design-research-multi-agent",
    questions: [
      {
        id: "q1",
        prompt: "Default research architecture in 2026?",
        type: "single",
        options: [
          { id: "a", text: "Six agents with every MCP server" },
          { id: "b", text: "One researcher with search/browse/notes until eval proves fan-out helps" },
          { id: "c", text: "No citations, just a fluent memo" },
          { id: "d", text: "Fine-tune the web into weights" },
        ],
        correct: ["b"],
        explanation:
          "Fan-out for independent parallel reads. Gatherers stay read-only. Cap $ and steps.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When is multi-agent worth it?",
        type: "single",
        options: [
          { id: "a", text: "Always, for the slide" },
          { id: "b", text: "When sub-questions are separable and eval shows coverage or wall-clock wins" },
          { id: "c", text: "For a single FAQ" },
          { id: "d", text: "When you want the synthesizer to also refund customers" },
        ],
        correct: ["b"],
        explanation:
          "Sequential support/coding often gets worse with more agents. Don't share god tools.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a fluent report without fetchable citations is a successful research agent.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Unsourced fluency is the failure mode. Verify citations when you can.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-design-ai-search",
    conceptId: "design-ai-search",
    questions: [
      {
        id: "q1",
        prompt: "What's the backbone of AI search?",
        type: "single",
        options: [
          { id: "a", text: "A chatbot that invents links" },
          { id: "b", text: "Query understanding → hybrid retrieve → rerank → hits (optional grounded snippet)" },
          { id: "c", text: "Fine-tuning on click logs only" },
          { id: "d", text: "Pure dense vectors for SKUs" },
        ],
        correct: ["b"],
        explanation:
          "Keep lexical search. Rerank is often the quality lever. Eval nDCG and faithfulness separately.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "If you only generate paragraphs and never measure ranking…",
        type: "single",
        options: [
          { id: "a", text: "You still have a search engine" },
          { id: "b", text: "You built a chatbot wearing a search badge" },
          { id: "c", text: "nDCG is optional forever" },
          { id: "d", text: "ACL is implied" },
        ],
        correct: ["b"],
        explanation:
          "Search success is the right documents at the top. Snippets are optional sugar.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: semantic-caching 'close' SKU queries is a safe default.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Similar is not the same product. Exact-cache popular queries; don't mix IDs.",
        difficulty: "easy",
      },
    ],
  },
  ...curriculumFillQuizzes,
];

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}
