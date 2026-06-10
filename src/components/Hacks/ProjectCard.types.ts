// components/FeaturedProjects/ProjectCard.types.ts

export type ProjectVariant = 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'default';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  images?: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  // 🏆 Hackathon-specific meta
  position?: string;  // e.g. "1st Place", "Winner"
  prize?: string;     // e.g. "₹25,000 cash prize"
  variant: ProjectVariant;
}
