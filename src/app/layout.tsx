import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Aapale India',
  description: 'Website for Aapale India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}