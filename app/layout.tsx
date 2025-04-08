import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavFooterWrapper from "@/components/HOC/NavFooterWrapper";
import { Montserrat, Red_Hat_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner";
import Script from "next/script";

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
        <html lang="en" >
            <head>
                {/* Meta Pixel Base Code */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '989514973052015');
            fbq('track', 'PageView');
          `}
                </Script>
                <Script id="track-time-on-page" strategy="afterInteractive">
                    {`
                          let pageEnterTime = Date.now();

                          window.addEventListener("beforeunload", () => {
                            const duration = Math.floor((Date.now() - pageEnterTime) / 1000);
                            if (typeof fbq === 'function') {
                              fbq('trackCustom', 'TimeOnPage', {
                                duration: duration
                              });
                            }
                          });
                        `}
                </Script>

                {/* Optional: NoScript fallback */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=989514973052015&ev=PageView&noscript=1"
                    />
                </noscript>
            </head>
            <body
                className={cn("antialiased dark", montserrat.variable, redHatDisplay.variable)}
                suppressContentEditableWarning suppressHydrationWarning
            >
                <NavFooterWrapper>
                    <Toaster position="top-center" richColors />
                    {children}
                </NavFooterWrapper>
                <Analytics />
            </body>
        </html>
    );
}
