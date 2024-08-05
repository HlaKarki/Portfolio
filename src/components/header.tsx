import Link from "next/link";
import { ThemeToggle } from "@/components/darkMode/toggleButton";
import { CommandPalette } from "@/components/commandDialog";
import React from "react";
import { Menu } from "lucide-react"; // Assuming you're using lucide-react for icons

export default function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-black dark:bg-opacity-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left section: Navigation links (hidden on mobile) */}
                    <div className="hidden md:flex flex-1 items-center justify-start space-x-4">
                        <Link href="/" className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                            Home
                        </Link>
                        <Link href="/#projects" className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                            Projects
                        </Link>
                        <Link href="/#tools" className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                            Tools
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-800 dark:text-white hover:text-primary-light transition-colors duration-300">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Center section: CommandPalette */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <CommandPalette />
                    </div>

                    {/* Right section: ThemeToggle */}
                    <div className="flex-1 flex justify-end">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}