import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "HIIT Zone - High Intensity Interval Training",
  description:
    "Transform your fitness with our comprehensive HIIT training programs and workouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
