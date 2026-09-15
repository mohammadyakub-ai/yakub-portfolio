export type Metric = { label: string; value: string; tone?: "bad" | "good" | "neutral" };

export type Project = {
  slug: string;
  chapter: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  image?: string;
  metrics?: Metric[];
  status?: string;
};

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    slug: "model-regression-detection-system",
    chapter: "02",
    title: "Model Regression Detection System",
    tagline: "A test suite for prompts, not just code",
    description:
      "Every prompt is versioned like source code and benchmarked against a 72-case golden dataset on every change. A run diffs itself against the previous baseline, flags per-category accuracy drops and slow drift over a 7-run rolling window, posts the result to Slack, and exits non-zero to block the merge — wired straight into GitHub Actions branch protection. Provider-agnostic: swap OpenAI for Groq with one environment variable.",
    stack: ["Python", "Pydantic", "GitHub Actions", "Docker", "OpenAI / Groq"],
    repo: "https://github.com/mohammadyakub-ai/model-regression-detection-system",
    image: `${base}project-cicd.webp`,
    metrics: [
      { label: "Pass rate", value: "68.1%", tone: "bad" },
      { label: "Delta vs. baseline", value: "−22.22pp", tone: "bad" },
      { label: "Regressions caught", value: "18 / 72 cases", tone: "bad" },
      { label: "Merge status", value: "Blocked", tone: "neutral" },
    ],
    status: "Prompt versioning → Async eval runner → Slack alert → Blocked merge",
  },
  {
    slug: "rag-pipeline-hybrid-search",
    chapter: "03",
    title: "Hybrid-Search RAG Pipeline",
    tagline: "Retrieval that knows when to say 'I don't know'",
    description:
      "A retrieval-augmented Q&A service over 155 real documentation files: dense ChromaDB search fused with BM25 sparse search via reciprocal rank fusion, then cross-encoder reranking. Every answer carries inline [N] citations that a second LLM pass verifies as supported or unsupported — citation accuracy is a measured number, not a claim. A composite confidence score gates the whole thing: below threshold, it returns a structured 'I don't know' instead of a guess. Three chunking strategies were benchmarked head-to-head against a 52-question golden set; semantic chunking won at 88% faithfulness.",
    stack: ["FastAPI", "ChromaDB", "BM25", "Cross-encoder rerank", "Docker", "Streamlit"],
    repo: "https://github.com/mohammadyakub-ai/rag-pipeline-hybrid-search",
    image: `${base}project-rag.webp`,
    metrics: [
      { label: "Faithfulness (winning strategy)", value: "88%", tone: "good" },
      { label: "Golden-set questions", value: "52", tone: "neutral" },
      { label: "Corpus indexed", value: "155 docs · 3,890 chunks", tone: "neutral" },
      { label: "Test suite", value: "142 passing", tone: "good" },
    ],
    status: "Hybrid retrieval → Rerank → Cited generation → Confidence gate",
  },
];
