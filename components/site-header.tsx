"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light text-black dark:text-white">
            Edge Research
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                  pathname === "/" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400",
                )}
              >
                Home
              </Link>
              <Link
                href="/timeline"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                  pathname === "/timeline" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400",
                )}
              >
                Timeline
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                  pathname === "/about" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400",
                )}
              >
                About
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
