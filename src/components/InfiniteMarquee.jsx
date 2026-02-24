import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Settings, Code2, Cpu, FileCode2, TerminalSquare } from 'lucide-react';

const techStack = [
    { name: "React", icon: <Layout size={24} /> },
    { name: "Django", icon: <Server size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "Flutter", icon: <Cpu size={24} /> },
    { name: "Python", icon: <TerminalSquare size={24} /> },
    { name: "Java", icon: <Code2 size={24} /> },
    { name: "JavaScript", icon: <FileCode2 size={24} /> },
    { name: "SQL", icon: <Database size={24} /> },
    { name: "REST APIs", icon: <Settings size={24} /> },
    { name: "Git", icon: <TerminalSquare size={24} /> },
];

const InfiniteMarquee = () => {
    // Duplicate the array to create a seamless infinite loop
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <div className="w-full py-12 bg-white/5 dark:bg-slate-900/5 backdrop-blur-sm border-y border-white/10 overflow-hidden relative flex items-center">

            {/* Gradient Masks for smooth fade out at the edges */}
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <motion.div
                className="flex gap-12 whitespace-nowrap pl-12"
                animate={{
                    x: [0, -1000], // Will be adjusted slightly based on actual width
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Slow, elegant scroll
                        ease: "linear",
                    },
                }}
                // Calculate percentage-based translation for dynamic sizing
                style={{ width: "fit-content" }}
            >
                {/* Framer motion currently handles specific px better for infinite loops, 
                    we use a CSS animation approach below for perfect responsive looping */}
                <div className="flex gap-12 animate-marquee hover:pause-animation">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-white/20 text-slate-700 dark:text-slate-300 font-semibold shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 cursor-default"
                        >
                            <span className="text-blue-500">{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                    {/* Render a third copy to guarantee exact fit without jumping */}
                    {techStack.map((tech, index) => (
                        <div
                            key={`extra-${index}`}
                            className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-white/20 text-slate-700 dark:text-slate-300 font-semibold shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 cursor-default"
                        >
                            <span className="text-blue-500">{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default InfiniteMarquee;
