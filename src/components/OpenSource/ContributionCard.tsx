import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { OpenSourceContribution } from './OpenSourceData';

interface ContributionCardProps {
    contribution: OpenSourceContribution;
    index: number;
}

const ContributionCard: React.FC<ContributionCardProps> = ({ contribution, index }) => {
    const { title, description, technologies, logo, links, period } = contribution;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full max-w-[340px] mx-auto mb-10"
        >
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden h-[520px] flex flex-col">
                {/* Top Logo Area */}
                <div className="h-32 w-full bg-gray-50 flex items-center justify-center">
                    <img
                        src={logo}
                        alt={title}
                        className="max-w-full max-h-full object-contain p-4"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML =
                                `<div class="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-semibold">${title.charAt(0)}</div>`;
                        }}
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-snug">
                            {description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 bg-gray-50 text-gray-600 rounded-full px-3 py-1">
                            <CalendarDays className="h-4 w-4 text-gray-400" />
                            <span className="text-xs font-medium">{period}</span>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap justify-end">
                            {/* GitHub link */}
                            {links?.github && (
                                <a
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 
                                        text-xs font-semibold px-3 py-1 rounded-full bg-white 
                                        border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <FaGithub className="h-4 w-4" />
                                    <span className="hidden sm:inline">GitHub</span>
                                </a>
                            )}

                            {/* PRs / Contributions link */}
                            {links?.prs && (
                                <a
                                    href={links.prs}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 
                                        text-xs font-semibold px-3 py-1 rounded-full bg-white 
                                        border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <CgFileDocument className="h-4 w-4" />
                                    <span className="hidden sm:inline">PRs / Contributions</span>
                                </a>
                            )}

                            {/* Website / Docs link */}
                            {links?.website && (
                                <a
                                    href={links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 
                                        text-xs font-semibold px-3 py-1 rounded-full bg-white 
                                        border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <CgFileDocument className="h-4 w-4" />
                                    <span className="hidden sm:inline">Website</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContributionCard;
