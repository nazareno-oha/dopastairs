import { Check, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { ActionLink } from '@/components/brand/action-button'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'For Organizations',
    price: 'From $350',
    unit: '/month per building',
    cta: 'Request a pilot',
    featured: true,
    features: [
      'DopaStairs platform',
      'Stair activity detection',
      'Mobility dashboard',
      'User metrics',
      'Points & rankings',
      'Rewards management',
      'Implementation support',
    ],
  },
  {
    name: 'For Businesses',
    price: '$35',
    unit: '/month',
    cta: 'Become a partner',
    featured: false,
    features: [
      'Visibility inside DopaStairs',
      'Promotions',
      'Rewards',
      'Access to potential new customers',
    ],
  },
  {
    name: 'For Users',
    price: 'Free',
    unit: 'always',
    cta: 'Try the Demo',
    featured: false,
    features: [
      'Automatic activity tracking',
      'Points',
      'Rankings',
      'Rewards',
      'Progress tracking',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business model"
          title="Simple pricing for everyone"
          description="Preliminary estimates that will be validated through pilots and commercial conversations."
        />

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300',
                  plan.featured
                    ? 'border-brand bg-ink text-white shadow-2xl shadow-brand/20 lg:-translate-y-3'
                    : 'border-ink/10 bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                    Most popular
                  </span>
                )}
                <p
                  className={cn(
                    'text-sm font-semibold',
                    plan.featured ? 'text-brand-foreground' : 'text-brand',
                  )}
                >
                  {plan.name}
                </p>
                <p className="mt-4 flex items-end gap-1.5">
                  <span
                    className={cn(
                      'text-4xl font-extrabold tracking-tight',
                      plan.featured ? 'text-white' : 'text-ink',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      'mb-1 text-sm',
                      plan.featured ? 'text-white/50' : 'text-ink/50',
                    )}
                  >
                    {plan.unit}
                  </span>
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        'flex items-center gap-2.5 text-sm',
                        plan.featured ? 'text-white/80' : 'text-ink/70',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-5 shrink-0 items-center justify-center rounded-full',
                          plan.featured ? 'bg-brand/25 text-brand-foreground' : 'bg-brand-soft text-brand',
                        )}
                      >
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <ActionLink
                  href="#demo"
                  size="lg"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                  <ArrowRight />
                </ActionLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/45">
          Prices are preliminary estimates and will be validated through pilots.
        </p>
      </div>
    </section>
  )
}
