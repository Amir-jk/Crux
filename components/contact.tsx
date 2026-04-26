'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { PageDivider } from './page-divider'
import { Textarea } from './ui/textarea'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+251 911 123 456' },
    { icon: Mail, label: 'Email', value: 'hello@cruxethiopia.com' },
    { icon: MapPin, label: 'Office', value: 'Bole Atlas, Addis Ababa' },
  ]

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageDivider eyebrow="Start planning" title="Tell us what you want to build in Ethiopia." />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <Card key={info.label} className="rounded-lg border-border bg-card shadow-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-foreground">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="rounded-lg border-border bg-card shadow-xl shadow-primary/5">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">Project inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Thank you.</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">We received your project note and will follow up with next steps shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+251..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        <option value="">Select type</option>
                        <option value="residential">Residential villa</option>
                        <option value="commercial">Commercial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="mixed-use">Mixed-use</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Location, size, timeline, and what matters most..." />
                  </div>

                  <Button type="submit" className="w-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
