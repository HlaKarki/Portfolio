"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {FolderOpen, HomeIcon, Menu, Moon, Sun, Wrench} from "lucide-react"
import Link from "next/link";
import React from "react";
import {useTheme} from "next-themes";

export function MenuBar() {
    const {setTheme, theme} = useTheme()
    const toggleTheme = React.useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme, setTheme])

    return (
        <div className="cursor-pointer">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu />
                </SheetTrigger>
                <SheetContent side={"left"} className={"w-[50vw]"}>
                    <div className={"pt-10"}>
                        <div className="flex flex-col flex-1 items-start justify-start gap-5">
                            <Link href="/"
                                  className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                                <div className={"flex gap-5"}><HomeIcon />Home</div>
                            </Link>
                            <Link href="/#projects"
                                  className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                                <div className={"flex gap-5"}><FolderOpen />Projects</div>
                            </Link>
                            <Link href="/#tools"
                                  className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                                <div className={"flex gap-5"}><Wrench />Tools</div>
                            </Link>
                            <div className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                                <div className={"flex gap-5"} onClick={toggleTheme}>
                                    {theme === "dark" ? <Sun /> : <Moon />}
                                    Toggle Theme</div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
