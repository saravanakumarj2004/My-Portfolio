import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text, className = "", gradientWords = [] }) => {
    // Split text into words
    const words = text.split(" ");

    // Container variants for staggering children
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    // Child variants for individual words
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white flex flex-wrap justify-center gap-[0.25em] ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {words.map((word, index) => {
                const isGradient = gradientWords.includes(word);
                return (
                    <motion.span
                        variants={child}
                        key={index}
                        className={isGradient ? "text-gradient relative block" : "relative block"}
                        style={{ display: "inline-block" }} // Framer motion needs block/inline-block to translate Y
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.h2>
    );
};

export default AnimatedHeading;
