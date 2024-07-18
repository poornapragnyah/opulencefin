import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import NavbarComponent from '../../components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpulenceFin',
  description: 'Expert Wealth Management Tailored to Your Ambitions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="data-theme" defaultTheme="forest" themes={[ 'forest','corporate']}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}