import React, { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { baseballTheme } from "@/styles/antd-theme";
import { ThemeContext } from "@/contexts/ThemeContext";
import type { ThemeContextType, ThemeMode } from "@/contexts/ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        // Check localStorage first, then system preference
        const saved = localStorage.getItem("baseball-theme");
        if (saved === "light" || saved === "dark") {
            return saved;
        }

        // Check system preference
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        }

        return "light";
    });

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const setTheme = (newMode: ThemeMode) => {
        setMode(newMode);
    };

    // Save theme preference to localStorage and update document attribute
    useEffect(() => {
        localStorage.setItem("baseball-theme", mode);
        document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            // Only auto-switch if user hasn't manually set a preference
            const saved = localStorage.getItem("baseball-theme");
            if (!saved) {
                setMode(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Apply the appropriate Ant Design algorithm
    const finalTheme = {
        ...baseballTheme,
        algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    };

    const contextValue: ThemeContextType = {
        mode,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <ConfigProvider theme={finalTheme}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};
