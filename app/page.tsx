import { Header } from '@/components/header'
import { ScrollProgress } from '@/components/scroll-progress'
import { OrganicBackground } from '@/components/organic-bg'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <OrganicBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
