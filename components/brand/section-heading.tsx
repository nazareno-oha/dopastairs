import { cn } from '@/lib/utils'
import { Reveal } from '@/components/brand/reveal'

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand uppercase',
        className,
      )}
    >
      <span className="flex items-end gap-px" aria-hidden="true">
        <span className="h-1.5 w-1 rounded-sm bg-brand/50" />
        <span className="h-2.5 w-1 rounded-sm bg-brand/70" />
        <span className="h-3.5 w-1 rounded-sm bg-brand" />
      </span>
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2
          className={cn(
            'text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.05]',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p
            className={cn(
              'text-base text-pretty text-ink/60 sm:text-lg',
              align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl',
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
