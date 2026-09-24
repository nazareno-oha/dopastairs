import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={cn('h-9 w-9', className)}
      role="img"
      aria-label="DopaStairs logo mark"
    >
      <rect
        x="1.75"
        y="1.75"
        width="40.5"
        height="40.5"
        rx="13"
        fill="white"
        stroke="var(--ink)"
        strokeWidth="3.5"
      />
      <g fill="var(--brand)">
        <rect x="10" y="27" width="6.5" height="6.5" rx="1.6" />
        <rect x="17.5" y="21" width="6.5" height="12.5" rx="1.6" />
        <rect x="25" y="15" width="6.5" height="18.5" rx="1.6" />
      </g>
      <g
        stroke="var(--brand)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="32.5" y1="13" x2="35.5" y2="10" />
        <line x1="29.5" y1="11" x2="31" y2="7.5" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string
  markClassName?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark className={markClassName} />
      <span className="text-xl font-extrabold tracking-tight text-ink">
        Dopa<span className="text-brand">Stairs</span>
      </span>
    </span>
  )
}
