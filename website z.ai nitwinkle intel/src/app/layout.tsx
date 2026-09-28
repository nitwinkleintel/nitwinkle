import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitwinkleintel.com"),
  title: {
    default: "Nitwinkle Intel | Data Intelligence & Business Analytics",
    template: "%s | Nitwinkle Intel",
  },
  description:
    "Nitwinkle Intel transforms business data into clear intelligence, actionable insights and informed decisions through data analysis, business intelligence, data science, automation and advanced analytics.",
  keywords: [
    "Data Analysis",
    "Business Intelligence",
    "Data Science",
    "Data Analytics",
    "Data Visualization",
    "Business Analytics",
    "Data Automation",
    "Predictive Analytics",
    "AI Analytics",
    "Data Consulting",
    "Business Intelligence Nigeria",
    "Data Analytics Nigeria",
    "Nitwinkle Intel",
  ],
  authors: [{ name: "Nitwinkle Intel" }],
  creator: "Nitwinkle Intel",
  publisher: "Nitwinkle Intel",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nitwinkleintel.com" },
  openGraph: {
    title: "Nitwinkle Intel | Data Intelligence & Business Analytics",
    description:
      "From data to informed decisions. Nitwinkle Intel transforms complex business data into clear intelligence for better decisions, measurable performance and sustainable growth.",
    url: "https://nitwinkleintel.com",
    siteName: "Nitwinkle Intel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitwinkle Intel | Data Intelligence & Business Analytics",
    description:
      "From data to informed decisions. We transform complex business data into clear intelligence for better decisions and measurable performance.",
    creator: "@nitwinkleintel",
  },
  icons: {
    icon: "/favicon.svg",
  },
  category: "business analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
