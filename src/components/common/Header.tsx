import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="no-underline">
          <span className="font-semibold tracking-tight">Nemelyn Baldo</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm uppercase tracking-widest text-neutral-600 hover:text-inherit dark:text-neutral-300'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Mobile toggle - visible on small screens only */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-neutral-700 hover:bg-neutral-100/60 dark:text-neutral-200"
          >
            {/* Hamburger / Close icon */}
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 6H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <ThemeToggle />
        </div>
        {/* Mobile menu - positioned below header and only visible when open */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full z-40 border-t bg-[rgb(var(--bg))] supports-[backdrop-filter]:bg-[rgb(var(--bg))]/95 dark:bg-neutral-900/95">
            <div className="container-px mx-auto flex flex-col gap-2 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-2 py-2 text-sm uppercase tracking-widest text-neutral-700 hover:bg-neutral-100/50 dark:text-neutral-300'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
