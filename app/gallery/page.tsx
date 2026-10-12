"use client"

import * as React from "react"
import Image from "next/image"
import { Sparkles, Camera, CheckCircle2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Real Pexels Detailing Photography
const galleryItems = [
    {
        id: 1,
        category: "Protection",
        title: "Ceramic Glass Reflection",
        car: "Porsche 911 GT3",
        image: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Full multi-stage paint correction followed by 3-year hydrophobic 9H ceramic coating."
    },
    {
        id: 2,
        category: "Interior",
        title: "Alcantara & Leather Revival",
        car: "Nissan GT-R Nismo",
        image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "High-temperature steam extraction, leather matte conditioning, and UV barrier application."
    },
    {
        id: 3,
        category: "Detailing",
        title: "Pristine Engine Bay Clean",
        car: "Toyota Supra MK4",
        image: "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Safe non-conductive degreasing, steam blast, and factory OEM satin dressing."
    },
    {
        id: 4,
        category: "Protection",
        title: "Hydrophobic Water Beading",
        car: "BMW M4 Competition",
        image: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Contact angle > 115 degrees ceramic shield deflecting road grime and acid rain."
    },
    {
        id: 5,
        category: "Wash",
        title: "Touchless pH Snow Foam Bath",
        car: "Honda NSX",
        image: "https://images.pexels.com/photos/6873049/pexels-photo-6873049.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Dense foaming encapsulation of grit before any contact wash, preventing micro-marring."
    },
    {
        id: 6,
        category: "Detailing",
        title: "Dual-Action Swirl Removal",
        car: "Mazda RX-7 FD",
        image: "https://images.pexels.com/photos/6873024/pexels-photo-6873024.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Two-step compound and finishing jeweling polish eliminating 90%+ clear coat defects."
    },
    {
        id: 7,
        category: "Detailing",
        title: "Forged Wheel Decontamination",
        car: "Rays Volk TE37",
        image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Iron fallout reaction removal, brake dust extraction, and heat-resistant rim ceramic coat."
    },
    {
        id: 8,
        category: "Wash",
        title: "Deep Gloss Hand Finish",
        car: "Audi RS6 Avant",
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Ultra-plush Korean microfiber hand wash with deionized pure spot-free water rinse."
    },
]

export default function GalleryPage() {
    const [filter, setFilter] = React.useState("All")
    const categories = ["All", "Wash", "Interior", "Detailing", "Protection"]

    const filteredItems = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === filter)

    return (
        <div className="container py-16 md:py-24 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-[0.2em]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Verified Atelier Results
                </div>
                <h1 className="font-orbitron text-5xl md:text-7xl font-black uppercase text-white tracking-tight">
                    Showcase <span className="text-primary text-glow outline-text">Gallery</span>
                </h1>
                <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
                    Real exotic, performance, and daily builds detailed to perfection in our Limassol studio. Zero filters, just surgical execution.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "rounded-full px-6 text-xs uppercase tracking-widest font-bold transition-all",
                            filter === cat
                                ? "bg-primary text-primary-foreground shadow-[0_0_20px_-3px_var(--primary)] border-primary"
                                : "border-border/50 text-zinc-400 hover:text-white hover:border-primary/50 bg-black/40"
                        )}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                    <Dialog key={item.id}>
                        <DialogTrigger asChild>
                            <div className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-border/40 bg-zinc-950 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_var(--primary)] hover:border-primary">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge variant="secondary" className="bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold text-primary border border-primary/30">
                                        {item.category}
                                    </Badge>
                                </div>

                                {/* Content Details */}
                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{item.car}</span>
                                    <h3 className="font-orbitron font-bold text-white text-lg leading-tight uppercase mt-0.5 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Hover Prompt */}
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-md p-2 rounded-full border border-primary/50 text-primary">
                                    <Camera className="h-4 w-4" />
                                </div>
                            </div>
                        </DialogTrigger>

                        {/* Modal Preview */}
                        <DialogContent className="border-border/60 bg-zinc-950/95 backdrop-blur-2xl sm:max-w-4xl p-0 overflow-hidden text-white">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <Badge className="bg-primary text-black font-bold uppercase text-xs mb-2">
                                        {item.category}
                                    </Badge>
                                    <h2 className="text-2xl sm:text-3xl font-black uppercase font-orbitron">{item.title}</h2>
                                    <p className="text-zinc-300 text-sm mt-1 max-w-xl">{item.description}</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}
