'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Services: ['Commercial Development', 'Residential Villas', 'General Contracting', 'Fit-Out'],
    Company: ['Approach', 'Projects', 'Clients', 'Contact'],
    Ethiopia: ['Addis Ababa', 'Hawassa', 'Bahir Dar', 'Dire Dawa'],
  }

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="h-2 bg-[linear-gradient(90deg,#0D5D3B_0_33%,#F7B801_33%_66%,#D62828_66%_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <Image src="/logo.png" alt="Crux Construction" width={160} height={50} className="h-10 w-auto opacity-80" />
            <p className="mt-6 leading-7 text-background/72">
              Ethiopian construction delivery for clients who care about structure, beauty, schedule, and long-term value.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-background/70">
              <MapPin className="h-4 w-4 text-accent" />
              Bole Atlas, Addis Ababa
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-background/20 transition-colors hover:bg-accent hover:text-foreground"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-serif text-lg font-bold text-background">{title}</h4>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link href={title === 'Services' ? '#services' : title === 'Company' ? '#about' : '#contact'} className="text-sm text-background/68 hover:text-accent">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/10 py-8 text-sm text-background/58 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Crux Construction Ethiopia. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent">Privacy</Link>
            <Link href="#" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
