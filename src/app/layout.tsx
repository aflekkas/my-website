import { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/lib/providers/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandroslekkas.com"),
  title: {
    default: "Alexandros Lekkas",
    template: `%s | Alexandros Lekkas`,
  },
  description: "My personal website.",
  openGraph: {
    title: "Alexandros Lekkas",
    description: "My personal website.",
    url: "alexandroslekkas.com",
    siteName: "Alexandros Lekkas",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Alexandros Lekkas",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
