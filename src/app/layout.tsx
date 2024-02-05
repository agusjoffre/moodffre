import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moodffre',
  description: 'Mood tracker app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <ClerkProvider>
      <PrimeReactProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
        </PrimeReactProvider>
    </ClerkProvider>
  )
}
