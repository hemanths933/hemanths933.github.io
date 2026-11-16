export const personalInfo = {
  name: "Hemanth Sharma",
  firstName: "Hemanth",
  lastName: "Sharma",
  title: "Lead Data Science Engineer",
  company: "Qyrus",
  email: "hemanths933@gmail.com",
  location: "Bangalore, India",
  tagline:
    "Building long-running agentic systems, RAG pipelines and knowledge graphs for AI-driven test automation",
  bio: [
    "I'm a Lead Data Science Engineer at Qyrus, an AI-based next-gen test automation platform. I design and ship long-running agentic systems with multi-agent interactions and memory, agentic RAG over multimodal data (code, documentation, tests), knowledge-graph use cases, MCP servers, and small VLM deployments in production.",
    "I started in Java and enterprise engineering at Tata Consultancy Services, then moved into data science in 2019 — training classification, generation and NER models, building chatbots and test-healing systems, and now leading an AI team. I also work with marketing, Client Success and sales, running demos for prospects and clients.",
  ],
  availability: "Open to opportunities",
  stats: [
    { label: "Years in Tech", value: "11" },
    { label: "Years in AI / ML", value: "7+" },
    { label: "Associates Trained (Java)", value: "~60" },
    { label: "Public AI Projects", value: "2" },
  ],
  socials: {
    github: "https://github.com/hemanths933",
    linkedin: "https://linkedin.com/in/hemanths933",
    medium: "https://medium.com/@hemanths933",
    email: "mailto:hemanths933@gmail.com",
  },
};

export const experiences = [
  {
    id: 1,
    role: "Lead Data Science Engineer",
    company: "Qyrus",
    companyUrl: "https://qyrus.com",
    type: "Full-time",
    duration: "Jun 2024 — Present",
    location: "Bangalore, India",
    current: true,
    description:
      "Leading an AI team at Qyrus, an AI-based next-gen test automation platform — designing and deploying scalable, efficient and accurate systems.",
    highlights: [
      "Created long-running agentic systems and harness with multi-agent interactions and various memory systems",
      "Created AI workflows to augment testing services across multiple domains",
      "Built agentic RAG-based systems for multimodal data like code, documentation, and tests",
      "Created knowledge-graph use cases; built ingestion pipelines and query tools",
      "Created small VLM deployments in production",
      "Created MCP servers and designed chat systems",
      "Worked with marketing, Client Success and sales teams; ran demos for prospects and clients",
    ],
    tech: ["Agentic Systems", "Multi-Agent", "Agentic RAG", "Knowledge Graphs", "MCP", "VLMs"],
    accentColor: "rgba(124, 58, 237, 0.6)",
  },
  {
    id: 2,
    role: "Senior Data Science Engineer",
    company: "Qyrus",
    companyUrl: "https://qyrus.com",
    type: "Full-time",
    duration: "Jun 2021 — Jun 2024",
    location: "Bangalore, India",
    current: false,
    description:
      "Designed and trained ML systems powering test automation across vision and language tasks.",
    highlights: [
      "Designed test-healing systems, chatbots, prediction systems, generation systems and more",
      "Trained custom classification, generation and NER models on multimodal data using PyTorch, TensorFlow and Keras",
      "Trained and used Siamese networks and transformer architectures like T5, BERT, embeddings and more",
      "Used OpenCV techniques to solve various vision-based tasks",
    ],
    tech: ["PyTorch", "TensorFlow", "Keras", "T5", "BERT", "Siamese Networks", "OpenCV"],
    accentColor: "rgba(37, 99, 235, 0.6)",
  },
  {
    id: 3,
    role: "Data Science Engineer",
    company: "Qyrus",
    companyUrl: "https://qyrus.com",
    type: "Full-time",
    duration: "Mar 2019 — Jun 2021",
    location: "Bangalore, India",
    current: false,
    description: "Applied novel ML methods to testing use cases.",
    highlights: [
      "Applied novel methods to train models that apply to testing use cases",
      "Created chatbots using Dialogflow, Lex, etc.",
      "Created custom testing chatbots to build and execute tests",
      "Created classification systems combining graphs, object detection systems, chatbot testing systems and more",
    ],
    tech: ["Dialogflow", "Lex", "Object Detection", "Graphs", "Classification"],
    accentColor: "rgba(20, 184, 166, 0.6)",
  },
  {
    id: 4,
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    companyUrl: "https://tcs.com",
    type: "Full-time",
    duration: "Nov 2017 — Jul 2018",
    location: "India",
    current: false,
    description:
      "Java engineer on enterprise approval-management and search-indexing applications.",
    highlights: [
      "Java resource for a Policy/Procedure change approval management process project, with enhancement and bug-fix responsibilities",
      "Java resource for an Indexing Service application wrapping Elastic Search — automated the testing pipeline using the Elastic Search API",
    ],
    tech: ["Java", "Spring MVC", "Oracle", "Can.js", "JMS", "IBM WebSphere MQ", "Elastic Search"],
    accentColor: "rgba(245, 158, 11, 0.6)",
  },
  {
    id: 5,
    role: "Assistant Systems Engineer",
    company: "Tata Consultancy Services",
    companyUrl: "https://tcs.com",
    type: "Full-time",
    duration: "Nov 2016 — Oct 2017",
    location: "India",
    current: false,
    description: "Java/DB engineer, trainer and part of an AWS/DevOps migration.",
    highlights: [
      "Java/DB resource for a proof of concept showcasing the Advisory module of an Inventory Management System",
      "Java trainer for the Training and Engagement Program; trained about 60 associates",
      "Part of AWS/DevOps migration",
    ],
    tech: ["Java", "SQL", "AWS", "DevOps"],
    accentColor: "rgba(245, 158, 11, 0.6)",
  },
  {
    id: 6,
    role: "Assistant Systems Engineer Trainee",
    company: "Tata Consultancy Services",
    companyUrl: "https://tcs.com",
    type: "Trainee",
    duration: "Nov 2015 — Oct 2016",
    location: "India",
    current: false,
    description: "Testing-environment support on a core banking project.",
    highlights: [
      "Unix resource for testing-environment support on a core banking project; maintained the testing environment and ran EOD scripts",
    ],
    tech: ["Unix", "Shell Scripting"],
    accentColor: "rgba(245, 158, 11, 0.6)",
  },
];

