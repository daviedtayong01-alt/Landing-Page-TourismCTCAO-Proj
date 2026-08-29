import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body className="min-h-full bg-white font-sans text-[#18344d]">
        {children}
      </body>
    </html>
  );
}