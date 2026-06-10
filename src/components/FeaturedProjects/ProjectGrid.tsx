"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  // ✅ Use all projects now
  const displayProjects = projects;

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isStacked, setIsStacked] = useState(false);
  const [stackProgress, setStackProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const stackThreshold = windowHeight * 0.3;

      const isInStackZone =
        containerRect.top <= stackThreshold &&
        containerRect.bottom > windowHeight * 0.7 &&
        sectionRect.top <= stackThreshold;

      setIsStacked(isInStackZone);

      if (isInStackZone) {
        const containerHeight = containerRect.height;
        const scrollableArea = containerHeight - windowHeight;
        const scrolled = Math.max(0, stackThreshold - containerRect.top);
        const progress = Math.max(
          0,
          Math.min(1, scrolled / Math.max(scrollableArea * 0.3, 100))
        );
        setStackProgress(progress);
      } else {
        setStackProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bento grid layout configuration for first few cards
  const bentoLayouts = [
    {
      className: "col-span-2 row-span-1",
      transform: 3,
    },
    {
      className: "col-span-2 row-span-1",
      transform: 6,
    },
    {
      className: "col-span-2 row-span-2",
      transform: 4,
    },
    {
      className: "col-span-2 row-span-2",
      transform: 4,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative site-container"
    >
      <section
        ref={sectionRef}
        className={`
          ${isStacked ? 'sticky top-0 z-10' : 'relative'} 
          transition-all duration-700 ease-out
          ${isStacked ? 'transform-gpu' : ''}
        `}
        style={{
          transform: `
            translateY(${stackProgress * 10}px) 
            scale(${1 - stackProgress * 0.02})
            rotateX(${stackProgress * 2}deg)
          `,
          transformOrigin: 'center top',
        }}
      >
        <div>
          {/* Header */}
          <div
            className="flex justify-start mb-3 sm:mb-4 transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${stackProgress * 5}px)`,
            }}
          >
            <div
              className="border border-black rounded-full px-3 sm:px-4 py-1 
                         transition-all duration-700 ease-out"
              style={{
                backgroundColor: `rgba(255,255,255,${stackProgress * 0.3})`,
                borderColor: `rgba(0,0,0,${1 - stackProgress * 0.2})`,
                transform: `scale(${1 - stackProgress * 0.05})`,
              }}
            >
              <h2 className="text-xl sm:text-2xl font-crimson font-medium">
                My Best Work
              </h2>
            </div>
          </div>

          {/* Content */}
          <div
            className="pb-8 sm:pb-10 transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${stackProgress * 8}px)`,
            }}
          >
            {/* Mobile: simple column */}
            <div className="flex flex-col gap-6 sm:hidden">
              {displayProjects.map((project, index) => (
                <div
                  key={`mobile-${index}`}
                  className="w-full transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${stackProgress * 3}px)`,
                  }}
                >
                  <ProjectCard {...project} variant="default" />
                </div>
              ))}
            </div>

            {/* Desktop/Tablet: Bento Grid */}
            <div className="hidden sm:grid grid-cols-4 gap-8">
              {displayProjects.map((project, index) => {
                const layout =
                  bentoLayouts[index] ||
                  {
                    // fallback layout for extra projects
                    className: "col-span-4 sm:col-span-2",
                    transform: 2 + index,
                  };

                return (
                  <div
                    key={index}
                    className={`${layout.className} transition-all duration-700 ease-out`}
                    style={{
                      transform: `translateY(${stackProgress * layout.transform}px)`,
                    }}
                  >
                    <div className="w-full h-full">
                      <ProjectCard {...project} variant="default" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
