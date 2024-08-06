"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState<boolean>(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <Button
            variant={"ghost"}
            onClick={() => setTheme(theme==="dark" ? "light" : "dark")}
        >
            {
                theme && theme === "dark" ?
                <Sun className={"md:hover:scale-110 transition duration-300 ease-in-out"}/> :
                <Moon className={"w-5 md:hover:scale-107 transition duration-300 ease-in-out"}/>
            }
        </Button>
    )
}
