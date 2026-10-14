import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import CacheBuster from "@/components/ui/CacheBuster";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dr. Apple — Premium Apple Retailer, Kano", template: "%s | Dr. Apple" },
  description: "Authorized Apple hardware retailer in Kano, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <CacheBuster />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
