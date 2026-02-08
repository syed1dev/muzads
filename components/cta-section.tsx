import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">

      {/* Top gradient border with new brand colors */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px]
                      bg-gradient-to-r from-transparent via-purple-500/50 to-transparent
                      shadow-[0_4px_20px_rgba(168,85,247,0.35)]" />

      {/* Bottom gradient border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px]
                      bg-gradient-to-r from-transparent via-purple-500/50 to-transparent
                      shadow-[0_-4px_20px_rgba(168,85,247,0.35)]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <FadeIn className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
          Ready to create
          <br />
          <span className="text-gradient-brand">agency-like content?</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          (Without the fees)
        </p>

        <Button
          size="lg"
          className="btn-gradient rounded-full px-12 py-8 h-auto text-xl font-medium
                     shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40
                     hover:scale-105 transition-all duration-300"
        >
          Buy now
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </FadeIn>
    </section>
  )
}
