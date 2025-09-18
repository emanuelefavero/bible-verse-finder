import { Header } from '@/components/header/header'
import { ThemeProvider } from '@/features/theme/theme-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bible Verse Finder',
  description: 'Find Bible verses by keyword',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className='mx-auto flex max-w-3xl flex-col items-center justify-center gap-10 px-4 py-16'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
