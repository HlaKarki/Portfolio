"use client"

import Link from 'next/link'
import Header from "@/components/header";
import {ThemeToggle} from "@/components/darkMode/toggleButton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
                <Header/>
                <div className={"#tools"}>
                    <Link href={'/colors'}>Colors</Link>
                </div>
                <ThemeToggle />
            </div>
        </main>
    )
}
