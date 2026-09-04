import type { Quiz } from "@/lib/types";

/** Quizzes for the 2026 curriculum fill (foundations spine, ML, DL, LLM 2026). */
export const curriculumFillQuizzes: Quiz[] = [
  {
    id: "quiz-parameters-vs-hyperparameters",
    conceptId: "parameters-vs-hyperparameters",
    questions: [
      {
        id: "q1",
        prompt: "What is the difference between a parameter and a hyperparameter?",
        type: "single",
        options: [
          { id: "a", text: "Parameters are learning rates; hyperparameters are weights" },
          { id: "b", text: "Parameters are learned from data during training; hyperparameters are set before training" },
          { id: "c", text: "They are two names for the same numbers" },
          { id: "d", text: "Hyperparameters only exist in neural nets, not in linear models" },
        ],
        correct: ["b"],
        explanation:
          "Weights and biases are parameters. Learning rate, depth, batch size, and k in k-means are hyperparameters you choose (or search).",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which of these are hyperparameters? (Select all that apply.)",
        type: "multiple",
        options: [
          { id: "a", text: "Learning rate" },
          { id: "b", text: "The weight connecting neuron 3 to neuron 7 after training" },
          { id: "c", text: "Number of trees in a random forest" },
          { id: "d", text: "Dropout rate" },
        ],
        correct: ["a", "c", "d"],
        explanation:
          "The trained weight is a parameter. Learning rate, forest size, and dropout are chosen before (or around) training.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should tune hyperparameters on the same set you use for the final score.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Tune on validation. Report on a held-out test set. Tuning on the test set is leaking the exam answers.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-datasets-features-labels",
    conceptId: "datasets-features-labels",
    questions: [
      {
        id: "q1",
        prompt: "In a table of houses, price is usually the…",
        type: "single",
        options: [
          { id: "a", text: "Feature" },
          { id: "b", text: "Label (target)" },
          { id: "c", text: "Hyperparameter" },
          { id: "d", text: "Loss" },
        ],
        correct: ["b"],
        explanation:
          "Features are inputs you will have at prediction time (sqft, zip). The label is what you want predicted (price).",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What is leakage?",
        type: "single",
        options: [
          { id: "a", text: "Using too few rows" },
          { id: "b", text: "A feature that would not be available at prediction time, or test information leaking into training" },
          { id: "c", text: "Shuffling the training set" },
          { id: "d", text: "Having both numeric and categorical columns" },
        ],
        correct: ["b"],
        explanation:
          "Leakage makes metrics look great and production fail. Example: including 'days_until_default' when predicting default.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: unsupervised learning still uses a label column.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Unsupervised methods (clustering, some autoencoders) work from features only. Labels are the supervised signal.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-loss-functions",
    conceptId: "loss-functions",
    questions: [
      {
        id: "q1",
        prompt: "What does a loss function do?",
        type: "single",
        options: [
          { id: "a", text: "Picks the next token" },
          { id: "b", text: "Turns prediction error into a number training tries to shrink" },
          { id: "c", text: "Stores the dataset" },
          { id: "d", text: "Guarantees the model is fair" },
        ],
        correct: ["b"],
        explanation:
          "Training is 'make this number smaller.' MSE for numbers, cross-entropy for classes are the usual workhorses.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "You are predicting a house price. A sensible default loss is…",
        type: "single",
        options: [
          { id: "a", text: "Cross-entropy" },
          { id: "b", text: "MSE (or MAE)" },
          { id: "c", text: "Hinge loss only" },
          { id: "d", text: "Accuracy" },
        ],
        correct: ["b"],
        explanation:
          "Regression uses a distance on numbers (MSE/MAE). Cross-entropy is for class probabilities. Accuracy is a metric, not a training loss.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a smaller training loss always means a better product.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Training loss can go down while you overfit. Validation/test (and the metric that matches the job) are what count.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-optimization-gradient-descent",
    conceptId: "optimization-gradient-descent",
    questions: [
      {
        id: "q1",
        prompt: "The gradient descent update is…",
        type: "single",
        options: [
          { id: "a", text: "w ← w + η ∇L  (walk uphill)" },
          { id: "b", text: "w ← w − η ∇L  (walk downhill on the loss)" },
          { id: "c", text: "w ← η × L" },
          { id: "d", text: "w is never updated; only hyperparameters change" },
        ],
        correct: ["b"],
        explanation:
          "Subtract learning rate times the gradient of the loss. That is downhill. Add and you climb toward higher loss.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "If the learning rate is far too large, what happens?",
        type: "single",
        options: [
          { id: "a", text: "Training always converges faster" },
          { id: "b", text: "Steps can overshoot and the loss can explode or oscillate" },
          { id: "c", text: "The model cannot overfit" },
          { id: "d", text: "Gradients become exactly zero" },
        ],
        correct: ["b"],
        explanation:
          "η is a step size. Too small: crawl. Too large: jump over the bowl and diverge. That is why it is a hyperparameter.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: SGD using mini-batches is still gradient descent — just a noisy estimate of the full-data gradient.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Full-batch uses every row. Mini-batch SGD uses a slice; Adam/AdamW add adaptive scaling. Same downhill idea.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-backpropagation",
    conceptId: "backpropagation",
    questions: [
      {
        id: "q1",
        prompt: "Backpropagation is…",
        type: "single",
        options: [
          { id: "a", text: "A special loss for images" },
          { id: "b", text: "The chain rule run backward so every weight gets a gradient" },
          { id: "c", text: "Inference with frozen weights" },
          { id: "d", text: "A type of clustering" },
        ],
        correct: ["b"],
        explanation:
          "Forward pass computes loss. Backward pass (backprop) assigns blame to each weight. Then gradient descent steps.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "What do you need from the forward pass to backprop?",
        type: "single",
        options: [
          { id: "a", text: "Nothing — gradients appear from the dataset alone" },
          { id: "b", text: "Activations (and the computation graph) so local derivatives can chain" },
          { id: "c", text: "Only the learning rate" },
          { id: "d", text: "A second unlabeled dataset" },
        ],
        correct: ["b"],
        explanation:
          "Autograd stores the forward graph. Each op has a local derivative; backprop multiplies them (chain rule).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: at inference you still run backpropagation on every user request.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Serving is a forward pass with frozen weights. Backprop is for training (and some rare research tricks), not chat replies.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-reasoning-models",
    conceptId: "reasoning-models",
    questions: [
      {
        id: "q1",
        prompt: "What makes a reasoning / extended-thinking model expensive?",
        type: "single",
        options: [
          { id: "a", text: "The user typed a long prompt" },
          { id: "b", text: "Extra decode tokens spent thinking (test-time compute), often hidden" },
          { id: "c", text: "It always fine-tunes on every request" },
          { id: "d", text: "Embeddings get larger" },
        ],
        correct: ["b"],
        explanation:
          "A short question can still burn thousands of thinking tokens. Cost tracks decode, not prompt length.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "When should you usually NOT use a reasoning profile?",
        type: "single",
        options: [
          { id: "a", text: "Multi-step proofs and hard coding" },
          { id: "b", text: "Easy FAQ, closed-label classification, tight latency/cost SLOs" },
          { id: "c", text: "When you have a verifiable unit test and want max accuracy" },
          { id: "d", text: "When eval shows thinking actually lifts the hard slice" },
        ],
        correct: ["b"],
        explanation:
          "Reasoning is a budget you spend on hard tasks. FAQ and routing belong on a cheap/SLM path with a thinking cap elsewhere.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a thinking-token budget is a product control (cost, latency, DoS), not optional decoration.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Unbounded thinking is unbounded spend. Cap it, eval the truncated slice, and treat runaway decode as a security/cost incident.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-streaming",
    conceptId: "streaming",
    questions: [
      {
        id: "q1",
        prompt: "TTFT vs TPOT — which is which?",
        type: "single",
        options: [
          { id: "a", text: "TTFT is time to first token; TPOT is time per output token after that" },
          { id: "b", text: "TTFT is total tokens; TPOT is prompt tokens" },
          { id: "c", text: "They are two names for latency to the full answer" },
          { id: "d", text: "TTFT only exists for embeddings" },
        ],
        correct: ["a"],
        explanation:
          "Streaming exists so the user sees a first token without waiting for the last. Prefill dominates TTFT; decode dominates TPOT.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A practical reason to stream in a chat UI is…",
        type: "single",
        options: [
          { id: "a", text: "It makes the model smarter" },
          { id: "b", text: "Perceived latency drops; you can cancel; you can start rendering Markdown early" },
          { id: "c", text: "It removes the need for a context window" },
          { id: "d", text: "JSON schemas become optional" },
        ],
        correct: ["b"],
        explanation:
          "The answer is the same tokens. UX and cancellation change. Structured output + streaming is trickier until the object is complete.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: reasoning models may stream hidden thinking tokens you should not show, then the visible answer.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "APIs often split reasoning vs output streams. Don't dump hidden CoT into the user transcript unless the product requires it.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-small-language-models",
    conceptId: "small-language-models",
    questions: [
      {
        id: "q1",
        prompt: "In 2026 production, SLMs are most often used for…",
        type: "single",
        options: [
          { id: "a", text: "Replacing every frontier model on every turn" },
          { id: "b", text: "Easy tasks, on-device/privacy, routing, extraction — with a larger model for hard turns" },
          { id: "c", text: "Training from scratch on a laptop instead of using APIs" },
          { id: "d", text: "Only image generation" },
        ],
        correct: ["b"],
        explanation:
          "The pattern is a swarm of small specialists + a big model for hard reasoning. Trophy 'one model everywhere' is a cost and latency trap.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which helps an SLM fit on a phone or a single cheap GPU?",
        type: "single",
        options: [
          { id: "a", text: "Longer hidden thinking by default" },
          { id: "b", text: "Quantization (and often distillation from a teacher)" },
          { id: "c", text: "Removing the tokenizer" },
          { id: "d", text: "Training on the production eval set" },
        ],
        correct: ["b"],
        explanation:
          "Fewer bits per weight (quantization) and a distilled student are the usual size/speed levers. See the quantization lesson.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: a 3B model is automatically worse than a frontier model on every task.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "On closed labels, extraction, and routing, small models often match or beat a distracted giant — and they win on cost, TTFT, and privacy.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-supervised-unsupervised-rl",
    conceptId: "supervised-unsupervised-rl",
    questions: [
      {
        id: "q1",
        prompt: "Supervised learning requires…",
        type: "single",
        options: [
          { id: "a", text: "A reward after each action" },
          { id: "b", text: "Labeled examples: input paired with the correct output" },
          { id: "c", text: "No data at all" },
          { id: "d", text: "Only clustering" },
        ],
        correct: ["b"],
        explanation:
          "Supervised = features + labels. Unsupervised = structure without labels. RL = trial and error with rewards.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which task is unsupervised?",
        type: "single",
        options: [
          { id: "a", text: "Spam vs not-spam with a labeled mailbox" },
          { id: "b", text: "Predicting house price from sold listings" },
          { id: "c", text: "Grouping customers into segments with no pre-named groups" },
          { id: "d", text: "A robot getting +1 for a successful grasp" },
        ],
        correct: ["c"],
        explanation:
          "No label column: clustering. Spam and prices are supervised. The robot is RL.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: modern LLM preference training (RLHF/GRPO) is closer to RL than to plain labeled classification.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "You optimize a reward/preference signal, not a single gold token sequence like classic supervised spam labels. SFT is still supervised.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-regression",
    conceptId: "regression",
    questions: [
      {
        id: "q1",
        prompt: "Regression predicts…",
        type: "single",
        options: [
          { id: "a", text: "A number (continuous target)" },
          { id: "b", text: "A class name" },
          { id: "c", text: "A cluster id with no training" },
          { id: "d", text: "The next action in a game only" },
        ],
        correct: ["a"],
        explanation:
          "Price, delay, temperature, score. Classes are classification. Logistic regression is a classifier despite the name.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "MSE (mean squared error) penalizes…",
        type: "single",
        options: [
          { id: "a", text: "Only the sign of the error" },
          { id: "b", text: "Squared residuals, so large misses hurt more than small ones" },
          { id: "c", text: "False positives in a confusion matrix" },
          { id: "d", text: "The number of trees" },
        ],
        correct: ["b"],
        explanation:
          "MSE = average of (y − ŷ)². Outliers dominate. MAE is more robust; pick the loss that matches the cost of a miss.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: logistic regression is the standard model when the target is 0/1 spam.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Despite the word 'regression,' logistic regression outputs a class probability. The regression lesson's numeric line would be the wrong tool.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-classification",
    conceptId: "classification",
    questions: [
      {
        id: "q1",
        prompt: "A decision boundary is…",
        type: "single",
        options: [
          { id: "a", text: "The line/surface that separates classes in feature space" },
          { id: "b", text: "The learning rate" },
          { id: "c", text: "A cluster without labels" },
          { id: "d", text: "The MSE minimum" },
        ],
        correct: ["a"],
        explanation:
          "The model carves space into regions labeled spam/ham or cat/dog. Linear models get a line; trees get axis-aligned splits.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Binary vs multiclass — which is binary?",
        type: "single",
        options: [
          { id: "a", text: "dog / cat / bird" },
          { id: "b", text: "spam / not spam" },
          { id: "c", text: "k-means with k=5" },
          { id: "d", text: "Predicting tomorrow's temperature" },
        ],
        correct: ["b"],
        explanation:
          "Two labels = binary. Three breeds = multiclass. k-means is clustering. Temperature is regression.",
        difficulty: "easy",
      },
      {
        id: "q3",
        prompt: "True or false: clustering is just classification without you naming the classes first.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Classification learns a named target you already have. Clustering invents groups. Do not treat cluster ids as ground-truth labels.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-clustering",
    conceptId: "clustering",
    questions: [
      {
        id: "q1",
        prompt: "k-means needs you to choose…",
        type: "single",
        options: [
          { id: "a", text: "A label for every row" },
          { id: "b", text: "k, the number of clusters (a hyperparameter)" },
          { id: "c", text: "A reward function" },
          { id: "d", text: "The test-set accuracy first" },
        ],
        correct: ["b"],
        explanation:
          "k is not learned from a label. You pick it (elbow, silhouette, business constraint) and the algorithm places centroids.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A cluster is…",
        type: "single",
        options: [
          { id: "a", text: "A human-official class like 'spam'" },
          { id: "b", text: "A group of nearby unlabeled points under some distance" },
          { id: "c", text: "Always a Gaussian blob in 2D" },
          { id: "d", text: "The same as a neural layer" },
        ],
        correct: ["b"],
        explanation:
          "Similarity is a choice (Euclidean, cosine). Clusters are not classes until a human names and validates them.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should report accuracy of k-means against labels you never had.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Without labels, use internal metrics, downstream utility, and sanity checks. Accuracy requires a named target.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-overfitting-vs-underfitting",
    conceptId: "overfitting-vs-underfitting",
    questions: [
      {
        id: "q1",
        prompt: "Overfitting means…",
        type: "single",
        options: [
          { id: "a", text: "Train error high, val error high" },
          { id: "b", text: "Train error tiny, val/test error much worse — you memorized noise" },
          { id: "c", text: "The model is a linear line on a linear problem" },
          { id: "d", text: "You used cross-validation" },
        ],
        correct: ["b"],
        explanation:
          "Underfit: too simple, both errors high. Overfit: aced the homework, failed the exam. Watch the two curves.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Which fights overfitting? (Select all that apply.)",
        type: "multiple",
        options: [
          { id: "a", text: "More representative data" },
          { id: "b", text: "Regularization / smaller trees / dropout" },
          { id: "c", text: "Training longer on the same tiny set with a huge model" },
          { id: "d", text: "A held-out validation set (and stopping when val degrades)" },
        ],
        correct: ["a", "b", "d"],
        explanation:
          "Capacity + tiny data + endless training is the overfitting recipe. Data, simpler models, and val-based stopping are the antidotes.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: 100% training accuracy is proof the model will work in production.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "It often means you memorized. Production is new rows. Validation (and later a frozen eval set) is the adult metric.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-decision-trees",
    conceptId: "decision-trees",
    questions: [
      {
        id: "q1",
        prompt: "A decision tree predicts by…",
        type: "single",
        options: [
          { id: "a", text: "A single weighted sum like a linear model" },
          { id: "b", text: "Asking a sequence of feature questions until a leaf" },
          { id: "c", text: "Convolving a filter over pixels" },
          { id: "d", text: "Sampling the next token" },
        ],
        correct: ["b"],
        explanation:
          "Each split is a yes/no (or threshold) on a column. Leaves hold a class vote or a mean for regression. Easy to read, eager to overfit.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Deep trees on tabular data usually…",
        type: "single",
        options: [
          { id: "a", text: "Cannot overfit" },
          { id: "b", text: "Fit the training sheet extremely well and often fail new rows unless pruned or ensembled" },
          { id: "c", text: "Are the 2026 default for language" },
          { id: "d", text: "Do not use features" },
        ],
        correct: ["b"],
        explanation:
          "Depth is capacity. Forests and boosting exist because one deep tree memorizes. Language is a neural/transformer job.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: trees handle mixed numeric and categorical tabular columns more naturally than a raw neural net.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Threshold splits love spreadsheets. Neural nets want scaled numeric tensors and encodings. That is why boosting still wins a lot of tabular Kaggle-style work.",
        difficulty: "medium",
      },
    ],
  },
  {
    id: "quiz-random-forests",
    conceptId: "random-forests",
    questions: [
      {
        id: "q1",
        prompt: "A random forest reduces one tree's superstition by…",
        type: "single",
        options: [
          { id: "a", text: "Training one deeper tree" },
          { id: "b", text: "Averaging/voting many trees fit on bootstrap rows and random feature subsets" },
          { id: "c", text: "Using reinforcement learning" },
          { id: "d", text: "Removing all hyperparameters" },
        ],
        correct: ["b"],
        explanation:
          "Bagging + feature subsample makes trees disagree. The crowd's average is stabler than any one overfit tree.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Compared with gradient boosting, forests are typically…",
        type: "single",
        options: [
          { id: "a", text: "Sequential residual-fitters that usually win raw tabular accuracy" },
          { id: "b", text: "Embarrassingly parallel trees; often slightly weaker than well-tuned boosting, stronger than one tree" },
          { id: "c", text: "The architecture behind GPT" },
          { id: "d", text: "Unsupervised only" },
        ],
        correct: ["b"],
        explanation:
          "Boosting adds trees in sequence to fix leftovers (usually sharper). Forests train trees independently (simpler, parallel).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you still need a validation set with a random forest.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Ensembles overfit less than one tree, not never. n_estimators, max_depth, and features still get tuned on val or OOB.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-gradient-boosting",
    conceptId: "gradient-boosting",
    questions: [
      {
        id: "q1",
        prompt: "Gradient boosting builds trees…",
        type: "single",
        options: [
          { id: "a", text: "All at once on bootstrap copies, then averages" },
          { id: "b", text: "In sequence, each fitting the leftover error of the current ensemble" },
          { id: "c", text: "Only on images" },
          { id: "d", text: "Without a loss function" },
        ],
        correct: ["b"],
        explanation:
          "Each new tree is trained on residuals (or the gradient of the loss). That is the 'boosting' part. Forests bag in parallel instead.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "In 2026, XGBoost/LightGBM-style models are still the default for…",
        type: "single",
        options: [
          { id: "a", text: "Open-ended language generation" },
          { id: "b", text: "Tabular business data (credits, churn, pricing)" },
          { id: "c", text: "Pixel-level ImageNet classification SOTA" },
          { id: "d", text: "Speech recognition SOTA" },
        ],
        correct: ["b"],
        explanation:
          "Spreadsheets: boosting. Images/language/speech: deep nets / transformers. Don't start an LLM to predict a refund flag from 40 columns.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: more boosting rounds always improve validation score.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "Too many rounds overfit. Early stopping on validation is the usual control, same idea as neural net early stopping.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-classification-metrics",
    conceptId: "classification-metrics",
    questions: [
      {
        id: "q1",
        prompt: "Precision vs recall for spam: precision is…",
        type: "single",
        options: [
          { id: "a", text: "Of all real spam, how many you caught" },
          { id: "b", text: "Of the emails you flagged, how many were actually spam" },
          { id: "c", text: "Overall percent correct including the easy ham" },
          { id: "d", text: "The area under the MSE curve" },
        ],
        correct: ["b"],
        explanation:
          "Precision = TP/(TP+FP). Recall = TP/(TP+FN). Accuracy can be 99% if you never flag the rare class.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "You would optimize recall (and accept more false flags) when…",
        type: "single",
        options: [
          { id: "a", text: "A false alarm is ruinous and a miss is cheap" },
          { id: "b", text: "Missing the rare class is the disaster (fraud, cancer screen) and a human reviews flags" },
          { id: "c", text: "You only care about looking good on a slide" },
          { id: "d", text: "The dataset is perfectly balanced and both errors cost the same" },
        ],
        correct: ["b"],
        explanation:
          "Match the metric to the cost. F1 balances precision and recall. ROC-AUC looks at ranking across thresholds.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: 94% accuracy on 100 emails with 10 spam can still hide a terrible spam filter.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "A model that never flags spam gets 90% accuracy. Always look at the confusion matrix for the class you care about.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-cross-validation",
    conceptId: "cross-validation",
    questions: [
      {
        id: "q1",
        prompt: "k-fold cross-validation does what?",
        type: "single",
        options: [
          { id: "a", text: "Trains once on all data and tests on the same rows" },
          { id: "b", text: "Rotates which fold is held out so every row is scored once as 'test'" },
          { id: "c", text: "Increases k forever to guarantee a better model" },
          { id: "d", text: "Removes the need for a final test set after you peeked at all folds for selection" },
        ],
        correct: ["b"],
        explanation:
          "k models, k scores, average them. Still: if you use CV to pick a model, keep a frozen outer test set when you can.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "For time series, shuffling into random folds is dangerous because…",
        type: "single",
        options: [
          { id: "a", text: "It is slower" },
          { id: "b", text: "Future information leaks into the past — you need a forward/rolling split" },
          { id: "c", text: "Trees cannot run on dates" },
          { id: "d", text: "k must be 2" },
        ],
        correct: ["b"],
        explanation:
          "IID shuffle CV is for rows that do not peek at tomorrow. Time, groups, and leakage need a split that respects reality.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: LLM gold-set eval is the same idea as a frozen test fold — do not train or few-shot on it.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "A demo is one fold of luck. A frozen eval set is how you know the RAG/agent actually improved. Same discipline as classical CV.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-neurons-layers-activations",
    conceptId: "neurons-layers-activations",
    questions: [
      {
        id: "q1",
        prompt: "A neuron computes…",
        type: "single",
        options: [
          { id: "a", text: "Only a max-pool" },
          { id: "b", text: "An affine map (Wx+b) then a nonlinearity (ReLU, GELU, …)" },
          { id: "c", text: "The loss directly" },
          { id: "d", text: "A random forest vote" },
        ],
        correct: ["b"],
        explanation:
          "Without the nonlinearity, stacked layers collapse to one linear map. ReLU/GELU are why depth can actually help.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "If every activation is the identity (no nonlinearity), a 12-layer MLP is…",
        type: "single",
        options: [
          { id: "a", text: "Strictly more powerful than 1 layer" },
          { id: "b", text: "Equivalent to one big linear/affine map" },
          { id: "c", text: "A convolutional network" },
          { id: "d", text: "Unable to overfit" },
        ],
        correct: ["b"],
        explanation:
          "Composition of linear maps is linear. Depth needs activations (or other nonlinear ops).",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: GELU is common in transformers; ReLU is the classic MLP/CNN default.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Sigmoid/tanh saturate (vanishing gradients). ReLU is simple and fast. GELU/SwiGLU show up in modern transformers.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-cnns",
    conceptId: "cnns",
    questions: [
      {
        id: "q1",
        prompt: "Weight sharing in a convolution means…",
        type: "single",
        options: [
          { id: "a", text: "Each pixel has its own unrelated dense net" },
          { id: "b", text: "The same small filter slides everywhere, so 'edge' is detected on the left and the right" },
          { id: "c", text: "You do not need activations" },
          { id: "d", text: "The model only works on text" },
        ],
        correct: ["b"],
        explanation:
          "Translation-friendly detectors. Pooling downsamples. That is why CNNs ate vision before ViTs.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "In 2026, CNNs are…",
        type: "single",
        options: [
          { id: "a", text: "Dead; never used" },
          { id: "b", text: "Still used in vision backbones and hybrids; not what you pick for language SOTA" },
          { id: "c", text: "The architecture of GPT-class LLMs" },
          { id: "d", text: "Only for tabular churn" },
        ],
        correct: ["b"],
        explanation:
          "ViTs and hybrids compete in vision. Language is transformers. CNNs remain a real production tool, not a museum piece.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: pooling's job is mainly to shrink the spatial map and add a bit of invariance.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Max/avg pool downsample. Strided convs can also downsample. Either way you do not want a dense net on every raw pixel forever.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-rnns",
    conceptId: "rnns",
    questions: [
      {
        id: "q1",
        prompt: "An RNN processes a sequence…",
        type: "single",
        options: [
          { id: "a", text: "All positions in parallel like a transformer" },
          { id: "b", text: "One step at a time, mixing the new input with a hidden state" },
          { id: "c", text: "By sliding a 3×3 filter on pixels only" },
          { id: "d", text: "Without any parameters" },
        ],
        correct: ["b"],
        explanation:
          "h_t = f(h_{t-1}, x_t). Sequential by design — that is the feature and the bottleneck.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "Vanishing gradients in vanilla RNNs mean…",
        type: "single",
        options: [
          { id: "a", text: "Early tokens' influence dies as you unroll many steps" },
          { id: "b", text: "The learning rate is always 0" },
          { id: "c", text: "Attention heads explode" },
          { id: "d", text: "The tokenizer failed" },
        ],
        correct: ["a"],
        explanation:
          "Repeated multiply by a Jacobian < 1 shrinks the signal. LSTMs/GRUs mitigate; transformers skip the long chain.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: you should start a new NLP product in 2026 with a vanilla RNN instead of a transformer.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["false"],
        explanation:
          "RNNs matter historically and in a few sequential niches. Language products start from transformers (or an API on top of one).",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-lstms-grus",
    conceptId: "lstms-grus",
    questions: [
      {
        id: "q1",
        prompt: "LSTM gates exist to…",
        type: "single",
        options: [
          { id: "a", text: "Remove the need for any hidden state" },
          { id: "b", text: "Let the cell keep, write, or forget information instead of smashing it every step" },
          { id: "c", text: "Turn the model into a CNN" },
          { id: "d", text: "Compute self-attention" },
        ],
        correct: ["b"],
        explanation:
          "Forget/input/output gates (LSTM) or reset/update (GRU) are learned valves. That is why they beat vanilla RNNs on longer memory.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "GRUs compared with LSTMs are typically…",
        type: "single",
        options: [
          { id: "a", text: "More gates, strictly better always" },
          { id: "b", text: "A simpler gated RNN; often similar quality, cheaper per step" },
          { id: "c", text: "Transformers with a different name" },
          { id: "d", text: "Unsupervised clustering" },
        ],
        correct: ["b"],
        explanation:
          "GRU folds some LSTM machinery. Neither trains in parallel across time like a transformer.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: LSTMs still show up in some time-series stacks; they lost NLP to transformers.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Know them so you can read old papers and special sequential models. Don't pick an LSTM to build a chatbot in 2026.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-autoencoders",
    conceptId: "autoencoders",
    questions: [
      {
        id: "q1",
        prompt: "An autoencoder trains by…",
        type: "single",
        options: [
          { id: "a", text: "Predicting a human label" },
          { id: "b", text: "Compressing to a bottleneck and reconstructing the input" },
          { id: "c", text: "Fooling a discriminator only" },
          { id: "d", text: "Next-token prediction exclusively" },
        ],
        correct: ["b"],
        explanation:
          "The useful product is often the code (embedding), not the pixels you rebuilt. Denoising and VAEs are cousins.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A too-wide bottleneck with no denoising often…",
        type: "single",
        options: [
          { id: "a", text: "Forces a meaningful compressed representation" },
          { id: "b", text: "Lets the net copy the input (identity) without learning structure" },
          { id: "c", text: "Becomes a GAN" },
          { id: "d", text: "Removes the decoder" },
        ],
        correct: ["b"],
        explanation:
          "Pressure (small code, noise, a VAE prior) is what makes the representation useful. Related: embedding lessons.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: the latent code of an autoencoder is a kind of embedding.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Same idea as the embeddings category: a vector you can compare. Different training objective than contrastive text embeddings.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-gans",
    conceptId: "gans",
    questions: [
      {
        id: "q1",
        prompt: "A GAN is two networks:…",
        type: "single",
        options: [
          { id: "a", text: "Encoder and decoder reconstructing x" },
          { id: "b", text: "A generator that fakes data and a discriminator that tries to tell real from fake" },
          { id: "c", text: "Query and key in attention" },
          { id: "d", text: "A tree and a forest" },
        ],
        correct: ["b"],
        explanation:
          "Adversarial training. Unstable, historically important. In 2026, diffusion/flow models dominate shipped image generation.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "If you are shipping photorealistic image generation in 2026, the usual stack is…",
        type: "single",
        options: [
          { id: "a", text: "A vanilla 2014 GAN as the default" },
          { id: "b", text: "Diffusion or flow models (GANs still teach the adversarial idea)" },
          { id: "c", text: "k-means on pixels" },
          { id: "d", text: "An LSTM language model" },
        ],
        correct: ["b"],
        explanation:
          "Learn GANs so the word 'adversarial' is not magic. Don't start a new image product on a brittle GAN when diffusion is the working tool.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: GAN training can collapse so the generator only makes one boring fake.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "Mode collapse and unstable oscillations are why people moved on for generation, even though the two-player idea remains useful.",
        difficulty: "easy",
      },
    ],
  },
  {
    id: "quiz-why-transformers-replaced-rnns",
    conceptId: "why-transformers-replaced-rnns",
    questions: [
      {
        id: "q1",
        prompt: "The main training-time win of transformers over RNNs is…",
        type: "single",
        options: [
          { id: "a", text: "They have no parameters" },
          { id: "b", text: "All tokens can be processed in parallel; any two tokens are one attention hop apart" },
          { id: "c", text: "They cannot overfit" },
          { id: "d", text: "They do not need data" },
        ],
        correct: ["b"],
        explanation:
          "RNNs unroll in time (slow, vanishing memory). Attention is parallel on GPUs and has a direct path between distant tokens.",
        difficulty: "easy",
      },
      {
        id: "q2",
        prompt: "A remaining niche for recurrent models is…",
        type: "single",
        options: [
          { id: "a", text: "Training GPT-class LLMs from scratch as the default" },
          { id: "b", text: "Some streaming / long sequential sensors where you truly want a cheap running state" },
          { id: "c", text: "Replacing all convolution in ImageNet" },
          { id: "d", text: "Vector search" },
        ],
        correct: ["b"],
        explanation:
          "Know the niche. Don't pick an RNN for a chatbot. Next lesson in the graph: self-attention.",
        difficulty: "medium",
      },
      {
        id: "q3",
        prompt: "True or false: 'attention is all you need' meant you can drop recurrence and convolution for sequence transduction.",
        type: "true-false",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" },
        ],
        correct: ["true"],
        explanation:
          "That 2017 bet is why this site's next category is Transformers. CNNs still exist for vision; recurrence is no longer the NLP backbone.",
        difficulty: "easy",
      },
    ],
  },
];
