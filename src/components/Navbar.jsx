import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-4 right-4 z-50 px-6 py-4 glass-panel border-b rounded-b-2xl mt-2"
        >
            <div className="flex justify-between items-center relative">
                <div className="text-2xl font-bold tracking-tight z-50">
                    <span className="text-gradient">Saravana</span> Kumar
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 font-medium">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4 z-50">
                    <ThemeToggle />
                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden p-2 text-slate-800 dark:text-slate-200 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden mt-4"
                    >
                        <div className="flex flex-col space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
