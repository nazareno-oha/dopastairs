import { cn } from '@/lib/utils'

function buildPath(values: number[], w: number, h: number, pad = 6) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = (w - pad * 2) / (values.length - 1)
  const points = values.map((v, i) => {
    const x = pad + i * step
    const y = pad + (h - pad * 2) * (1 - (v - min) / range)
    return [x, y] as const
  })
  const line = points
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(' ')
  const area = `${line} L${points[points.length - 1][0]},${h - pad} L${points[0][0]},${h - pad} Z`
  return { line, area, points }
}

export function AreaChart({
  values,
  className,
  height = 180,
}: {
  values: number[]
  className?: string
  height?: number
}) {
  const w = 520
  const { line, area } = buildPath(values, w, height)
  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      className={cn('w-full', className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={height * g}
          y2={height * g}
          stroke="var(--ink)"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="url(#areaFill)" />
      <path
        d={line}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BarChart({
  values,
  labels,
  className,
  height = 180,
  highlight,
}: {
  values: number[]
  labels?: string[]
  className?: string
  height?: number
  highlight?: number
}) {
  const max = Math.max(...values) || 1
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex items-end gap-2" style={{ height }}>
        {values.map((v, i) => (
          <div key={i} className="flex flex-1 items-end">
            <div
              className={cn(
                'w-full rounded-t-md transition-all',
                i === highlight ? 'bg-brand' : 'bg-brand/25',
              )}
              style={{ height: `${(v / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      {labels && (
        <div className="mt-2 flex gap-2">
          {labels.map((l, i) => (
            <span
              key={i}
              className="flex-1 text-center text-[10px] font-medium text-ink/40"
            >
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
