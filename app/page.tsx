import Link from "next/link"
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
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="container relative z-10 flex flex-col items-center gap-8 px-4 md:px-6">
          <div className="inline-flex items-center border border-primary/50 bg-black/50 px-6 py-2 text-sm font-bold text-primary backdrop-blur-md uppercase tracking-[0.2em] skew-x-[-12deg]">
            <span className="skew-x-[12deg] flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Premium Auto Detailing <span className="text-white/50 mx-2">|</span> プレミアムディテール
            </span>
          </div>

          <div className="relative">
            {/* Japanese Watermark */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.03] whitespace-nowrap select-none pointer-events-none z-0">
              究極の洗車
            </span>

            <h1 className="relative z-10 font-orbitron text-6xl font-black uppercase tracking-widest sm:text-8xl md:text-9xl text-white italic">
              JDM<span className="text-primary text-glow outline-text">WASH</span>
            </h1>
            <p className="font-orbitron text-xl sm:text-2xl text-primary font-bold uppercase tracking-[0.5em] mt-2 animate-pulse">
              Japanese Detailed Machines
            </p>
          </div>

          <p className="max-w-[700px] text-lg text-zinc-400 md:text-xl font-light tracking-wide mt-4 border-l-2 border-primary pl-6 text-left">
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
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-xl border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black hover:border-white min-w-[200px] skew-x-[-12deg] rounded-none transition-all duration-300" asChild>
              <Link href="/services">
                <span className="skew-x-[12deg]">View Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST STRIP */}
      <section className="container px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-black/80 border border-primary/20 backdrop-blur-xl">
          {[
            { icon: Trophy, title: "Premium Products", sub: "Only the best" },
            { icon: ShieldCheck, title: "Paint Safe", sub: "pH Neutral" },
            { icon: Droplets, title: "Purified Water", sub: "No Spots" },
            { icon: Clock, title: "Fast Service", sub: "No Shortcuts" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 border-r border-b border-primary/10 last:border-r-0 hover:bg-primary/5 transition-colors group">
              <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-orbitron font-bold text-lg uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="container px-4 md:px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-primary/20 pb-8">
          <div>
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold uppercase italic tracking-tighter">
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

      {/* 4. FEATURED PACKAGE */}
      {signaturePackage && (
        <section className="py-24 bg-zinc-950 border-y border-primary/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-primary text-black font-black uppercase tracking-widest text-xs px-4 py-1 skew-x-[-12deg]">
                  <span className="skew-x-[12deg]">Featured Package</span>
                </div>
                <h2 className="font-orbitron text-5xl md:text-7xl font-bold uppercase italic leading-[0.9]">
                  {signaturePackage.name}
                </h2>
                <p className="text-xl text-zinc-400 font-light border-l-4 border-primary pl-6">
                  {signaturePackage.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {signaturePackage.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="h-2 w-2 bg-primary rotate-45 group-hover:bg-white transition-colors" />
                      <span className="text-zinc-300 uppercase tracking-wide text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-primary hover:text-white font-black text-xl uppercase tracking-widest skew-x-[-12deg] rounded-none transition-all duration-300" asChild>
                  <Link href={`/book?service=${signaturePackage.slug}`}>
                    <span className="skew-x-[12deg]">Select Package</span>
                  </Link>
                </Button>
              </div>

              {/* Visual Element */}
              <div className="relative aspect-square max-w-[500px] mx-auto border border-primary/30 bg-black/50 p-8 backdrop-blur-sm rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary -mt-4 -mr-4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary -mb-4 -ml-4" />

                <div className="h-full w-full flex flex-col items-center justify-center text-center border border-white/5 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Zap className="h-32 w-32 text-primary mb-8 animate-pulse" />
                  <h3 className="font-orbitron text-4xl font-bold uppercase text-white mb-2">Showroom<br />Finish</h3>
                  <p className="text-primary font-bold uppercase tracking-[0.5em] text-xs">Guaranteed Quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION */}
      <section className="container px-4 md:px-6 py-24">
        <h2 className="font-orbitron text-3xl font-bold uppercase text-center mb-20 tracking-widest">
          The Process <span className="text-primary">///</span> 工程
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Check-in", jp: "チェックイン", desc: "Inspection", icon: CheckCircle },
            { title: "Pre-Rinse", jp: "予備洗浄", desc: "Decontamination", icon: Droplets },
            { title: "Detailing", jp: "詳細", desc: "Deep Clean", icon: Sparkles },
            { title: "Finish", jp: "仕上げ", desc: "Protection", icon: Trophy },
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12" />
              <div className="relative flex flex-col items-center text-center border border-white/10 p-8 bg-black hover:border-primary/50 transition-colors">
                <div className="text-4xl font-black text-white/10 absolute top-2 right-4 select-none">0{i + 1}</div>
                <step.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-orbitron text-xl font-bold uppercase text-white">{step.title}</h3>
                <p className="text-xs text-primary uppercase tracking-widest mb-2">{step.jp}</p>
                <p className="text-zinc-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LOCATION / CTA */}
      <section className="container px-4 md:px-6 py-24 grid md:grid-cols-2 gap-0">
        <div className="bg-primary p-12 md:p-16 flex flex-col justify-center items-start text-black min-h-[400px]">
          <h2 className="font-orbitron text-5xl font-black uppercase italic mb-6">Start Your Engine</h2>
          <p className="font-bold text-xl max-w-md mb-8">Ready to transform your vehicle? Book your appointment today and experience the difference.</p>
          <Button size="lg" className="h-14 px-10 bg-black text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-lg rounded-none skew-x-[-12deg] transition-all" asChild>
            <Link href="/book"><span className="skew-x-[12deg]">Book Appointment</span></Link>
          </Button>
        </div>
        <div className="bg-zinc-900 border-y md:border-y-0 md:border-r border-white/10 relative min-h-[400px] group overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/111/444.png?text=Map+Location')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 p-12">
            <h3 className="font-orbitron text-2xl font-bold uppercase text-white mb-2">Visit HQ</h3>
            <p className="text-zinc-400 mb-1">{siteConfig.contact.address}</p>
            <p className="text-primary font-bold">{siteConfig.contact.hours}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
