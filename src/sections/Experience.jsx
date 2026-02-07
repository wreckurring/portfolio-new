import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/experience';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" ref={ref} className="section-container bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold heading-gradient mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <motion.div
                    className="ml-16 md:ml-0 card-gradient border border-slate-800/50 rounded-2xl p-8 hover:border-accent-cyan/30 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Company Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 rounded-full mb-4">
                      <Briefcase size={16} className="text-accent-cyan" />
                      <span className="text-accent-cyan font-mono text-sm">{exp.company}</span>
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-100 mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                      {exp.position}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent-blue" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent-blue" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="text-accent-cyan mt-1.5 flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-slate-800/50 text-accent-cyan rounded-full border border-slate-700/50 hover:border-accent-cyan/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:col-start-1'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
