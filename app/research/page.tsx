import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white geometric-bg">
      <div className="geometric-element geometric-element-1"></div>
      <div className="geometric-element geometric-element-2"></div>

      <SiteHeader />


      {/* Team Members */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
          I&#39;m trying my best...
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
