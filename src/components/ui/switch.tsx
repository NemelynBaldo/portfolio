import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, ...props }, ref) => {
    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={checked}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full border border-neutral-300 transition-colors dark:border-neutral-700',
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 translate-x-1 transform rounded-full bg-neutral-900 transition-transform dark:bg-neutral-100',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
    )
  }
)
Switch.displayName = 'Switch'
