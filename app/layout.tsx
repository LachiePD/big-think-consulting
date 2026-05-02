import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://big-think-consulting.onrender.com"),
  title: "Big Think | Web Design, Hosting & Digital Services",
  description:
    "Big Think builds fast, beautiful websites and digital solutions — custom web design, managed hosting, SEO, WordPress development, and mobile app development.",
  keywords: [
    "Big Think",
    "Web Design",
    "Web Development",
    "Website Design",
    "SEO",
    "WordPress",
    "Mobile App Development",
    "Web Hosting",
    "Digital Services",
    "Website Maintenance",
  ],
  openGraph: {
    type: "website",
    siteName: "Big Think",
    locale: "en_US",
    url: "https://big-think-consulting.onrender.com",
    title: "Big Think | Web Design, Hosting & Digital Services",
    description:
      "Big Think builds fast, beautiful websites and digital solutions — custom web design, managed hosting, SEO, WordPress development, and mobile app development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Big Think",
      },
    ],
  },
  authors: [
    {
      name: "Big Think",
      url: "https://big-think-consulting.onrender.com",
    },
  ],
  creator: "Big Think",
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
