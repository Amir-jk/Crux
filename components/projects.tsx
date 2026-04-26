'use client'

import { ArrowUpRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { PageDivider } from './page-divider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const projects = [
  {
    title: 'Bole Residence Court',
    category: 'residential',
    location: 'Bole, Addis Ababa',
    description: 'Eight premium family villas organized around shared gardens, shaded entries, and hand-finished stone walls.',
    palette: 'from-primary via-primary/70 to-accent',
  },
  {
    title: 'Piassa Heritage Fit-Out',
    category: 'commercial',
    location: 'Piassa, Addis Ababa',
    description: 'Restaurant and retail interior preserving old-city character while upgrading lighting, services, and guest flow.',
    palette: 'from-red-800 via-red-700 to-accent',
  },
  {
    title: 'Entoto View Hotel',
    category: 'hospitality',
    location: 'Entoto Ridge',
    description: 'A hillside hospitality concept with terraced structure, panoramic glazing, and controlled drainage systems.',
    palette: 'from-stone-800 via-primary to-stone-300',
  },
  {
    title: 'Hawassa Mixed-Use Block',
    category: 'commercial',
    location: 'Hawassa',
    description: 'Retail frontage, offices, and serviced apartments sequenced for fast leasing and long-term maintenance.',
    palette: 'from-blue-900 via-primary to-accent',
  },
]

const categories = ['all', 'residential', 'commercial', 'hospitality']

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageDivider eyebrow="Selected work" title="Portfolio concepts rooted in Ethiopian neighborhoods." />

        <Tabs defaultValue="all" className="mt-16">
          <div className="flex justify-center">
            <TabsList className="h-auto flex-wrap rounded-lg border border-border bg-card p-1 shadow-sm">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {category === 'all' ? 'All projects' : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => {
            const visible = category === 'all' ? projects : projects.filter((project) => project.category === category)
            return (
              <TabsContent key={category} value={category} className="mt-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {visible.map((project) => (
                    <Card key={project.title} className="overflow-hidden rounded-lg border-border bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className={`relative h-72 bg-gradient-to-br ${project.palette}`}>
                        <div className="absolute inset-0 ethiopian-pattern opacity-20" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/85 to-transparent" />
                        <Badge className="absolute left-5 top-5 bg-background text-foreground" variant="secondary">
                          {project.location}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {project.category}
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-9 w-9 text-primary">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground">{project.title}</h3>
                        <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
