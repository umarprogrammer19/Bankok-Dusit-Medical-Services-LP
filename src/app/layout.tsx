import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BDMS UAE Roadshow 2026 - Healthcare Excellence",
  description:
    "Meet our expert teams at the BDMS UAE Roadshow. Register for free consultations with Thailand's leading private hospital network.",
}

export const viewport: Viewport = {
  themeColor: "#0C73B5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
