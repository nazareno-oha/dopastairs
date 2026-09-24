import { Flame, TrendingUp, Trophy, Gift, ChevronUp } from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { cn } from '@/lib/utils'

const weeklyBars = [40, 65, 30, 80, 55, 95, 70]
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const leaderboard = [
  { rank: 1, name: 'Sofía R.', floors: 132, points: 2640, you: false },
  { rank: 2, name: 'Mateo G.', floors: 118, points: 2360, you: false },
  { rank: 3, name: 'Lucía P.', floors: 104, points: 2080, you: false },
  { rank: 4, name: 'You', floors: 86, points: 1240, you: true },
  { rank: 5, name: 'Diego M.', floors: 74, points: 1180, you: false },
  { rank: 6, name: 'Camila T.', floors: 61, points: 980, you: false },
]

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl bg-brand-soft/60 p-3.5">
      <span className="flex size-8 items-center justify-center rounded-lg bg-white text-brand">
        {icon}
      </span>
      <p className="mt-2.5 text-lg font-extrabold text-ink">{value}</p>
      <p className="text-[11px] font-medium text-ink/50">{label}</p>
    </div>
  )
}

export function Gamification() {
  return (
    <section className="scroll-mt-20 bg-gradient-to-b from-white to-brand-soft/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gamification"
          title="Every floor counts."
          description="Track your progress, compete with your building, and watch your points climb with every step."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* App card */}
          <Reveal>
            <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-ink/10 bg-white p-5 shadow-2xl shadow-brand/10">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-white">
                  A
                </span>
                <div>
                  <p className="font-bold text-ink">Ana Torres</p>
                  <p className="flex items-center gap-1 text-xs text-ink/50">
                    <Flame className="size-3.5 text-brand" /> 12-day streak
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
                  Lvl 7
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-ink p-5 text-white">
                <p className="text-xs font-medium text-white/60">Current points</p>
                <p className="text-4xl font-extrabold tracking-tight">1,240</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-brand-foreground/90">
                  <TrendingUp className="size-3.5" /> +180 this week
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Stat icon={<ChevronUp className="size-4" />} value="86" label="Floors / week" />
                <Stat icon={<Trophy className="size-4" />} value="#4" label="This week" />
                <Stat icon={<Flame className="size-4" />} value="12" label="Day streak" />
              </div>

              {/* weekly progress */}
              <div className="mt-4 rounded-2xl border border-ink/10 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">Weekly progress</p>
                  <p className="text-xs font-medium text-brand">86 floors</p>
                </div>
                <div className="mt-3 flex h-24 items-end gap-2">
                  {weeklyBars.map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                      <div className="flex w-full flex-1 items-end">
                        <div
                          className={cn(
                            'w-full rounded-md',
                            i === 5 ? 'bg-brand' : 'bg-brand/25',
                          )}
                          style={{ height: `${h}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-ink/40">
                        {days[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* next reward */}
              <div className="mt-4 rounded-2xl bg-brand-soft/70 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <Gift className="size-4 text-brand" /> Next reward
                  </span>
                  <span className="font-medium text-ink/60">1,240 / 1,500</span>
                </div>
                <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-brand" style={{ width: '82%' }} />
                </div>
                <p className="mt-2 text-xs text-ink/50">
                  260 points to unlock a free coffee.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Leaderboard */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">Weekly leaderboard</h3>
                  <p className="text-sm text-ink/50">Torre Norte · 248 climbers</p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Trophy className="size-5" />
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-2">
                {leaderboard.map((u) => (
                  <li
                    key={u.rank}
                    className={cn(
                      'flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors',
                      u.you
                        ? 'border-brand/40 bg-brand-soft'
                        : 'border-transparent bg-ink/[0.02] hover:bg-ink/[0.04]',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                        u.rank === 1 && 'bg-brand text-white',
                        u.rank === 2 && 'bg-brand/70 text-white',
                        u.rank === 3 && 'bg-brand/40 text-brand',
                        u.rank > 3 && 'bg-white text-ink/60 ring-1 ring-ink/10',
                      )}
                    >
                      {u.rank}
                    </span>
                    <span
                      className={cn(
                        'font-semibold',
                        u.you ? 'text-brand' : 'text-ink',
                      )}
                    >
                      {u.name}
                      {u.you && (
                        <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white align-middle">
                          YOU
                        </span>
                      )}
                    </span>
                    <span className="ml-auto text-right">
                      <span className="block text-sm font-bold text-ink">
                        {u.points.toLocaleString()}
                      </span>
                      <span className="block text-[11px] text-ink/45">
                        {u.floors} floors
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
