"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/config"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-black/90 backdrop-blur-md border-b border-primary/50 shadow-[0_4px_30px_-5px_var(--primary)]"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex flex-col">
                        <span className="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-widest text-foreground italic group-hover:skew-x-[-10deg] transition-transform duration-300">
                            JDM<span className="text-primary">CARWASH</span>
                        </span>
                        <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase font-bold text-right">
                            JDM洗車 <span className="text-primary mx-1">///</span> EST. 2026
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group relative text-sm font-bold transition-all duration-300 uppercase tracking-widest font-orbitron",
                                pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                            )}
                        >
                            <span className="relative z-10">{item.title}</span>
                            <span className={cn(
                                "absolute bottom-0 left-0 w- h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                                pathname === item.href ? "w-full" : "w-0"
                            )}></span>
                        </Link>
                    ))}
                    <Button asChild className="ml-4 font-bold bg-primary hover:bg-white hover:text-black hover:skew-x-[-10deg] text-white shadow-[0_0_15px_-3px_var(--primary)] transition-all duration-300 rounded-none border-2 border-primary">
                        <Link href="/book" className="flex items-center gap-2">
                            <span className="uppercase tracking-widest font-orbitron">Book Now</span>
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-primary hover:bg-transparent">
                            <Menu className="h-8 w-8" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-primary/50 text-white w-full sm:w-[400px]">
                        <div className="flex flex-col gap-8 mt-12">
                            <Link href="/" className="font-orbitron text-3xl font-bold uppercase tracking-widest text-center italic">
                                JDM<span className="text-primary">CARWASH</span>
                            </Link>
                            <nav className="flex flex-col gap-6 items-center">
                                {siteConfig.nav.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-2xl font-bold transition-colors hover:text-primary uppercase tracking-widest font-orbitron",
                                            pathname === item.href ? "text-primary" : "text-zinc-400"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                                <div className="h-px bg-primary/30 w-1/2 my-4" />
                                <Button asChild className="w-full font-bold bg-primary hover:bg-white hover:text-black text-white shadow-lg shadow-primary/20 rounded-none h-12 uppercase tracking-widest font-orbitron">
                                    <Link href="/book">Book Now</Link>
                                </Button>
                                <Button variant="outline" asChild className="w-full border-primary/50 text-white hover:bg-primary/20 hover:text-primary rounded-none h-12 uppercase tracking-widest font-orbitron">
                                    <Link href="tel:+35799123456">
                                        <Phone className="mr-2 h-4 w-4" /> Call Us
                                    </Link>
                                </Button>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
