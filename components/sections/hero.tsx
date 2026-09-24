import { ArrowRight, Trophy, TrendingUp, Gift, Building2 } from 'lucide-react'
import { ActionLink } from '@/components/brand/action-button'
import { Eyebrow } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { ClimberScene } from '@/components/brand/climber-scene'

function FloatingChip({
  className,
  icon,
  label,
  value,
  delay = '0s',
}: {
  className?: string
  icon: React.ReactNode
  label: string
  value: string
  delay?: string
}) {
  return (
    <div
      className={
        'absolute flex animate-float items-center gap-2.5 rounded-2xl border border-ink/10 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-ink/5 backdrop-blur ' +
        (className ?? '')
      }
      style={{ animationDelay: delay }}
    >
      <span className="flex size-8 items-center justify-center rounded-xl bg-brand-soft text-brand">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-ink">{value}</span>
        <span className="block text-[11px] font-medium text-ink/50">
          {label}
        </span>
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
      {/* backdrop */}
      <div className="stair-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Eyebrow>Subí escalones, sumá puntos</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl md:text-6xl md:leading-[1.02]">
              Subí escaleras.{' '}
              <span className="relative whitespace-nowrap text-brand">
                Sumá puntos.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C60 3 120 3 160 6C210 9.5 260 5 298 3"
                    stroke="var(--brand)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xl text-lg text-pretty text-ink/60">
              DopaStairs turns every staircase into a game — helping people move
              more, earn rewards, and reducing elevator congestion in buildings.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#demo" variant="primary" size="lg">
                Try the Demo
                <ArrowRight />
              </ActionLink>
              <ActionLink href="#organizations" variant="outline" size="lg">
                <Building2 />
                For Organizations
              </ActionLink>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-ink/50">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand" />
                No extra hardware
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand" />
                Works with your phone
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand" />
                Free for users
              </span>
            </div>
          </Reveal>
        </div>

        {/* Illustration */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] border border-ink/10 bg-gradient-to-br from-brand-soft/60 to-white shadow-2xl shadow-brand/10" />
            <ClimberScene className="absolute inset-0 h-full w-full p-6" />

            <FloatingChip
              className="-left-3 top-10 sm:-left-6"
              icon={<TrendingUp className="size-4" />}
              value="+20 points"
              label="Floor climbed"
              delay="0s"
            />
            <FloatingChip
              className="-right-2 top-24 sm:-right-6"
              icon={<Trophy className="size-4" />}
              value="#3 Ranking"
              label="This week"
              delay="1.2s"
            />
            <FloatingChip
              className="left-2 bottom-24 sm:-left-4"
              icon={<TrendingUp className="size-4" />}
              value="+5 floors"
              label="Today"
              delay="0.6s"
            />
            <FloatingChip
              className="-right-2 bottom-8 sm:-right-5"
              icon={<Gift className="size-4" />}
              value="Reward unlocked"
              label="Free coffee"
              delay="1.8s"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
