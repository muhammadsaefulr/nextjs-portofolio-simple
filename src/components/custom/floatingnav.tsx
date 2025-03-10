"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type LucideIcon, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingNavProps {
  items: {
    icon: LucideIcon
    label: string
    href: string
  }[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function FloatingNav({ items, isOpen, setIsOpen, darkMode, setDarkMode }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.href.replace("#", "")).filter(Boolean)

      const currentSection = sections.find((section) => {
        if (section === "") return false
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === item.href.replace("#", "")
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-6 border-t">
                <Button variant="outline" className="w-full justify-start gap-3" onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-11 z-40 left-1/3 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-full bg-background/80 backdrop-blur-sm shadow-lg -z-10"></div>

          <div className="flex justify-between items-center gap-4 p-2">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted text-foreground"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>

                <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground text-sm font-medium opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + items.length * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-muted text-foreground"
                aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground text-sm font-medium opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

