import { ProjectCardProps } from "./ProjectCard.types";

export const projectData: ProjectCardProps[] = [
  {
    title: "RavenAI",
    description:
      "A full-stack AI productivity platform featuring PDF editing, merging, chat-based RAG search, and a browser extension that converts YouTube videos into notes.",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "RAG", "Browser Extensions", "Gemini"],
    imageUrl: "/featured-projects/raven.png",   // Add this image to /public/featured-projects
    liveUrl: "https://ravenapp.ai/",  // replace if needed
    repoUrl: "https://github.com/NishantSinghhhhh/raven-application",
    variant: "default",
  },
  {
    title: "Echosphere",
    description:
      "An AI-Based voice powered PG community platform that connects residents and owners with auto calling to technicians.",
    techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
    imageUrl: "/featured-projects/echosphere.png",
    liveUrl: "https://echosphere-nu.vercel.app/",
    repoUrl: "https://github.com/NishantSinghhhhh/Echosphere",
    variant: "default",
  },

  // ✅ New: Pull Quest AI
  {
    title: "Pull Quest AI",
    description:
      "AI-assisted pull request companion that analyzes diffs, summarizes changes, and helps developers ship cleaner code faster.",
    techStack: ["Next.js", "TypeScript", "Node.js", "OpenAI API", "GitHub API"],
    imageUrl: "/featured-projects/PullQuest.png", // create this in /public/featured-projects
    liveUrl: "https://pull-quest-frontend-seven.vercel.app/",
    repoUrl: "https://github.com/NishantSinghhhhh/Pull-Quest_1",
    variant: "default",
  },

  // ✅ New: Legal Dashboard
  {
    title: "Legal Dashboard",
    description:
      "Centralized legal insights dashboard to track cases, deadlines, and documents with role-based access for lawyers and teams.",
    techStack: ["Next.js", "React", "PostgreSQL", "Prisma", "TailwindCSS"],
    imageUrl: "/featured-projects/Legal.png", // create this in /public/featured-projects
    liveUrl: "https://www.loom.com/share/d2a88f009a7c444088d7a69b94967e59",
    repoUrl: "https://github.com/NishantSinghhhhh/Legal-dashboard",
    variant: "default",
  },

  // // ✅ New: Hooman
  // {
  //   title: "Hooman",
  //   description:
  //     "An AI-native workspace that turns unstructured content into organized notes, tasks, and insights with a chat-based RAG system.",
  //   techStack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "RAG Pipeline"],
  //   imageUrl: "/featured-projects/hooman.png", // create this in /public/featured-projects
  //   liveUrl: "https://www.loom.com/share/02e9233e498c4fb19d809950e755869a",
  //   repoUrl: "https://github.com/NishantSinghhhhh/hooman",
  //   variant: "default",
  // },
];
