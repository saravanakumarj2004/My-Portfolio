import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';
import { useTheme } from './../ThemeContext';

const themes = [
    { name: 'Cosmic', id: 'default', color1: 'bg-blue-500', color2: 'bg-purple-500' },
    { name: 'Aurora', id: 'aurora', color1: 'bg-emerald-500', color2: 'bg-teal-500' },
    { name: 'Sunset', id: 'sunset', color1: 'bg-rose-500', color2: 'bg-orange-500' },
];

const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { accentTheme, setAccentTheme } = useTheme();

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="absolute bottom-16 right-0 mb-4 glass-panel p-4 rounded-2xl shadow-2xl border border-white/20 w-48"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-slate-800 dark:text-white">Select Theme</span>
                            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => setAccentTheme(theme.id)}
                                    className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all ${accentTheme === theme.id
                                        ? 'bg-slate-100 dark:bg-slate-800 shadow-inner'
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                        }`}
                                >
                                    <div className="flex -space-x-1">
                                        {/* Pure tailwind backgrounds for preview, ignoring our overrides for the preview circles by using hardcoded style if needed, 
                                            but since we overrode blue/purple in tailwind config, the preview will use the new variables too.
                                            Actually, for the preview, we can just use inline styles to guarantee the true colors:
                                        */}
                                        <div className={`w-5 h-5 rounded-full shadow-sm border border-white/20 ${theme.id === 'default' ? 'bg-[#3b82f6]' : theme.id === 'aurora' ? 'bg-[#10b981]' : 'bg-[#f43f5e]'}`} />
                                        <div className={`w-5 h-5 rounded-full shadow-sm border border-white/20 ${theme.id === 'default' ? 'bg-[#a855f7]' : theme.id === 'aurora' ? 'bg-[#14b8a6]' : 'bg-[#f97316]'}`} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {theme.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(!isOpen)}
                // Use blue-500 directly, since Tailwind translates it to var(--primary-500), it will automatically change its own color!
                className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 backdrop-blur-md transition-shadow"
            >
                <Palette size={24} />
            </motion.button>
        </div>
    );
};

export default ThemeSwitcher;
