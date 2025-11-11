import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "ServeLoop | Pedidos y pagos desde la mesa",
  description: "Digitaliza los pedidos, reduce tiempos de espera y mejora la rotación con ServeLoop.",
  openGraph: {
    title: "ServeLoop | Pedidos y pagos desde la mesa",
    description: "Digitaliza los pedidos, reduce tiempos de espera y mejora la rotación con ServeLoop.",
    type: "website",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
