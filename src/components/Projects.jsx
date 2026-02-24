import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Full Stack', 'Machine Learning'];

    const filteredProjects = projectsData.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 px-6 relative z-10 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <AnimatedHeading
                        text="Featured Projects"
                        gradientWords={["Featured"]}
                        className="mb-8"
                    />
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>

                    {/* Category Filter System */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'glass-panel text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid with AnimatePresence for smooth filtering */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

// Advanced 3D Hover Tilt Card Component
const ProjectCard = ({ project, index }) => {

    // Framer Motion variant for staggered entrance
    const cardVariant = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 }
        },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            layout
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }} // Simple lift effect for fallback
            className="group relative h-full flex flex-col"
        >
            <Link to={`/project/${project.id}`} className="block h-full flex-1">
                {/* The Glassy Card Container */}
                <div className="glass-panel flex-1 rounded-3xl p-6 border border-white/20 shadow-xl overflow-hidden relative z-10 flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500/30 h-full cursor-pointer">

                    {/* Ambient glow effect inside the card on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none"></div>

                    {/* Header & Category Badge */}
                    <div className="flex justify-between items-start mb-6 w-full">
                        <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                            <FolderGit2 size={28} />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full">
                                {project.category}
                            </span>
                            {project.isMiniProject && (
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full">
                                    College Mini Project
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                        {project.shortDesc}
                    </p>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 bg-white/40 dark:bg-slate-800/40 rounded-md border border-slate-200/50 dark:border-slate-700/50 relative z-20" onClick={(e) => e.preventDefault()}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Links (GitHub / Live) - these stop propagation so clicking link doesn't navigate to detail page unless wanted */}
                    <div className="flex gap-4 pt-4 border-t border-slate-200/20 dark:border-slate-700/50 relative z-20">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                                aria-label="View Source Code"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                aria-label="View Live Project"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* The glowing decorative element behind the card (Activated on Hover) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </Link>
        </motion.div>
    );
};

export default Projects;
