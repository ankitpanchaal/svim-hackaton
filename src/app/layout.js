import { NavBar } from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

export const metadata = {
  title: 'WEB',
  description: 'HEY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
