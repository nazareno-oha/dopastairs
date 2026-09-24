import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/brand/action-button'
import { Reveal } from '@/components/brand/reveal'

export function FinalCta() {
  return (
    <section id="demo" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-white sm:px-12 md:py-20">
            {/* stair motif */}
            <div className="stair-grid absolute inset-0 opacity-[0.12]" aria-hidden="true" />
            <div
              className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
              aria-hidden="true"
            />

            {/* decorative ascending steps */}
            <svg
              className="pointer-events-none absolute bottom-0 right-6 hidden h-40 w-40 opacity-30 sm:block"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <rect x="6" y="70" width="22" height="24" rx="3" fill="var(--brand)" />
              <rect x="32" y="50" width="22" height="44" rx="3" fill="var(--brand)" />
              <rect x="58" y="30" width="22" height="64" rx="3" fill="var(--brand)" />
            </svg>

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl md:leading-[1.05]">
                Ready to take the stairs?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-white/60">
                Turn movement into points, points into rewards, and buildings
                into more active places.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ActionLink href="#top" variant="primary" size="lg">
                  Try the Demo
                  <ArrowRight />
                </ActionLink>
                <ActionLink
                  href="#organizations"
                  size="lg"
                  className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Request a Pilot
                </ActionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
