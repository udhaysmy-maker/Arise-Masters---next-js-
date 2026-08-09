import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/site/Preloader";
import { CookieConsent } from "@/components/site/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const siteTitle = "Arise Masters — Corporate Training & Placement Consulting";
const siteDescription =
  "Premium corporate soft-skills, leadership, HR and placement training for companies, colleges and MSMEs. Transform people. Empower teams. Build future leaders.";
const ogImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f65bc4c-2608-4f9e-8d7d-90a3daf395e2/id-preview-18d16d2b--e43787bc-a065-442b-a10e-edcca6bd8d53.lovable.app-1785330411281.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Arise Masters" }],
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Arise Masters",
    type: "website",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arise Masters",
  slogan: "Your Rise Begins Here",
  description:
    "Corporate training, leadership development and placement consulting.",
  url: "/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ink">
        <Preloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
