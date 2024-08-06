"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState<boolean>(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme==="dark" ? "light" : "dark")}>
            {
                theme && theme === "dark" ?
                <Sun className={""}/> :
                <Moon className={"w-5"}/>
            }
        </Button>
    )
}
