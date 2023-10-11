import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'F1 Ranking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
