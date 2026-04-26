'use client'

import { CheckCircle2, Compass, Gem, Handshake, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { PageDivider } from './page-divider'

const values = [
  { icon: ShieldCheck, title: 'Site Discipline', description: 'Clear schedules, controlled procurement, and clean handovers.' },
  { icon: Compass, title: 'Climate Sense', description: 'Shade, ventilation, water flow, and orientation designed for Ethiopian conditions.' },
  { icon: Gem, title: 'Craft Detail', description: 'Stone, timber, metal, and finishing work treated as visible signatures.' },
  { icon: Handshake, title: 'Trusted Partnership', description: 'Transparent communication from feasibility through final inspection.' },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageDivider eyebrow="Our approach" title="A construction partner shaped by Ethiopian ambition." />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xl leading-9 text-foreground/76">
              We build for clients who want more than a finished shell. Crux brings structural rigor, local trade networks, and a deep respect for Ethiopian place-making into every residence, hospitality, commercial, and mixed-use project.
            </p>
            <div className="mt-8 space-y-4">
              {['Addis Ababa permitting and delivery insight', 'Highland weather and drainage planning', 'Premium finishes with local material fluency'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="rounded-lg border-border/80 bg-card/88 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
