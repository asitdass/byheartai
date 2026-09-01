import type { Quiz } from "@/lib/types";

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
];

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}
