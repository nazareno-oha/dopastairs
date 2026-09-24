import { Eye, Megaphone, UserPlus, ArrowRight, Store } from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { ActionLink } from '@/components/brand/action-button'

const benefits = [
  { icon: Eye, title: 'Visibility', text: 'Appear inside DopaStairs to a motivated, local audience.' },
  { icon: Megaphone, title: 'Promotions', text: 'Publish offers and rewards that drive foot traffic.' },
  { icon: UserPlus, title: 'New customers', text: 'Reach potential customers right in your neighborhood.' },
]

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 bg-brand-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For businesses"
              title="Give people another reason to climb."
              description="Local businesses can offer discounts, promotions or rewards to DopaStairs users in exchange for visibility and potential new customers."
            />

            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <Reveal key={b.title} delay={i * 90}>
                    <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="font-bold text-ink">{b.title}</p>
                        <p className="text-sm text-ink/60">{b.text}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* price card */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-xl shadow-brand/10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                <Store className="size-7" />
              </span>
              <p className="mt-6 text-sm font-medium text-ink/50">
                Estimated partner subscription
              </p>
              <p className="mt-1 flex items-end gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-ink">
                  $35
                </span>
                <span className="mb-1.5 text-ink/50">/month</span>
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-ink/70">
                {['Visibility inside DopaStairs', 'Promotions & rewards', 'Access to potential new customers'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="flex size-5 items-center justify-center rounded-full bg-brand-soft">
                        <span className="size-2 rounded-full bg-brand" />
                      </span>
                      {f}
                    </li>
                  ),
                )}
              </ul>
              <ActionLink href="#demo" variant="primary" size="lg" className="mt-8 w-full">
                Become a partner
                <ArrowRight />
              </ActionLink>
              <p className="mt-4 text-center text-xs text-ink/45">
                Initial pricing is estimated and subject to validation through
                pilots and commercial conversations.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
