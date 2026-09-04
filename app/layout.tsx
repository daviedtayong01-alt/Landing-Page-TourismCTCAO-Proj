import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Visit Koronadal",
    template: "%s | Visit Koronadal",
  },

  description:
    "Discover destinations, tourism establishments, events, transport information, and experiences in Koronadal City and South Cotabato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
    >
      <body className="min-h-full font-sans text-[#18344d]">
        {children}
      </body>
    </html>
  );
}