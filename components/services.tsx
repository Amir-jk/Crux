'use client'

import { BarChart3, Building2, Factory, Hammer, Home, Lightbulb } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { PageDivider } from './page-divider'

const services = [
  {
    icon: Building2,
    title: 'Commercial Development',
    description: 'Office, retail, and hospitality projects planned for visibility, durability, and efficient operations.',
    tag: 'Addis growth corridors',
  },
  {
    icon: Home,
    title: 'Residential Villas',
    description: 'High-comfort homes with courtyards, shaded terraces, premium kitchens, and careful finish coordination.',
    tag: 'Family estates',
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    description: 'Complete site execution, trade coordination, procurement controls, and quality documentation.',
    tag: 'Turnkey delivery',
  },
  {
    icon: Lightbulb,
    title: 'Design Consultation',
    description: 'Early-stage guidance on constructability, budget ranges, materials, and long-term maintenance.',
    tag: 'Pre-build clarity',
  },
  {
    icon: BarChart3,
    title: 'Project Management',
    description: 'Cost tracking, milestone reporting, contractor governance, and risk management for complex builds.',
    tag: 'Owner representation',
  },
  {
    icon: Factory,
    title: 'Fit-Out and Renovation',
    description: 'Restaurants, offices, clinics, showrooms, and heritage-sensitive upgrades delivered with low disruption.',
    tag: 'Fast interiors',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/55 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageDivider eyebrow="Services" title="From concept pricing to finished Ethiopian landmarks." />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group rounded-lg border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/18 group-hover:bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-accent/50 bg-accent/10 text-foreground">
                      {service.tag}
                    </Badge>
                  </div>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
