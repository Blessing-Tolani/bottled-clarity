'use client'
import './globals.css'
import { SnackbarProvider } from 'notistack'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {children}
        </SnackbarProvider>
      </body>
    </html>
  )
}
