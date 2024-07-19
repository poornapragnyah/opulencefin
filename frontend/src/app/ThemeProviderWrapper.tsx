'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="forest" enableSystem={false} themes={['forest', 'emerald']}>
      {children}
    </ThemeProvider>
  )
}