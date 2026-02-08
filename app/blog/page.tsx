import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Digital Marketing in 2025",
    excerpt: "Discover the latest trends in AI-powered marketing tools and how they're helping businesses create better content faster.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "AI & Marketing",
  },
  {
    id: 2,
    title: "10 Tips for Creating High-Converting Ad Copy",
    excerpt: "Learn the secrets behind writing ad copy that captures attention and drives conversions for your business.",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    category: "Copywriting",
  },
  {
    id: 3,
    title: "The Future of Content Creation: What to Expect",
    excerpt: "Explore how AI tools are reshaping the content creation landscape and what it means for marketers.",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    category: "Trends",
  },
  {
    id: 4,
    title: "Building a Brand Voice That Resonates",
    excerpt: "A comprehensive guide to developing a consistent brand voice across all your marketing channels.",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    category: "Branding",
  },
  {
    id: 5,
    title: "Maximizing ROI with AI-Generated Ads",
    excerpt: "Case studies and strategies for getting the most out of AI-powered advertising tools.",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    category: "Case Studies",
  },
  {
    id: 6,
    title: "Social Media Trends Every Marketer Should Know",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends for the new year.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Social Media",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[460px] h-[460px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-red-500/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1.2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link> */}

          <div className="inline-flex p-[2px] rounded-full bg-gradient-brand mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background">
              <span className="text-sm font-medium text-gradient-brand">Insights</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            The{" "}
            <span className="text-gradient-brand">
              Muzads
            </span>{" "}
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Insights, tips, and strategies for modern marketers. Learn how to create better content and grow your business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group p-6 rounded-2xl bg-card/80 backdrop-blur border border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
