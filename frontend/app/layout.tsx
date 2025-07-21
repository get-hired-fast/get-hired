import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Helpr - Discover Your Next Opportunity",
  description:
    "Connect with internships, jobs, hackathons, and hiring challenges tailored to your skills. Let AI handle the applications while you focus on what matters most.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ClerkProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ClerkProvider>
      </body>
    </html>
  );
}
