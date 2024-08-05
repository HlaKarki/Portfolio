import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./styling/globals.css";
import {Toaster} from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App", description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-primary-main dark:bg-black dark:text-white"}>
            <ThemeProvider
                defaultTheme="system"
            >
                {children}
                <Toaster />
            </ThemeProvider>
            </body>
        </html>
    );
}
