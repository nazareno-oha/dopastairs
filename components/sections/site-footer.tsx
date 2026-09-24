import { Logo } from '@/components/brand/logo'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Rewards', href: '#rewards' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'For Organizations', href: '#organizations' },
      { label: 'Partners', href: '#partners' },
      { label: 'Contact', href: '#demo' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink/55">
              Subí escaleras, sumá puntos. DopaStairs turns every staircase into
              a game for healthier, more active buildings.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold text-ink">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink/55 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} DopaStairs. All demo data shown for
            illustration.
          </p>
          <p className="text-xs text-ink/45">
            Made for healthier, more active buildings.
          </p>
        </div>
      </div>
    </footer>
  )
}
