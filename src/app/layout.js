import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ReduxWrapper from "@/provider/ReduxWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medicare Pro",
  description:
    "Medicare Pro is a SaaS-based medical platform where the Admin manages Doctors, and Doctors manage their Assistants. Doctors use the platform on a subscription basis, but Admins do not require any subscription. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="relative">
            {children}
            {/* Scroll to top (floating button) */}
            <ScrollToTopButton></ScrollToTopButton>
          </div>
        </body>
      </ReduxWrapper>
    </html>
  );
}
