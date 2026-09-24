import {
  Users,
  ArrowUpRight,
  BarChart3,
  Clock,
  Trophy,
  ArrowDownRight,
  HeartPulse,
  Check,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { ActionLink } from '@/components/brand/action-button'

const capabilities = [
  { icon: Users, text: 'Monitor active users' },
  { icon: BarChart3, text: 'Measure stair usage' },
  { icon: ArrowUpRight, text: 'Track floors climbed' },
  { icon: Clock, text: 'Analyze usage by time' },
  { icon: Trophy, text: 'Monitor ranking participation' },
  { icon: ArrowDownRight, text: 'Estimate elevator reduction' },
  { icon: HeartPulse, text: 'Encourage healthier habits' },
]

const kpis = [
  { value: '1,284', label: 'Active users', trend: '+8%' },
  { value: '8,492', label: 'Floors climbed', trend: '+15%' },
  { value: '+24%', label: 'Stair usage', trend: 'vs. last month' },
  { value: '32%', label: 'Est. elevator reduction', trend: 'demo data' },
]

export function Organizations() {
  return (
    <section id="organizations" className="scroll-mt-20 bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-foreground uppercase">
                For Organizations
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
                Turn your building into a more active place.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-lg text-white/60">
                Companies and universities get a live dashboard of stair usage
                and mobility patterns — measuring impact without installing any
                additional hardware.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {capabilities.map((c, i) => {
                const Icon = c.icon
                return (
                  <Reveal as="li" key={c.text} delay={i * 60}>
                    <span className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-brand/20 text-brand-foreground">
                        <Icon className="size-4" />
                      </span>
                      {c.text}
                    </span>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ActionLink href="#demo" variant="primary" size="lg">
                  Request a pilot
                </ActionLink>
                <span className="flex items-center gap-1.5 text-xs text-white/45">
                  <Check className="size-4 text-brand-foreground" /> No hardware
                  installation
                </span>
              </div>
            </Reveal>
          </div>

          {/* KPI panel */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                >
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {k.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{k.label}</p>
                  <p className="mt-3 inline-flex items-center rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-brand-foreground">
                    {k.trend}
                  </p>
                </div>
              ))}
              <p className="col-span-2 text-center text-xs text-white/40">
                Example / demo data shown for illustration.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
