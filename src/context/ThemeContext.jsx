"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [mode, setMode] = useState('retro');

    const toggle = () => {
        setMode(prev => prev === 'retro' ? 'forest' : 'retro');
    }

    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <div data-theme={mode} className="theme">
                {children}
            </div>
        </ThemeContext.Provider>
    )
}