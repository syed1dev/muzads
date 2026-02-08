import { Navbar } from "@/components/navbar"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[340px] h-[340px] bg-red-500/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1.4s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex p-[2px] rounded-full bg-gradient-brand mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background">
              <span className="text-sm font-medium text-gradient-brand">Support</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Frequently asked{" "}
            <span className="text-gradient-brand">
              questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Quick answers about how Muzads works, pricing, and getting started.
          </p>
        </div>
      </section>

      <FAQ showHeader={false} />
      <CTASection />
      <Footer />
    </main>
  )
}
