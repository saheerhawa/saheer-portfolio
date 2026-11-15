import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saheer Hawa | Frontend Developer & Computer Science Student",
  description:
    "Portfolio of Saheer Hawa, a final-year BSc Computer Science student and frontend developer exploring data science, software testing, and practical software development.",
  openGraph: {
    title: "Saheer Hawa | Frontend Developer & Computer Science Student",
    description:
      "Portfolio of Saheer Hawa, a final-year BSc Computer Science student and frontend developer exploring data science, software testing, and practical software development.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
