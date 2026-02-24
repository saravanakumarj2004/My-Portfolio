import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../ThemeContext';

const ParticleBackground = () => {
    const { isDark, accentTheme } = useTheme();
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Explicit hex mappings for tsParticles since it doesn't parse CSS variables from the DOM dynamically
    const getThemeColors = () => {
        switch (accentTheme) {
            case 'aurora':
                return { primary: "#10b981", secondary: "#34d399", links: "#059669" }; // Emerald/Teal
            case 'sunset':
                return { primary: "#f43f5e", secondary: "#fb7185", links: "#e11d48" }; // Rose/Orange
            default:
                return { primary: "#3b82f6", secondary: "#60a5fa", links: "#2563eb" }; // Blue/Purple
        }
    };

    const colors = getThemeColors();

    // Configuration for the sleek network effect
    const options = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60, // Capped at 60fps for guaranteed smooth scrolling
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab", // Lines connect to cursor on hover
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 140,
                    links: {
                        opacity: isDark ? 0.3 : 0.4,
                    }
                }
            },
        },
        particles: {
            color: {
                // Pass raw hex strings to tsParticles physics engine
                value: [colors.primary, colors.secondary],
            },
            links: {
                color: colors.links,
                distance: 150,
                enable: true,
                opacity: isDark ? 0.3 : 0.6,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 40, // Keep it sparse and elegant
            },
            opacity: {
                value: isDark ? 0.3 : 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 -z-10"
            />
        );
    }

    return null;
};

export default ParticleBackground;
