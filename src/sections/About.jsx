import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';
import * as Icons from 'lucide-react';

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" ref={ref} className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold heading-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              A full-stack developer passionate about building meaningful digital products.
              My interest in software development began during my school years when I created my first web application,
              and since then I've been continuously exploring new technologies.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Through academic projects and personal builds, I've gained hands-on experience
              with modern softwares and best practices.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-accent-cyan">
                <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse" />
                <span className="font-mono">Currently exploring backend technologies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glow-border">
              <img
                src="./assets/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 rounded-2xl -z-10 blur-xl" />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-100 mb-12 text-center">
            Technical <span className="heading-gradient">Arsenal</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={container}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="card-gradient border border-slate-800/50 rounded-2xl p-6 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <h4 className="text-xl font-display font-semibold text-accent-cyan mb-6">
                  {category}
                </h4>
                <motion.ul className="space-y-4">
                  {skillList.map((skill, skillIndex) => {
                    const IconComponent = Icons[skill.icon] || Icons.Code2;
                    return (
                      <motion.li
                        key={skillIndex}
                        variants={item}
                        className="flex items-center gap-3 text-slate-300 group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent-cyan/10 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                          <IconComponent size={16} className="text-accent-cyan" />
                        </div>
                        <span className="group-hover:text-accent-cyan transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
