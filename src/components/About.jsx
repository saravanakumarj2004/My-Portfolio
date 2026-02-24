import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Code, Database, Layout, Server, Sparkles, Wrench, User } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 px-6 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <AnimatedHeading
                        text="About Me"
                        gradientWords={["Me"]}
                    />
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Bio & Timeline */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Bio Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            variants={fadeIn}
                            className="glass-panel rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute -right-10 -top-10 text-blue-500/10">
                                <User size={150} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="text-amber-500" /> My Journey
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                                I am Saravana Kumar, a passionate software developer from Srivilliputhur in Tamil Nadu, India, specializing in full-stack application development. I enjoy building efficient and user-friendly software solutions using modern technologies.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4 relative z-10">
                                I have a strong interest in solving real-world problems through clean, scalable, and impactful applications, and I am eager to contribute to meaningful projects and continuously grow as a developer.
                            </p>
                        </motion.div>

                        {/* Experience / Education Timeline */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={fadeIn}
                            className="glass-panel rounded-3xl p-8 border border-white/20 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="text-blue-500" /> Education & Experience
                            </h3>

                            <div className="relative border-l-2 border-blue-500/30 ml-3 pl-6 pb-6">
                                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                <h4 className="font-bold text-lg text-slate-800 dark:text-white">B.Tech. Computer Science & Business Systems</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-1">Ramco Institute of Technology, Rajapalayam</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">2022 - 2026</p>
                            </div>

                            <div className="relative border-l-2 border-transparent ml-3 pl-6">
                                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                                <h4 className="font-bold text-lg text-slate-800 dark:text-white">Fresher / Active Developer</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Pursuing final year, actively building full-stack and ML projects.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills Layout */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Coding Languages */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            variants={fadeIn}
                            className="glass-panel rounded-3xl p-6 md:p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                <Code className="text-indigo-500" /> Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['Java', 'Python', 'JavaScript', 'Dart'].map((skill, index) => (
                                    <SkillBadge key={index} name={skill} />
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Frontend */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                variants={fadeIn}
                                className="glass-panel rounded-3xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                    <Layout className="text-pink-500" /> Frontend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['React', 'HTML', 'CSS', 'JavaFX'].map((skill, index) => (
                                        <SkillBadge key={index} name={skill} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Backend */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                variants={fadeIn}
                                className="glass-panel rounded-3xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                    <Server className="text-green-500" /> Backend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Django', 'REST APIs'].map((skill, index) => (
                                        <SkillBadge key={index} name={skill} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Database */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                variants={fadeIn}
                                className="glass-panel rounded-3xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                    <Database className="text-blue-400" /> Database
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['MongoDB', 'SQL'].map((skill, index) => (
                                        <SkillBadge key={index} name={skill} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tools & Platforms */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                variants={fadeIn}
                                className="glass-panel rounded-3xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                    <Wrench className="text-amber-500" /> Tools & Platforms
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Git & GitHub', 'Firebase', 'Netlify', 'Railway', 'MongoDB Atlas', 'Apache NetBeans'].map((skill, index) => (
                                        <SkillBadge key={index} name={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Soft Skills */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            variants={fadeIn}
                            className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-700/50 pb-3">
                                <span className="text-xl">🤝</span> Soft Skills
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {['Problem Solving', 'Analytical Thinking', 'Quick Learner', 'Team Collaboration', 'Adaptability'].map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable glowing badge component
const SkillBadge = ({ name }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700 shadow-sm backdrop-blur-sm text-sm font-semibold text-slate-800 dark:text-slate-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all cursor-default"
    >
        {name}
    </motion.div>
);

export default About;
