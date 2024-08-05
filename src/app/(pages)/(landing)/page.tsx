"use client"

import Link from 'next/link'
import Header from "@/components/header";

export default function Home() {
    return (
        <main id="home" className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
                <div id="projects" className={"h-screen flex flex-col items-center justify-center"}>
                    <Link href={'/'}>Projects</Link>
                </div>
                <section id="tools" className={"h-screen flex flex-col items-center justify-center"}>
                    <Link href={'/colors'}>Colors</Link>
                </section>
            </div>
        </main>
    )
}
