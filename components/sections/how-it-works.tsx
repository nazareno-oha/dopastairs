import { Footprints, Smartphone, Trophy, Gift } from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'

const steps = [
  {
    n: '01',
    title: 'Climb',
    icon: Footprints,
    text: 'Use the stairs inside your building.',
  },
  {
    n: '02',
    title: 'Track',
    icon: Smartphone,
    text: 'Your phone detects and records the floors you climb.',
  },
  {
    n: '03',
    title: 'Earn',
    icon: Trophy,
    text: 'Turn your activity into points and climb the leaderboard.',
  },
  {
    n: '04',
    title: 'Reward',
    icon: Gift,
    text: 'Use your points to unlock discounts, promotions and prizes.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="How DopaStairs works"
          description="From the first step to your next reward — four simple stages, no extra hardware required."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.n} delay={i * 100}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 lg:mt-[var(--rise)]"
                  style={{ '--rise': `${(3 - i) * 1.75}rem` } as React.CSSProperties}
                >
                  <span className="text-sm font-bold tracking-widest text-brand/40">
                    {step.n}
                  </span>
                  <span className="mt-4 flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{step.text}</p>
                  {/* step base bar */}
                  <span className="mt-6 h-1.5 w-full rounded-full bg-gradient-to-r from-brand to-brand/30" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
