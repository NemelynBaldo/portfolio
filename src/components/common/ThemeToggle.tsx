import { motion } from 'framer-motion'
import { useTheme } from '@/store/theme/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-neutral-300 dark:border-neutral-700"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="absolute left-1 top-1 inline-block h-6 w-6 rounded-full bg-neutral-900 dark:bg-neutral-100"
        animate={{ x: isDark ? 28 : 0 }}
      />
      <span className="sr-only">Switch to {isDark ? 'light' : 'dark'} mode</span>
    </button>
  )
}
