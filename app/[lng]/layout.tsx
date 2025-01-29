import type { Metadata } from "next";
import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ChildProps } from "@/types/index";
import { languages } from "@/i18n/settings";
import { dir } from 'i18next'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", '600', "700"],
  variable: "--font-space-grotesk"
})

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "300", '400', "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Praktikum",
  description: "Praktikum udemy clone",
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

interface Props extends ChildProps {
  params: {
    lng: string
  }
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${roboto.variable} overflow-x-hidden`} suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
