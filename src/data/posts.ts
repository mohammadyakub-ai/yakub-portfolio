export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "pipe"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "testing-prompts-like-code",
    title: "The Case for Versioning Prompts Like Source Code",
    date: "September 2026",
    readTime: "6 min read",
    excerpt:
      "Every prompt is versioned like source code and benchmarked against a golden dataset on every change. Here's how I built a Model Regression Detection System that diffs itself against a baseline, flags per-category accuracy drops, and blocks the merge when things regress.",
    tags: ["LLM Evaluation", "CI/CD", "Python"],
    body: [
      {
        type: "p",
        text: "Every prompt is versioned like source code and benchmarked against a golden dataset on every change. Here's how I built a Model Regression Detection System that diffs itself against a baseline, flags per-category accuracy drops, and blocks the merge when things regress.",
      },
      {
        type: "h2",
        text: "Prompts are code now",
      },
      {
        type: "p",
        text: "Once an application depends on an LLM call, the prompt becomes part of the product. It can be changed by anyone, at any time, with no compiler error and no test suite watching. Left untracked, that's a regression you don't notice until users do.",
      },
      {
        type: "p",
        text: "The fix is to give prompts the same treatment as source code: version them, and validate every change against a fixed benchmark. In this system, every prompt is versioned like source code and benchmarked against a 72-case golden dataset on every change.",
      },
      {
        type: "h2",
        text: "What a run does",
      },
      {
        type: "ul",
        items: [
          "A run diffs itself against the previous baseline.",
          "It flags per-category accuracy drops and slow drift over a 7-run rolling window.",
          "It posts the result to Slack.",
          "It exits non-zero to block the merge — wired straight into GitHub Actions branch protection.",
        ],
      },
      {
        type: "p",
        text: "It is provider-agnostic by design: swapping OpenAI for Groq is one environment variable, not a rewrite.",
      },
      {
        type: "h2",
        text: "What the failure looks like",
      },
      {
        type: "p",
        text: "A real run tells the story. A pass rate of 68.1%. A −22.22pp delta against the previous baseline. 18 of 72 cases regressing. Merge status: blocked.",
      },
      {
        type: "p",
        text: "No human had to read a single response. The suite decided, on its own, that this prompt was not ready to ship.",
      },
      {
        type: "h2",
        text: "The pipeline, in one line",
      },
      {
        type: "pipe",
        text: "Prompt versioning → Async eval runner → Slack alert → Blocked merge",
      },
      {
        type: "p",
        text: "The point isn't the specific numbers — it's the loop. Prompts change, baselines move, and if there's no test suite behind the prompt, 'looks good in the demo' becomes the entire QA process.",
      },
    ],
  },
  {
    slug: "hybrid-search-rag-faithfulness",
    title: "Building a RAG Pipeline That Knows When to Say \"I Don't Know\"",
    date: "September 2026",
    readTime: "8 min read",
    excerpt:
      "A retrieval-augmented Q&A service over 155 real documentation files: dense ChromaDB search fused with BM25 sparse search via reciprocal rank fusion, cross-encoder reranking, and a composite confidence gate. Three chunking strategies benchmarked head-to-head against a 52-question golden set — semantic chunking won at 88% faithfulness.",
    tags: ["RAG", "FastAPI", "Vector Search", "Evaluation"],
    body: [
      {
        type: "p",
        text: "A retrieval-augmented Q&A service over 155 real documentation files — dense search fused with sparse search, reranked, and gated by a confidence score. Here's what it looks like when retrieval is allowed to say \"I don't know.\"",
      },
      {
        type: "h2",
        text: "The setup",
      },
      {
        type: "p",
        text: "The service answers questions over 155 real documentation files — not a toy corpus. Dense ChromaDB search is fused with BM25 sparse search via reciprocal rank fusion, then a cross-encoder reranks the candidates before generation.",
      },
      {
        type: "h2",
        text: "Citations you can check",
      },
      {
        type: "p",
        text: "Every answer carries inline [N] citations, and a second LLM pass verifies each one as supported or unsupported against the source. Citation accuracy is a measured number, not a claim.",
      },
      {
        type: "h2",
        text: "A confidence gate on top",
      },
      {
        type: "p",
        text: "A composite confidence score gates the whole pipeline. Below threshold, it returns a structured \"I don't know\" instead of a guess — the difference between an assistant that fails loudly and one that fails silently.",
      },
      {
        type: "h2",
        text: "Chunking was the experiment",
      },
      {
        type: "p",
        text: "Three chunking strategies were benchmarked head-to-head against a 52-question golden set. Semantic chunking won at 88% faithfulness.",
      },
      {
        type: "h2",
        text: "The numbers",
      },
      {
        type: "ul",
        items: [
          "88% faithfulness — winning chunking strategy",
          "52 golden-set questions",
          "155 docs · 3,890 chunks indexed",
          "142 passing tests in the suite",
        ],
      },
      {
        type: "pipe",
        text: "Hybrid retrieval → Rerank → Cited generation → Confidence gate",
      },
      {
        type: "p",
        text: "RAG gets judged on vibes far too often. This one is testable because retrieval is treated as a measured system — and because refusing to answer is an accepted output.",
      },
    ],
  },
];