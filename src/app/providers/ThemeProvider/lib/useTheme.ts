import {useContext, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    handleTheme: () => void;
    theme: Theme;
}
export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {theme, handleTheme}
}