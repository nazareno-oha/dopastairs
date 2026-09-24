import {
  Users,
  ArrowUpRight,
  TrendingDown,
  Activity,
  Trophy,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand/section-heading'
import { Reveal } from '@/components/brand/reveal'
import { AreaChart, BarChart } from '@/components/brand/mini-charts'

const usageOverTime = [22, 34, 30, 48, 42, 60, 55, 72, 68, 84, 80, 96]
const peakHours = [10, 18, 42, 64, 38, 30, 46, 88, 70, 34, 20, 14]
const peakLabels = ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']

const kpis = [
  { icon: Users, value: '1,284', label: 'Active users', delta: '+8.2%', up: true },
  { icon: Activity, value: '3,914', label: 'Stair climbs', delta: '+12.4%', up: true },
  { icon: ArrowUpRight, value: '8,492', label: 'Floors climbed', delta: '+15.1%', up: true },
  { icon: TrendingDown, value: '32%', label: 'Est. elevator reduction', delta: 'vs. baseline', up: true },
]

const rankingRows = [
  { team: 'Engineering', pct: 92 },
  { team: 'Design', pct: 78 },
  { team: 'Operations', pct: 64 },
  { team: 'Sales', pct: 51 },
]

export function DataDashboard() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Data & insights"
          title="A dashboard built for real decisions"
          description="A modern analytics interface that helps organizations understand mobility inside their buildings. All figures shown are demo data."
        />

        <Reveal delay={100}>
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-2xl shadow-ink/5">
            {/* top bar */}
            <div className="flex items-center gap-2 border-b border-ink/10 bg-ink/[0.02] px-5 py-3.5">
              <span className="size-3 rounded-full bg-brand/30" />
              <span className="size-3 rounded-full bg-brand/50" />
              <span className="size-3 rounded-full bg-brand" />
              <span className="ml-3 text-sm font-semibold text-ink">
                DopaStairs · Mobility Overview
              </span>
              <span className="ml-auto rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                Last 30 days
              </span>
            </div>

            <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-4">
              {/* KPI cards */}
              {kpis.map((k) => {
                const Icon = k.icon
                return (
                  <div
                    key={k.label}
                    className="rounded-2xl border border-ink/10 bg-white p-5"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="size-4.5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                      {k.value}
                    </p>
                    <p className="text-xs text-ink/50">{k.label}</p>
                    <p className="mt-2 inline-flex items-center rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
                      {k.delta}
                    </p>
                  </div>
                )
              })}

              {/* Usage over time */}
              <div className="rounded-2xl border border-ink/10 p-5 lg:col-span-2 lg:row-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-ink">Stair usage over time</h3>
                    <p className="text-xs text-ink/50">Daily floors climbed</p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-brand">
                    <ArrowUpRight className="size-4" /> +24%
                  </span>
                </div>
                <AreaChart values={usageOverTime} className="mt-6" />
              </div>

              {/* Peak hours */}
              <div className="rounded-2xl border border-ink/10 p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-ink">Peak usage hours</h3>
                    <p className="text-xs text-ink/50">Climbs by hour of day</p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
                    Peak 14:00
                  </span>
                </div>
                <BarChart
                  values={peakHours}
                  labels={peakLabels}
                  highlight={7}
                  className="mt-5"
                  height={140}
                />
              </div>

              {/* Ranking participation */}
              <div className="rounded-2xl border border-ink/10 p-5 lg:col-span-2">
                <div className="flex items-center gap-2">
                  <Trophy className="size-4 text-brand" />
                  <h3 className="font-bold text-ink">Ranking participation</h3>
                </div>
                <ul className="mt-4 flex flex-col gap-3">
                  {rankingRows.map((r) => (
                    <li key={r.team}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-ink/80">{r.team}</span>
                        <span className="font-semibold text-ink">{r.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink/5">
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
