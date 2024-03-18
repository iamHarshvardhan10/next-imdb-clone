"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
export const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200  min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};
