import React from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-3 rounded-full flex items-center justify-center transition-all duration-300
        ${theme === 'dark'
                    ? 'bg-amber-400/20 text-amber-200 hover:bg-amber-400/30 border border-amber-400/30'
                    : 'bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20 border border-indigo-600/20 shadow-md'}
      `}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;
