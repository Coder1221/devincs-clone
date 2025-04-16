import type React from "react"
import "./globals.css"
// import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })
// ${inter.className}
export const metadata = {
  title: "devincs | Web & IoT Solutions",
  description: "Cutting-edge web and IoT services for modern businesses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'