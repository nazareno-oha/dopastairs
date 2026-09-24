import { Coffee, UtensilsCrossed, Dumbbell, ShoppingBag, Ticket, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { ActionLink } from '@/components/brand/action-button'

const rewards = [
  { icon: Coffee, title: 'Coffee discount', desc: '20% off your morning coffee.', points: 1500, tag: 'Café' },
  { icon: UtensilsCrossed, title: 'Lunch discount', desc: '15% off lunch menus.', points: 2200, tag: 'Food' },
  { icon: Dumbbell, title: 'Gym benefit', desc: 'One free week at partner gyms.', points: 3000, tag: 'Fitness' },
  { icon: ShoppingBag, title: 'Store promotion', desc: 'Exclusive in-store offers.', points: 1800, tag: 'Retail' },
  { icon: Ticket, title: 'Special offers', desc: 'Rotating seasonal perks.', points: 900, tag: 'Perks' },
]

export function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rewards"
          title="Your steps. Your rewards."
          description="Accumulated points can be exchanged for benefits offered by partner businesses. The rewards below are examples — not confirmed partners."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.title} delay={(i % 3) * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-7" />
                    </span>
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/60">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{r.desc}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <span className="text-sm font-bold text-brand">
                      {r.points.toLocaleString()} pts
                    </span>
                    <span className="text-xs font-medium text-ink/40">Example reward</span>
                  </div>
                </div>
              </Reveal>
            )
          })}

          {/* CTA card */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-brand p-6 text-white">
              <h3 className="text-xl font-bold">More perks every month</h3>
              <p className="mt-2 text-sm text-white/80">
                New partner rewards are added as the community grows.
              </p>
              <ActionLink
                href="#demo"
                variant="soft"
                className="mt-6 w-fit bg-white text-brand hover:bg-white/90"
              >
                Explore rewards
                <ArrowRight />
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
