import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ondernemershuis Suriname - De Community voor Ondernemers",
  description:
    "Het Ondernemershuis is de community voor ondernemers in Suriname. Netwerken, leren, groeien en samen ondernemen.",
  keywords: "ondernemers, suriname, community, netwerken, business, coworking",
  openGraph: {
    title: "Ondernemershuis Suriname",
    description: "De Community voor Ondernemers in Suriname",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={montserrat.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
