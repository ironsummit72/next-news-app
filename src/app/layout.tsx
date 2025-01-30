import "./globals.css"; // Import your global CSS (if any)
import "./novacept.css";

import Script from 'next/script'
import { IBM_Plex_Mono } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNavBar from "@/components/SideNavBar";
import { SideBarContextProvider } from "@/context/SideBarContext";
import type { Metadata, Viewport } from "next";
const APP_NAME = "BBC NEWS";
const APP_DEFAULT_TITLE = "BBC NEWS APP";
const APP_TITLE_TEMPLATE = "BBC | %s";
const APP_DESCRIPTION = "Visit BBC for trusted reporting on the latest world and US news, sports, business, climate, innovation, culture and much more.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};
const IBMPlex = IBM_Plex_Mono({ subsets: ["latin"], weight: '500' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className={IBMPlex.className}>
      <SideBarContextProvider>
        <Navbar />
        <SideNavBar />
      </SideBarContextProvider>

        {children}
        <Footer />
        {/* Add Bootstrap JavaScript */}
        <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin={"anonymous"}></Script>
      </body>
    </html>
  );
}
