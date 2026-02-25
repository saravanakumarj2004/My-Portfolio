import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, User } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">

            {/* Abstract Background Blobs for visual interest */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob mix-blend-screen"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-screen"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-screen"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col space-y-6"
                >
                    <div className="inline-block py-1 px-3 rounded-full glass-panel border border-blue-400/30 text-sm font-semibold text-blue-600 dark:text-blue-400 w-fit">
                        Available for Hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Saravana Kumar J</span>
                    </h1>

                    <h2 className="text-sm sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 h-8 flex items-center max-w-full">
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            className="overflow-hidden whitespace-nowrap block"
                        >
                            Software Developer | Full-Stack Enthusiast
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[3px] h-4 sm:h-6 bg-blue-500 ml-1 shrink-0"
                        />
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                        I am a passionate software developer from Srivilliputhur, Tamil Nadu, India.
                        I specialize in full-stack application development using modern technologies
                        like Django, React, MongoDB, and Flutter. Eager to solve real-world problems
                        through clean and impactful applications.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="relative group px-6 py-3 rounded-xl bg-blue-600 text-white font-medium flex items-center gap-2 overflow-hidden shadow-[0_10px_20px_-10px_rgba(37,99,235,0.7)] transition-all"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500 -z-10"></span>
                            View My Work
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <ArrowRight size={18} />
                            </motion.span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl glass-panel hover:bg-white/50 dark:hover:bg-slate-800/50 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] font-medium flex items-center gap-2 transition-all"
                        >
                            Resume <Download size={18} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Abstract Code Terminal Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center relative w-full max-w-lg mx-auto h-[400px]"
                >
                    {/* Decorative glowing backdrops */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                    {/* Main Floating Glass Panel (Terminal/Code Editor abstraction) */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-4 left-0 right-8 bottom-16 glass-panel rounded-2xl border border-white/20 p-6 flex flex-col z-10 shadow-2xl overflow-hidden"
                    >
                        {/* Inner subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 dark:from-slate-900 dark:to-slate-800 pointer-events-none"></div>

                        {/* Window controls */}
                        <div className="flex gap-2 mb-6 relative z-10">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        </div>

                        {/* Code snippets */}
                        <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm md:text-base relative z-10 overflow-hidden max-w-full">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="overflow-hidden whitespace-nowrap text-blue-400"
                            >
                                <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {'{'}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                                className="pl-6 text-slate-300"
                            >
                                name: <span className="text-amber-300">'Saravana Kumar'</span>,
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 3 }}
                                className="pl-6 text-slate-300"
                            >
                                role: <span className="text-amber-300">'Full Stack Architect'</span>,
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 3.5 }}
                                className="pl-6 text-slate-300"
                            >
                                skills: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Django'</span>, <span className="text-amber-300">'MongoDB'</span>],
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 4 }}
                                className="text-blue-400 mt-1 flex items-center gap-2"
                            >
                                {'}'};
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="w-2 h-5 bg-blue-400 inline-block"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Floating Accents */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-4 right-0 glass-panel p-5 rounded-2xl border border-white/20 z-20 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                    >
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-lg">100%</div>
                        <div className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-300 uppercase mt-1">Dedication</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                        className="absolute top-10 -left-6 glass-panel p-4 rounded-xl border border-white/20 z-20 shadow-xl backdrop-blur-xl flex items-center justify-center rotate-12 bg-white/10 dark:bg-slate-800/50"
                    >
                        <span className="text-3xl drop-shadow-md">🚀</span>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
