import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold heading-gradient"
          >
            &lt;/&gt;
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-center max-w-md font-mono text-sm"
          >
            "Code is like humor. When you have to explain it, it's bad."
          </motion.p>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-slate-400 text-sm"
          >
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-accent-cyan fill-accent-cyan" />
            </motion.div>
            <span>and</span>
            <Code2 size={16} className="text-accent-cyan" />
            <span>by MkR</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} All rights reserved.
          </motion.div>

          {/* Tech Stack Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 pt-4"
          >
            {['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-slate-800/50 text-accent-cyan/70 rounded-full border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
