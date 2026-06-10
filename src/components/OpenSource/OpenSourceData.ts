export interface OpenSourceContribution {
  id: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
  achievements: string[];
  links: {
    prs?: string;
    website?: string;
    github?: string;
  };
  logo: string;
  period: string;
  status: "active" | "completed";
}

export const openSourceContributions: OpenSourceContribution[] = [
  // The Palisadoes Foundation (Talawa API, Talawa Admin, Switchmap-Ng)
  {
    id: "palisadoes-talawa",
    logo: "/work-experience/logos/palisadoes.png",
    title: "Talawa API & Admin – Tests, Docs & No-Mongo Migration",
    organization: "The Palisadoes Foundation",
    description:
      "Contributed extensively to Talawa API and Talawa Admin by adding tests, improving documentation, CSS, and helping migrate functionality from MongoDB to PostgreSQL while maintaining production stability.",
    technologies: [
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "React",
      "Vitest",
      "Jest",
      "CSS",
      "GitHub Actions",
    ],
    achievements: [
      "Added comprehensive tests for multiple modules: chat members, organizations, venues, advertisements, communities, creators, and various React components (Chat, Avatar, VolunteerContainer, TagNode, staticMockPRs, etc.)",
      "Improved Talawa API docs, including logging docs and CSS refinements, and added a new homepage for the API documentation.",
      "Led No-Mongo related changes across Talawa API/Admin including migrating org posts from Mongo to Postgres and No Mongo Post action items.",
      "Replaced legacy CI workflows (e.g., Coderabbit workflow) and removed deprecated GitHub actions (tj-actions), modernizing the CI pipeline.",
      "Merged major branches (e.g., develop-postgres into develop) and ensured a clean testing environment setup using Vitest.",
    ],
    links: {
      prs: "https://github.com/pulls?q=author:NishantSinghhhhh+org:PalisadoesFoundation",
      website:
        "https://docs.google.com/document/d/1R_xFlyxer5EZwUHBLcUjjS1OgwWCQ9_RWBLlJFn59iQ/edit",
      github: "https://github.com/PalisadoesFoundation",
    },
    period: "2024 – Present",
    status: "active",
  },
  {
    id: "palisadoes-switchmap",
    logo: "/work-experience/logos/palisadoes.png",
    title: "Switchmap-Ng – CI & Unit Testing",
    organization: "The Palisadoes Foundation",
    description:
      "Improved the Switchmap-Ng project by modernizing CI workflows and adding unit tests for core features.",
    technologies: ["TypeScript", "Angular", "Node.js", "Jest", "GitHub Actions"],
    achievements: [
      "Removed deprecated tj-actions and introduced a new CI command/workflow for more reliable automation.",
      "Added unit tests for post-related functionality, improving test coverage and stability.",
    ],
    links: {
      prs: "https://github.com/pulls?q=author:NishantSinghhhhh+Switchmap-ng+org:PalisadoesFoundation",
      website: "https://www.talawa.io",
      github: "https://github.com/PalisadoesFoundation/switchmap-ng",
    },
    period: "2024",
    status: "completed",
  },

  // Open Library
  {
    id: "openlibrary",
    logo: "/work-experience/logos/openLibrary.webp",
    title: "Integrated Librarian Environment & UI Improvements",
    organization: "Open Library (Internet Archive)",
    description:
      "Contributed to Open Library’s Integrated Librarian Environment (ILE) and selection manager, improving maintainability and user experience in the librarian tooling and UI flows.",
    technologies: ["JavaScript", "TypeScript", "Node.js", "jQuery", "Less", "Python"],
    achievements: [
      "Enhanced selection and drag/drop functionality for the Integrated Librarian Environment.",
      "Improved structure and readability of core JS modules with better typing and documentation.",
      "Contributed to ongoing modernization of the codebase while preserving existing behaviour.",
    ],
    links: {
      prs: "https://github.com/internetarchive/openlibrary/pulls?q=author:NishantSinghhhhh",
      website: "https://openlibrary.org",
      github: "https://github.com/internetarchive/openlibrary",
    },
    period: "2024 – Present",
    status: "active",
  },

  // KGateway
  {
    id: "kgateway",
    logo: "/work-experience/logos/kgateway.png",
    title: "KGateway – Logging & Routing Enhancements",
    organization: "KGateway",
    description:
      "Worked on improving KGateway’s logging behaviour and routing utilities, enhancing production reliability and configurability.",
    technologies: ["Go", "Kubernetes", "API Gateway", "Docker"],
    achievements: [
      "Removed dev-mode override that forced text logs so production logs stay in structured JSON format.",
      "Refactored internal utilities by moving internal/kgateway/utils/krtutil/index.go into a public pkg/ structure to improve reusability.",
      "Implemented the ability to automatically rewrite the Host header, providing more flexible routing behaviour.",
    ],
    links: {
      prs: "https://github.com/pulls?q=author:NishantSinghhhhh+org:kgateway-dev",
      website: "https://www.kgateway.dev",
      github: "https://github.com/kgateway-dev/kgateway",
    },
    period: "2024",
    status: "completed",
  },

  // KubeEdge & ianvs
  {
    id: "kubeedge",
    logo: "/work-experience/logos/ianvs.png",
    title: "KubeEdge & ianvs – Docs & Versioning",
    organization: "KubeEdge / ianvs",
    description:
      "Contributed to KubeEdge and the ianvs project by improving documentation and adjusting versioning for smoother installation and developer experience.",
    technologies: ["Go", "Kubernetes", "Markdown", "Developer Tooling"],
    achievements: [
      "Updated versioning configurations for KubeEdge to align with latest releases.",
      "Improved installation documentation for ianvs to make onboarding easier for new contributors.",
    ],
    links: {
      prs: "https://github.com/pulls?q=author:NishantSinghhhhh+org:KubeEdge",
      website: "https://kubeedge.io",
      github: "https://github.com/kubeedge",
    },
    period: "2024",
    status: "completed",
  },

  // Layer5 / Meshery
  {
    id: "layer5-meshery",
    logo: "/work-experience/logos/meshery.png",
    title: "Meshery UI & DX Improvements",
    organization: "Layer5 / Meshery",
    description:
      "Contributed to Meshery by improving UI components and developer experience around service mesh management.",
    technologies: ["React", "TypeScript", "Next.js", "Service Mesh"],
    achievements: [
      "Worked on Meshery UI improvements to streamline workflows for users managing service meshes.",
      "Participated in DX enhancements and incremental UI bug fixes.",
    ],
    links: {
      prs: "https://github.com/pulls?q=author:NishantSinghhhhh+org:meshery",
      website: "https://layer5.io",
      github: "https://github.com/meshery/meshery",
    },
    period: "2024",
    status: "active",
  },
];
