import { ProjectCardProps } from "./ProjectCard.types";

export const HackData: ProjectCardProps[] = [
  {
    title: "Aptos Move Hackathon",
    description:
      "Designed and shipped a Move-based dApp on Aptos with secure transactions and gas-efficient smart contracts in a weekend sprint.",
    techStack: ["Aptos", "Move", "TypeScript", "Next.js"],
    imageUrl: "/hacks/aptos.jpeg",
    position: "2nd Place",
    prize: "$ 500 Cash prize & Aptos credits",
    variant: "default",
  },
    {
    title: "Stellar Hack – Fintech & Payments",
    description:
      "Built a Stellar-based payment and analytics dashboard with smooth on/off-ramp flows and actionable insights for users.",
    techStack: ["Stellar", "React", "Next.js", "TailwindCSS"],
    imageUrl: "/hacks/stellar.jpeg",
    position: "4rth Place",
    prize: "Cash prize & swags",
    variant: "default",
  },
  {
    title: "ETHGlobal – Stellar Track",
    description:
      "Built an on-chain tool for streamlining Web3 workflows during ETHGlobal, focusing on real-world developer UX and infra reliability.",
    techStack: ["Solidity", "TypeScript", "Next.js", "EVM", "Wagmi"],
    imageUrl: "/hacks/eth_Global.jpeg",

    position: "Participant",
    prize: "Track finalist prize & goodies",
    variant: "default",
  },
  {
    title: "HackArena – Web3 Builder Hack",
    description:
      "Built a full-stack Web3 product with real-time updates, dashboards, and on-chain integrations in a 24-hour hackathon.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
    imageUrl: "/hacks/HackArena.jpeg",
    position: "Special Mention",
    variant: "default",
  },
  {
    title: "HackPrix – AI & DevTools Hack",
    description:
      "Shipped an AI-powered developer productivity tool that analyzes code, summarizes changes, and assists with PR reviews.",
    techStack: ["Next.js", "TypeScript", "OpenAI / Gemini", "Node.js"],
    imageUrl: "/hacks/hackPrix.jpeg",
    position: "Participant",
    prize: "₹XX,XXX cash prize",
    variant: "default",
  },

];
