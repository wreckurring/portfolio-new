"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardProps } from "./ProjectCard.types";

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const HackGrid = ({ projects }: ProjectGridProps) => {
  const displayProjects = projects; // SHOW ALL PROJECTS

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Layout for FIRST FEW CARDS (fancy bento)
  const bentoLayouts = [
    { className: "col-span-2 row-span-1", transform: 3 },
    { className: "col-span-2 row-span-1", transform: 6 },
    { className: "col-span-2 row-span-2", transform: 4 },
    { className: "col-span-2 row-span-2", transform: 4 },
  ];

  return (
    <div ref={containerRef} className="relative site-container">
      <section
        ref={sectionRef}
        className={`
          ${isStacked ? "sticky top-0 z-10" : "relative"} 
          transition-all duration-700 ease-out
          ${isStacked ? "transform-gpu" : ""}
        `}
        style={{
          transform: `
            translateY(${stackProgress * 10}px)
            scale(${1 - stackProgress * 0.02})
            rotateX(${stackProgress * 2}deg)
          `,
          transformOrigin: "center top",
        }}
      >
        <div>
          {/* Header */}
          <div
            className="flex justify-start mb-3 sm:mb-4 transition-transform duration-700 ease-out"
            style={{ transform: `translateY(${stackProgress * 5}px)` }}
          >
            <div
              className="border border-black rounded-full px-4 py-1 transition-all duration-700 ease-out"
              style={{
                backgroundColor: `rgba(255,255,255,${stackProgress * 0.3})`,
                borderColor: `rgba(0,0,0,${1 - stackProgress * 0.2})`,
                transform: `scale(${1 - stackProgress * 0.05})`,
              }}
            >
              <h2 className="text-xl sm:text-2xl font-crimson font-medium">
                My Hacks
              </h2>
            </div>
          </div>

          {/* Content */}
          <div
            className="pb-8 sm:pb-10 transition-transform duration-700 ease-out"
            style={{ transform: `translateY(${stackProgress * 8}px)` }}
          >
            {/* MOBILE: simple vertical list */}
            <div className="flex flex-col gap-6 sm:hidden">
              {displayProjects.map((project, index) => (
                <div
                  key={`mobile-${index}`}
                  className="w-full transition-all duration-700 ease-out"
                >
                  <ProjectCard {...project} variant="default" />
                </div>
              ))}
            </div>

            {/* DESKTOP: Grid */}
            <div className="hidden sm:grid grid-cols-4 gap-8">
              {displayProjects.map((project, index) => {
                // Either use fancy bento for first 4
                const layout =
                  bentoLayouts[index] ||
                  {
                    className: "col-span-2", // normal 2 column cards for rest
                    transform: 2 + (index % 4),
                  };

                return (
                  <div
                    key={index}
                    className={`${layout.className} transition-all duration-700 ease-out`}
                    style={{
                      transform: `translateY(${
                        stackProgress * layout.transform
                      }px)`,
                    }}
                  >
                    <ProjectCard {...project} variant="default" />
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
