import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
