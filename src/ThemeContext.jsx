import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default to dark mode for a premium feel
    const [accentTheme, setAccentTheme] = useState('aurora'); // 'default', 'aurora', 'sunset'

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // Update body class for the background
        if (theme === 'dark') {
            document.body.classList.remove('bg-mesh-light');
            document.body.classList.add('bg-mesh-dark');
        } else {
            document.body.classList.remove('bg-mesh-dark');
            document.body.classList.add('bg-mesh-light');
        }
    }, [theme]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('theme-aurora', 'theme-sunset');

        if (accentTheme !== 'default') {
            root.classList.add(`theme-${accentTheme}`);
        }
    }, [accentTheme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, accentTheme, setAccentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
