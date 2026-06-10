import { WorkExperienceItem } from "./types"; 

export const workExperiencesData: WorkExperienceItem[] = [
    {
      id: '2',
      role: 'Full Stack Developer Intern',
      company: 'RavenAI',
      period: 'March 2025 - Present',
      companyLogo: '/work-experience/logos/raven.jpeg', 
      description: [
        'Developed responsive, scalable frontend components using Next.js and React, ensuring seamless integration with backend APIs.',
        'Improved overall system efficiency by reducing AI model prompt requests from 10 to 1 through prompt consolidation and smart request batching.',
        'Implemented optimized rendering strategies: SSR for dynamic dashboards, SSG for static content (landing, FAQs), and CSR for high-interactivity modules.',
        'Built a Chrome browser extension that converted YouTube videos into structured notes with intelligent content extraction.',
        'Developed an AI-powered chat system backed by a Retrieval-Augmented Generation (RAG) pipeline, significantly improving answer accuracy.',
        ]
    },
    {
      id: '3',
      role: 'Full Stack Developer',
      company: 'myAiMate',
      period: 'November 2024 - January 2024',
      companyLogo: '/work-experience/logos/my_ai_mate.png', 
      description: [
        'Built and deployed 3 full-fledged platforms during my internship — 2 focused on PDF editing, merging, and rendering dynamic results within the browser.',
        'Led end-to-end development in the MERN stack, handling architecture, deployment, and team coordination as part of a hybrid Development + Management role.',
        'Developed secure authentication with two-factor verification via Twilio and Nodemailer, reducing failed login attempts by 40%.'
      ]

    }
];