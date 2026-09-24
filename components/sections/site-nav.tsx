'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { ActionLink } from '@/components/brand/action-button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For Organizations', href: '#organizations' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'About', href: '#about' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink/10 bg-white/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="DopaStairs home" className="shrink-0">
          <Logo markClassName="h-8 w-8" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ActionLink href="#demo" variant="primary" size="md">
            Try the Demo
          </ActionLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-ink/10 bg-white md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-transparent',
          'transition-all duration-300',
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink/80 hover:bg-brand-soft hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ActionLink
            href="#demo"
            variant="primary"
            size="lg"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Try the Demo
          </ActionLink>
        </div>
      </div>
    </header>
  )
}
