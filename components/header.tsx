'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'Approach' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Addis Ababa based, building across Ethiopia
          </span>
          <span>Residential | Commercial | Mixed-use</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/logo.png"
            alt="Crux Construction"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
          <Badge variant="outline" className="ml-3 hidden border-accent/50 bg-accent/10 text-primary lg:inline-flex">
            Ethiopia
          </Badge>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/78 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            className="bg-primary px-6 py-2 font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
          >
            Request Estimate
          </Button>
        </div>

        <button
          className="rounded-md border border-border bg-card p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-primary font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90"
              >
                Request Estimate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
