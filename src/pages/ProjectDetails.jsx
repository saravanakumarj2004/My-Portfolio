import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, FolderGit2, CheckCircle2, ChevronLeft, ChevronRight, X, AlertCircle, Target, Layers, Lightbulb, Wrench } from 'lucide-react';
import { projectsData } from '../data/projects';

/* ── Lightbox ── */
const Lightbox = ({ src, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
    >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X size={32} />
        </button>
        <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            src={src}
            alt="Project screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
        />
    </motion.div>
);

/* ── Image Gallery ── */
const ImageGallery = ({ images, imageFolder }) => {
    const [active, setActive] = useState(0);
    const [lightbox, setLightbox] = useState(null);

    const prev = () => setActive(i => (i - 1 + images.length) % images.length);
    const next = () => setActive(i => (i + 1) % images.length);

    const currentSrc = `${imageFolder}/${images[active]}`;

    return (
        <>
            <AnimatePresence>{lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}</AnimatePresence>

            <div className="space-y-4">
                {/* Main preview */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 group cursor-zoom-in" onClick={() => setLightbox(currentSrc)}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={active}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            src={currentSrc}
                            alt={`Screenshot ${active + 1}`}
                            className="w-full h-72 md:h-96 object-contain"
                        />
                    </AnimatePresence>

                    {/* Arrow buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={e => { e.stopPropagation(); prev(); }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            ><ChevronLeft size={22} /></button>
                            <button
                                onClick={e => { e.stopPropagation(); next(); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            ><ChevronRight size={22} /></button>
                        </>
                    )}

                    {/* Counter badge */}
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                        {active + 1} / {images.length}
                    </span>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`shrink-0 rounded-xl overflow-hidden border-2 transition-all ${active === idx ? 'border-blue-500 scale-105 shadow-lg shadow-blue-500/30' : 'border-white/10 hover:border-white/40'}`}
                        >
                            <img
                                src={`${imageFolder}/${img}`}
                                alt={`Thumb ${idx + 1}`}
                                className="w-20 h-14 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

/* ── Main Page ── */
const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-24 px-6 min-h-screen max-w-5xl mx-auto"
        >
            {/* Navigation */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors mb-8 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Projects</span>
            </Link>

            {/* Header Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden border-white/20 shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-blue-500">
                    <FolderGit2 size={200} />
                </div>
                <div className="relative z-10">
                    <span className="inline-block text-sm font-bold uppercase tracking-wider px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
                        {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30">
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl font-medium transition-colors shadow-lg">
                                <Github size={20} /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-12">

                    {/* Gallery */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            Project Gallery
                        </h2>
                        {project.images && project.images.length > 0 ? (
                            <ImageGallery images={project.images} imageFolder={project.imageFolder} />
                        ) : (
                            <div className="glass-panel border-dashed border-2 rounded-2xl h-60 flex items-center justify-center text-slate-400">
                                No screenshots yet.
                            </div>
                        )}
                    </div>

                    {/* The Story / Overview */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            {project.problem ? 'The Story' : 'Project Overview'}
                        </h2>
                        {project.problem ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="glass-panel p-6 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent relative overflow-hidden text-left">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 blur-sm pointer-events-none text-red-500"><AlertCircle size={80} /></div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-500 dark:text-red-400 relative z-10">
                                        <AlertCircle size={22} /> The Problem
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg relative z-10">{project.problem}</p>
                                </div>
                                <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent relative overflow-hidden text-left">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 blur-sm pointer-events-none text-emerald-500"><Target size={80} /></div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 relative z-10">
                                        <Target size={22} /> The Solution
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg relative z-10">{project.solution}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{project.fullDesc}</p>
                        )}
                    </div>

                    {/* Key Features */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            Key Features
                        </h2>
                        <ul className="space-y-4">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4 glass-panel p-4 rounded-xl border border-white/10">
                                    <div className="p-1 bg-emerald-500/20 text-emerald-500 flex-shrink-0 rounded-full">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Deep Dive Sections */}
                    {project.architecture && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                Architecture
                            </h2>
                            <div className="glass-panel p-6 rounded-2xl border border-blue-500/20">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-4 text-lg">
                                    <Layers className="text-blue-500 shrink-0 mt-1" size={28} />
                                    <span>{project.architecture}</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {project.challenges && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                Challenges & Solutions
                            </h2>
                            <div className="space-y-4">
                                {project.challenges.map((challenge, idx) => (
                                    <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-400 to-amber-500"></div>
                                        <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white pl-2">{challenge.title}</h3>
                                        <div className="space-y-3 text-slate-600 dark:text-slate-300 pl-2 text-lg">
                                            <p><strong className="text-slate-800 dark:text-slate-200">Challenge:</strong> {challenge.description}</p>
                                            <p><strong className="text-emerald-600 dark:text-emerald-400">Solution:</strong> {challenge.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.learnings && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                What I Learned
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.learnings.map((learning, idx) => (
                                    <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                        <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg flex-shrink-0">
                                            <Lightbulb size={20} />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-200 font-medium text-base">{learning}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div>
                    <div className="glass-panel p-8 rounded-3xl border border-white/20 sticky top-32">
                        <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-4 py-2 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 rounded-xl font-medium border border-blue-100 dark:border-slate-700 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.dependencies && (
                            <div className="mt-8 pt-8 border-t border-slate-200/20 dark:border-slate-700/50">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Wrench size={20} className="text-amber-500" /> Core Dependencies
                                </h3>
                                <div className="space-y-6">
                                    {project.dependencies.map((dep, i) => (
                                        <div key={i}>
                                            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">{dep.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {dep.items.map((item, j) => (
                                                    <span key={j} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm transition-colors hover:border-slate-300 dark:hover:border-slate-500 font-medium">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;

