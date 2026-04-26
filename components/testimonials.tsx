'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { PageDivider } from './page-divider'

const testimonials = [
  {
    name: 'Mekdes Alemu',
    title: 'Owner, Bole Residence Court',
    content: 'Crux understood the Ethiopian family home immediately: privacy, outdoor life, durable finishes, and a calm process. The site stayed organized from excavation to handover.',
  },
  {
    name: 'Dawit Tesfaye',
    title: 'Managing Partner, Piassa Hospitality Group',
    content: 'They protected the character of our old building while making the space commercially strong. Their reporting and coordination saved us weeks.',
  },
  {
    name: 'Hana Bekele',
    title: 'Development Director, Rift Properties',
    content: 'The team brought discipline to a complex mixed-use schedule. What impressed us most was how quickly they solved procurement and finishing decisions.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoplay])

  const go = (direction: 1 | -1) => {
    setCurrent((prev) => (prev + direction + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="bg-secondary/55 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <PageDivider eyebrow="Client voice" title="Trusted by owners building in Ethiopia." />

        <Card className="mt-16 rounded-lg border-border bg-card shadow-xl shadow-primary/5">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-10 w-10 text-primary/20" />
            </div>

            <p className="font-serif text-2xl leading-10 text-foreground md:text-3xl">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-xl font-bold text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{testimonial.title}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => go(-1)} variant="outline" size="icon" className="border-primary/25 text-primary">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setCurrent(index)
                        setIsAutoplay(false)
                      }}
                      className={`h-2 rounded-full transition-all ${index === current ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/35'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button onClick={() => go(1)} variant="outline" size="icon" className="border-primary/25 text-primary">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
