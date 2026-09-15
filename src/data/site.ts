const base = import.meta.env.BASE_URL;

export const site = {
  name: "Mohammad Yakub",
  role: "AI/ML Engineer",
  targetRoles: [
    "AI Engineer",
    "ML Engineer",
    "AI/ML Engineer",
    "Agentic AI Engineer",
    "AI Associate Engineer",
    "Gen AI Engineer",
    "AI Developer",
    "Gen AI Developer",
  ],
  github: "https://github.com/mohammadyakub-ai",
  linkedin: "https://www.linkedin.com/in/yakubmohammadd/",
  resume: `${base}Mohammad_Yakub_Resume.pdf`,
  education: {
    school: "KL University",
    degree: "B.Tech (Hons), Artificial Intelligence & Data Science",
    cgpa: "9.26",
  },
  paper: {
    id: "645",
    title:
      "Dual-Direction Automatic Emergency Braking System Based on Sensor Fusion and Deep Learning",
    venue: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/11468052",
  },
  experience: {
    role: "Research Intern",
    organization: "Indian Institute of Information Technology (IIIT Dharwad)",
    lab: "Humanoid Lab",
    location: "Hubli, Karnataka, India",
    mode: "On-site",
    type: "Internship",
    duration: "May 2024 — July 2024",
    skills: ["Machine Learning", "ETL", "Data Pipelines"],
    summary:
      "Contributed to research and development of AI-based speech processing solutions by building data pipelines and working with machine learning models in a collaborative research environment.",
    highlights:
      "Built an automated audio data pipeline using yt-dlp and pydub, trained a Retrieval-based Voice Conversion (RVC) model, and achieved melody preservation with an F0 RMSE of 39.54 Hz.",
    // Add a file to public/ (e.g. /research-internship-certificate.pdf) to
    // activate the "View certificate →" link below.
    certificate: `${base}Yakub_Internship_Certificate.pdf`,
  },
};