export const skillCategories = [
  {
    id: "ai",
    category: "Agentic AI & LLMs",
    icon: "Brain",
    accentColor: "#8B5CF6",
    skills: [
      "Multi-Agent Systems", "Agent Harnesses", "Memory Systems", "Agentic RAG",
      "Knowledge Graphs", "MCP Servers", "Chat Systems", "AI Workflows",
    ],
  },
  {
    id: "lang",
    category: "Languages",
    icon: "Code2",
    accentColor: "#3B82F6",
    skills: ["Python", "Java", "SQL", "Unix / Shell"],
  },
  {
    id: "frameworks",
    category: "Vision & Chatbots",
    icon: "Layers",
    accentColor: "#14B8A6",
    skills: ["Small VLMs", "OpenCV", "Object Detection", "Dialogflow", "Amazon Lex"],
  },
  {
    id: "ml",
    category: "ML & Modeling",
    icon: "Cpu",
    accentColor: "#F59E0B",
    skills: [
      "PyTorch", "TensorFlow", "Keras", "BERT", "T5",
      "Siamese Networks", "NER", "Embeddings",
    ],
  },
];

export const projects: {
  id: number;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  accentColor: string;
  glowColor: string;
  featured: boolean;
  category: string;
  links: { github?: string; live?: string };
}[] = [
  {
    id: 1,
    title: "AaposhanAI — Public Health App",
    description:
      "Ayurveda knowledge for healthy meal planning — a public health app that makes traditional dietary wisdom practical for everyday meals.",
    tech: ["AI", "Ayurveda", "Meal Planning", "Public Health"],
    gradient: "from-teal-950 via-emerald-900/50 to-green-950",
    accentColor: "#2DD4BF",
    glowColor: "rgba(45, 212, 191, 0.25)",
    featured: true,
    category: "Public Health",
    links: { live: "https://aaposhan.pages.dev" },
  },
  {
    id: 2,
    title: "UnravelAI",
    description: "Interactive visualizations that make AI concepts easy to understand.",
    tech: ["AI Education", "Interactive Visualization"],
    gradient: "from-violet-950 via-purple-900/60 to-indigo-950",
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.3)",
    featured: true,
    category: "AI Education",
    links: { live: "https://unravelai.pages.dev" },
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  school: "K.S. School of Engineering and Management",
  years: "2011 — 2015",
};

export const affiliations = ["Hackathons", "Research Paper Clubs", "Stargazing", "+ many more"];
