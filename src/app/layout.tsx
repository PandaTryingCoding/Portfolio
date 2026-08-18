import type { Metadata } from "next";
import { CursorTracker } from "@/components/cursor-tracker";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Name | Frontend Developer",
    template: "%s | Your Name",
  },
  description:
    "Portfolio and blog for a frontend developer focused on React, Next.js, TypeScript, architecture, and user experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <div className="page-backdrop pointer-events-none fixed inset-0 z-0" />
          <CursorTracker />
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
