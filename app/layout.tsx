import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavFooterWrapper from "@/components/HOC/NavFooterWrapper";
import { Montserrat, Red_Hat_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "The Elevator Company",
    template: "%s - The Elevator Company",
  },
  description: "Experience superior vertical mobility with The Elevator Company, a trusted provider of high-quality elevators and lift solutions. We specialize in residential, commercial, and industrial elevators, ensuring safety, innovation, and reliability. Contact us for custom elevator installations, maintenance, and modernization services.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={cn("antialiased dark", montserrat.variable, redHatDisplay.variable)}
      >
        <NavFooterWrapper>
        <Toaster position="top-center" richColors />
            {children}
        </NavFooterWrapper>
        <Analytics/>
      </body>
    </html>
  );
}
