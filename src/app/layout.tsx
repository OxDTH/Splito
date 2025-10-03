import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import NavBar from '../components/Header'

export const metadata: Metadata = {
  title: 'Splito',
  description: 'Split expenses easily and efficiently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}