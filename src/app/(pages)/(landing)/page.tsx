"use client"

import Link from 'next/link'
import Header from "@/components/header";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
                <div className={"#projects h-screen"}>
                    <Link href={'/'}>Projects</Link>
                </div>
                <div className={"#tools h-screen"}>
                    <Link href={'/colors'}>Colors</Link>
                </div>
            </div>
        </main>
    )
}
