import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const metaImageUrl = "https://atlas.fgic.gov.ae/uaeatlas/images/sh/logo-mpa.png"

export const metadata: Metadata = {
  title: "Presidential Court - 360° Virtual Tour",
  description: "Experience Presidential Court in immersive 360° view with full zoom and navigation controls.",
  generator: "v0.app",
  keywords: [
    "360 tour",
    "virtual tour",
    "Presidential Court",
    "UAE",
    "immersive experience",
    "panoramic view",
  ],
  authors: [{ name: "Presidential Court" }],
  creator: "Presidential Court",
  publisher: "Presidential Court",
  openGraph: {
    title: "Presidential Court - 360° Virtual Tour",
    description: "Experience Presidential Court in immersive 360° view.",
    siteName: "Presidential Court",
    images: [
      {
        url: metaImageUrl,
        width: 1200,
        height: 630,
        alt: "Presidential Court Logo",
        type: "image/png",
      },
      {
        url: metaImageUrl,
        width: 500,
        height: 500,
        alt: "Presidential Court Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presidential Court - 360° Virtual Tour",
    description: "Experience Presidential Court in immersive 360° view.",
    images: [metaImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="image" content={metaImageUrl} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
