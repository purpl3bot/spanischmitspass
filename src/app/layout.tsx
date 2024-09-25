import './globals.css'
import { Inter, Patrick_Hand } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const patrickHand = Patrick_Hand({ weight: '400', subsets: ['latin'], variable: '--font-patrick-hand' })

export const metadata = {
  title: 'Spanisch mit Spass',
  description: 'Learn Spanish with fun in Berlin',
  icons: {
    icon: '/favicon.png',
  },
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${patrickHand.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen p-4 md:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
