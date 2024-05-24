"use client";
import { createContext } from "react";

export enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark",
}

interface ThemeContextType {
    theme: ThemeEnum | null;
    toggleTheme: (newTheme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: ThemeEnum.LIGHT,
    toggleTheme: () => {},
});
