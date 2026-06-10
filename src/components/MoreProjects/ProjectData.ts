import { ProjectCardProps } from "./ProjectCard.types";

export const projectData: ProjectCardProps[] = [


  // ✅ ADDING SWIFYT
  {
    title: "Swift-Add",
    description:
      "A fast, lightweight micro-SaaS platform that converts media files into multiple formats with queue-based processing and cloud automation.",
    techStack: ["Next.js", "Node.js", "BullMQ", "Redis", "Docker", "Cloud Storage"],
    imageUrl: "/featured-projects/swifyt.png",  // make sure to add this image in /public
    liveUrl: "https://swifyt.vercel.app/",      // change if needed
    repoUrl: "https://github.com/NishantSinghhhhh/swifyt", // update repo if different
    variant: "default",
  },
];
