'use client'

import { ArrowRight, Building2, CheckCircle2, Landmark, MapPin } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const stats = [
  { value: '25+', label: 'Years in construction' },
  { value: '120+', label: 'Ethiopian projects' },
  { value: '8', label: 'Regional delivery teams' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0D5D3B_0_33%,#F7B801_33%_66%,#D62828_66%_100%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative z-10 max-w-3xl">
          <Badge className="mb-6 border-primary/20 bg-primary/10 px-3 py-1 text-primary" variant="outline">
            Addis Ababa construction studio
          </Badge>

          <h1
            className="max-w-4xl font-serif text-5xl font-bold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl"
            style={{ animation: 'textReveal 1s ease-out' }}
          >
            Built for Ethiopia&apos;s next landmark spaces.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72 sm:text-xl">
            Crux Construction blends modern engineering with Ethiopian craft, climate sense, and highland material intelligence for homes, hotels, offices, and mixed-use developments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground shadow-xl shadow-primary/10 hover:bg-primary/90">
              Start a Build
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 bg-background/70 text-primary hover:bg-primary/10">
              View Addis Portfolio
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="rounded-lg border-border/80 bg-card/82 py-5 shadow-sm backdrop-blur">
                <CardContent className="px-4 text-center">
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <p className="mt-2 text-xs font-medium leading-5 text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-lg border border-border bg-card shadow-2xl shadow-primary/10" />
          <div className="absolute inset-4 overflow-hidden rounded-md bg-[linear-gradient(150deg,#103928_0%,#0D5D3B_42%,#F4E6C7_42%,#F4E6C7_44%,#7A1F1F_44%,#D62828_100%)]">
            <div className="absolute inset-0 ethiopian-pattern opacity-20" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-[linear-gradient(180deg,transparent,rgba(23,35,29,0.92))]" />
            <div className="absolute bottom-16 left-8 right-8">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-accent">
                <MapPin className="h-4 w-4" />
                Addis Ababa, highland ready
              </div>
              <h2 className="max-w-md font-serif text-4xl font-bold leading-tight text-white">
                Stone, glass, shade, and structure in one disciplined build.
              </h2>
            </div>
            <div className="absolute left-8 top-8 grid gap-3">
              {[
                { icon: Landmark, text: 'Lalibela-inspired stone detailing' },
                { icon: Building2, text: 'Modern seismic-aware systems' },
                { icon: CheckCircle2, text: 'Local sourcing and site discipline' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-3 rounded-md border border-white/18 bg-white/12 px-4 py-3 text-sm font-medium text-white backdrop-blur">
                    <Icon className="h-4 w-4 text-accent" />
                    {item.text}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
