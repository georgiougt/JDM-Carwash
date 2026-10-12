import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, ShieldCheck, Sparkles, Clock, Droplets, Trophy, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/config"

export default function Home() {
  const featuredServices = services.slice(0, 3)
  const signaturePackage = services.find(s => s.slug === "signature-wash")

  return (
    <div className="flex flex-col gap-0 pb-16 bg-background">
      {/* 1. HERO SECTION WITH REAL PERFORMANCE CAR PHOTOGRAPHY */}
      <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
        {/* Real Atmospheric Car Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="JDM High Performance Car Wash Backdrop"
            fill
            priority
            className="object-cover object-center opacity-30 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="container relative z-10 flex flex-col items-center gap-8 px-4 md:px-6">
          <div className="inline-flex items-center border border-primary/50 bg-black/70 px-6 py-2 text-sm font-bold text-primary backdrop-blur-md uppercase tracking-[0.2em] skew-x-[-12deg] shadow-[0_0_15px_rgba(255,0,85,0.2)]">
            <span className="skew-x-[12deg] flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Premium Auto Detailing <span className="text-white/50 mx-2">|</span> プレミアムディテール
            </span>
          </div>

          <div className="relative">
            {/* Japanese Watermark */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.04] whitespace-nowrap select-none pointer-events-none z-0">
              究極の洗車
            </span>

            <h1 className="relative z-10 font-orbitron text-6xl font-black uppercase tracking-widest sm:text-8xl md:text-9xl text-white italic">
              JDM<span className="text-primary text-glow outline-text">WASH</span>
            </h1>
            <p className="font-orbitron text-xl sm:text-2xl text-primary font-bold uppercase tracking-[0.5em] mt-2 animate-pulse">
              Japanese Detailed Machines
            </p>
          </div>

          <p className="max-w-[700px] text-lg text-zinc-300 md:text-xl font-light tracking-wide mt-4 border-l-2 border-primary pl-6 text-left backdrop-blur-sm bg-black/40 py-2">
            The ultimate centre for your premium car care in <span className="text-white font-bold">{siteConfig.location}</span>.
            <br />Unmatched care. State-of-the-art filtration. Pure performance.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row mt-8">
            <Button size="lg" className="h-14 px-10 font-bold text-xl bg-primary hover:bg-white hover:text-black text-white shadow-[0_0_30px_-5px_var(--primary)] text-glow min-w-[200px] skew-x-[-12deg] rounded-none transition-all duration-300 group" asChild>
              <Link href="/book">
                <span className="skew-x-[12deg] flex items-center gap-2">
                  Book Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-xl border-2 border-white/20 bg-black/50 text-white hover:bg-white hover:text-black hover:border-white min-w-[200px] skew-x-[-12deg] rounded-none transition-all duration-300 backdrop-blur-md" asChild>
              <Link href="/services">
                <span className="skew-x-[12deg]">View Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST STRIP */}
      <section className="container px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-black/90 border border-primary/20 backdrop-blur-xl shadow-2xl">
          {[
            { icon: Trophy, title: "Premium Products", sub: "Only the best" },
            { icon: ShieldCheck, title: "Paint Safe", sub: "pH Neutral & Touchless" },
            { icon: Droplets, title: "Purified Water", sub: "Zero Water Spots" },
            { icon: Clock, title: "Fast Turnaround", sub: "No Shortcuts Taken" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 border-r border-b border-primary/10 last:border-r-0 hover:bg-primary/5 transition-colors group">
              <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-orbitron font-bold text-lg uppercase tracking-wider text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="container px-4 md:px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-primary/20 pb-8">
          <div>
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold uppercase italic tracking-tighter text-white">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-zinc-400 mt-2 tracking-widest uppercase text-sm">Professional Detailing Packages</p>
          </div>
          <Button variant="link" className="text-primary hover:text-white font-orbitron uppercase tracking-widest text-lg" asChild>
            <Link href="/services">View All ///</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED SIGNATURE PACKAGE WITH REAL PEXELS VISUAL */}
      {signaturePackage && (
        <section className="py-24 bg-zinc-950 border-y border-primary/20 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-primary text-black font-black uppercase tracking-widest text-xs px-4 py-1 skew-x-[-12deg]">
                  <span className="skew-x-[12deg]">Featured Package</span>
                </div>
                <h2 className="font-orbitron text-5xl md:text-7xl font-bold uppercase italic leading-[0.9] text-white">
                  {signaturePackage.name}
                </h2>
                <p className="text-xl text-zinc-300 font-light border-l-4 border-primary pl-6">
                  {signaturePackage.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {signaturePackage.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="h-2 w-2 bg-primary rotate-45 group-hover:bg-white transition-colors" />
                      <span className="text-zinc-200 uppercase tracking-wide text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-primary hover:text-white font-black text-xl uppercase tracking-widest skew-x-[-12deg] rounded-none transition-all duration-300 shadow-xl" asChild>
                  <Link href={`/book?service=${signaturePackage.slug}`}>
                    <span className="skew-x-[12deg]">Select Package</span>
                  </Link>
                </Button>
              </div>

              {/* Real Photography Feature Display */}
              <div className="relative aspect-square max-w-[500px] w-full mx-auto border border-primary/40 bg-black/60 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,0,85,0.2)] group">
                <Image
                  src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Ceramic Hydrophobic Coating Results"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-black font-mono font-bold text-xs uppercase px-3 py-1">
                  100% Paint-Safe
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-orbitron text-2xl sm:text-3xl font-black uppercase text-white">Showroom Mirror Finish</h3>
                  <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mt-1">Hydrophobic 9H Ceramic Protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION */}
      <section className="container px-4 md:px-6 py-24">
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold uppercase text-center mb-20 tracking-widest text-white">
          The Process <span className="text-primary">///</span> 工程
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Check-in", jp: "チェックイン", desc: "Digital inspection & paint depth assessment", icon: CheckCircle },
            { title: "Pre-Rinse", jp: "予備洗浄", desc: "Touchless pH-neutral snow foam bath", icon: Droplets },
            { title: "Detailing", jp: "詳細", desc: "Plush microfiber wash & steam extraction", icon: Sparkles },
            { title: "Shield", jp: "仕上げ", desc: "Ceramic sealant & mirror inspection", icon: Trophy },
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12" />
              <div className="relative flex flex-col items-center text-center border border-white/10 p-8 bg-black/80 hover:border-primary/50 transition-colors h-full">
                <div className="text-4xl font-black text-white/10 absolute top-2 right-4 select-none font-orbitron">0{i + 1}</div>
                <step.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-orbitron text-lg font-bold uppercase text-white">{step.title}</h3>
                <span className="text-xs text-primary/70 font-mono mb-2">{step.jp}</span>
                <p className="text-xs text-zinc-400 mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
