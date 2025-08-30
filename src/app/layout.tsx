import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Your SEO title",
    description: "Enter your SEO description",
};

const display = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-display",
});

const body = Sora({
    subsets: ["latin"],
    variable: "--font-body",
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
            <body className="antialiased font-[var(--font-body)] bg-[#0b0b12] text-zinc-100">
                {children}
            </body>
        </html>
    );
}