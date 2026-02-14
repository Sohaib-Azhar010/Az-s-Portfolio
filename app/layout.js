import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Arooj Zahid - Portfolio",
    description: "A passionate and detail-oriented Website Developer based in Lahore, specializing in responsive and user-friendly websites.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}