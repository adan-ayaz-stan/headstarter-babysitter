import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headstarter Babysitter",
  description:
    "The ultimate companion to hold the hand of novice Headstarter fellows!",
  openGraph: {
    title: "Headstarter Babysitter",
    description:
      "The ultimate companion to hold the hand of novice Headstarter fellows!",
    url: "https://hsbabysitter.vercel.app",
    siteName: "Headstarter Babysitter",
    images: [
      {
        url: "https://res.cloudinary.com/ddfjwg2rb/image/upload/v1724097970/My%20Uploads/Portfolio%20Projects/Headstarter%20Babysitter%20RAG/seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={dosis.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
