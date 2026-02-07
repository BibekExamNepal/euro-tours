'use client'
import {Toaster} from "sonner";
import ReactQueryProvider from "./ReactQueryProvider";
import React from "react";
import {ThemeProvider} from "@/Provider/theme-provider";


interface Props {
    children: React.ReactNode;
}

export default function RootLayoutProvider({children}: Props) {
    return (
        <ThemeProvider>
        <ReactQueryProvider>
            <Toaster position="bottom-right" richColors/>
            {children}
        </ReactQueryProvider>
        </ThemeProvider>
    )

}