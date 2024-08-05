"use client"

import * as React from "react"
import {Moon, Settings, Smile, Sun, User, Hammer, Wrench, FolderOpen, HomeIcon,} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {useTheme} from "next-themes";
import {usePathname, useRouter} from "next/navigation";

import {useScrollToSection} from "@/app/hooks/useScrollToSection";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()
    const {setTheme, theme} = useTheme()
    const router = useRouter()

    const toggleTheme = React.useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        if (open) {
            setOpen(false)
        }
    }, [theme, setTheme, open])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (
                e.metaKey || e.ctrlKey
            )) {
                e.preventDefault()
                setOpen((open) => !open)
            } else if (e.key === "b" && (
                e.metaKey || e.ctrlKey
            )) {
                e.preventDefault()
                toggleTheme()
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [toggleTheme])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    const scrollToSection = React.useCallback((sectionId: string) => {
        setOpen(false)
        // If we're not on the home page, we can't scroll directly
        if (pathname !== '/') {
            // We'll handle the scroll after navigation in a useEffect
            console.log("in here?")
            router.push(`/#${sectionId}`);
            return
        }
        // If we're on the home page, scroll immediately
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView()
        }
    }, [pathname])

    // This effect handles scrolling after navigation
    React.useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const sectionId = window.location.hash.slice(1) // remove the '#'
            const section = document.getElementById(sectionId)
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView()
                }, 0)
            }
        }
    }, [pathname])

    return (
        <>
            <p className="text-sm text-muted-foreground">
                <kbd
                    className={"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded "
                               + "bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 "
                               + "border border-black dark:border-gray-300"}>
                    <span className="text-xs">⌘</span>K
                </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..."/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem onSelect={() => runCommand(() => console.log("Search Emoji"))}>
                            <Smile className="mr-2 h-4 w-4"/>
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => scrollToSection("projects"))}>
                            <FolderOpen className="mr-2 h-4 w-4"/>
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => scrollToSection("tools"))}>
                            <Wrench className="mr-2 h-4 w-4"/>
                            <span>Tools</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator/>
                    <CommandGroup heading="Settings">
                        <CommandItem onSelect={() => runCommand(() => console.log("Profile"))}>
                            <User className="mr-2 h-4 w-4"/>
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(toggleTheme)}>
                            {theme === 'dark' ? <Sun className="mr-2 h-4 w-4"/> : <Moon className="mr-2 h-4 w-4"/>}
                            <span>Toggle Theme</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => console.log("Setting"))}>
                            <Settings className="mr-2 h-4 w-4"/>
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Navigation">
                        <CommandItem onSelect={() => runCommand(() => scrollToSection("home"))}>
                            <HomeIcon className="mr-2 h-4 w-4"/>
                            <span>Home</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
