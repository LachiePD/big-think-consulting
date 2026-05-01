import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bigthink.consulting"),
  title: "Big Think Consulting | Strategy & Management Consulting",
  description:
    "Big Think Consulting partners with ambitious leaders to develop transformative strategies, drive sustainable growth, and navigate complex change with confidence.",
  keywords: [
    "Big Think Consulting",
    "Management Consulting",
    "Strategy Consulting",
    "Business Strategy",
    "Organisational Design",
    "Change Management",
    "Executive Advisory",
    "Business Growth",
    "Performance Improvement",
    "Market Analysis",
  ],
  openGraph: {
    type: "website",
    siteName: "Big Think Consulting",
    locale: "en_US",
    url: "https://bigthink.consulting",
    title: "Big Think Consulting",
    description:
      "Big Think Consulting partners with ambitious leaders to develop transformative strategies, drive sustainable growth, and navigate complex change with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Big Think Consulting",
      },
    ],
  },
  authors: [
    {
      name: "Big Think Consulting",
      url: "https://bigthink.consulting",
    },
  ],
  creator: "Big Think Consulting",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
