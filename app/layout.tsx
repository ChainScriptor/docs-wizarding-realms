import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
    title: "Wizarding Realms - Rebuild Together",
    description: "we rebuild it together, piece by piece, spell by spell, on-chain this time, unbreakable and immortal.",
    icons: {
        icon: "/favicon.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${cinzel.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
