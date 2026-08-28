import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primis AI | Intelligent Automation",
  description:
    "AI-powered tools built for Primis Bank — transforming how the team works, one automation at a time.",
};

const antiFlicker = `
try {
  var t = localStorage.getItem('theme');
  if (t) document.documentElement.setAttribute('data-theme', t);
} catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        {/* Runs before first paint — prevents theme flash on reload */}
        <script
          dangerouslySetInnerHTML={{ __html: antiFlicker }}
          suppressHydrationWarning
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
