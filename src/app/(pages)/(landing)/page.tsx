"use client"

import Link from 'next/link'
import Header from "@/components/header";
import {useTheme} from "@/components/ThemeProvider";
import {Moon, Sun} from "lucide-react";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
                <Header/>
                <div className={''}>Welcome</div>

                <div className={"#tools"}>
                    <Link href={'/colors'}>Colors</Link>
                </div>

                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-2 rounded-full bg-primary-light dark:bg-primary-dark"
                >
                    {theme === "light" ? <Moon size={20}/> : <Sun size={20}/>}
                </button>
            </div>
        </main>
    )
}
