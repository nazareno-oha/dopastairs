import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const actionButton = cva(
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-brand/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-brand text-brand-foreground shadow-sm shadow-brand/25 hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5',
        ink: 'bg-ink text-white hover:bg-ink/90 hover:-translate-y-0.5',
        outline:
          'border border-ink/15 bg-white text-ink hover:border-brand/40 hover:text-brand hover:-translate-y-0.5',
        soft: 'bg-brand-soft text-brand hover:bg-brand/15',
        ghost: 'text-ink hover:bg-ink/5',
      },
      size: {
        md: 'h-11 px-5 text-sm',
        lg: 'h-13 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type BaseProps = VariantProps<typeof actionButton> & { className?: string }

export function ActionLink({
  href,
  children,
  variant,
  size,
  className,
  ...props
}: BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      className={cn(actionButton({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  )
}

export function ActionButton({
  children,
  variant,
  size,
  className,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(actionButton({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
