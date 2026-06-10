import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { ProjectCardProps } from "./ProjectCard.types";

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  images,
  liveUrl,
  repoUrl,
  position,
  prize,
}: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = images && images.length > 0 ? images : [imageUrl];
  const currentImage = gallery[currentIndex];

  const showNav = gallery.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Image / gallery */}
      <div className="px-2 pt-2">
        <div className="relative w-full h-60 rounded-lg overflow-hidden bg-white">
          {liveUrl ? (
            <Link href={liveUrl} target="_blank">
              <Image
                src={currentImage}
                alt={title}
                fill
                className="object-contain transition-transform duration-300"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
              />
            </Link>
          ) : (
            <Image
              src={currentImage}
              alt={title}
              fill
              className="object-contain transition-transform duration-300"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
            />
          )}

          {/* Gallery controls */}
          {showNav && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-7 h-7 flex items-center justify-center text-sm hover:bg-black/60"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-7 h-7 flex items-center justify-center text-sm hover:bg-black/60"
              >
                ›
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === currentIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow bg-[#F9FAFB]">
        {(position || prize) && (
          <div className="flex flex-wrap gap-2 mb-2">
            {position && (
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                🏆 {position}
              </span>
            )}
            {prize && (
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                💰 {prize}
              </span>
            )}
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-900 mb-1 font-jakarta tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 flex-grow">{description}</p>

        {techStack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[11px] bg-gray-100 text-gray-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-1 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium bg-white transition"
            >
              <FiExternalLink className="text-sm" />
              <span>Live</span>
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="flex items-center gap-1 bg-white text-gray-800 border border-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition"
            >
              <FiGithub className="text-sm" />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
