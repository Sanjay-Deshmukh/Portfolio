import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            id="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-8 h-8 flex items-center justify-center rounded-full p-1 
        ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <SunIcon className={"fill-dark"} />
            ) : (
                <MoonIcon className={"fill-dark"} />
            )}
        </button>
    );
};

export default ThemeToggle;
