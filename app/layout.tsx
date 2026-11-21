import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KhataFlow — Shopkeeper Credit & Cash Flow",
  description: "Track customer udhaar, send WhatsApp reminders, and forecast cash flow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}