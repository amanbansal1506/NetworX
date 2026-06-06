import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});
const siteTitle = "NetworX";
const siteUrl = "http://localhost:3000";
const siteDescription =
  "NetworX is a production-grade LinkedIn-style platform built with a Node.js gateway, Spring Boot microservices, PostgreSQL, Redis, and object storage for scalable social interactions and media delivery. It's Free and Always will be. Developed by Adrin T paul";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | NetworX",
  },
  description: siteDescription,
  keywords: [
    "NetworX",
    "Clone of Linkedin",
    "Developed by Aman",
    "Aman Bansal",
    "Its Free and always will be",
    "Made in India",
    "Linkedin Clone called NetworX",
    "Scalable System Design Engineer",
    "Aman Bansal",
    "Aman Bansal",
    "Aman",
  ],
  applicationName: "NetworX",
  authors: [{ name: "Aman Bansal", url: siteUrl }],
  creator: "Aman Bansal",
  publisher: "Aman Bansal",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/NetworX_preview.png`,
        width: 1200,
        height: 630,
        alt: "NetworX Site Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/portfolio_preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Bansal",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/aman-bansal-464b6a270",
                "https://github.com/amanbansal1506",
              ],
              siteName: "NetworX",
              siteDescription: siteDescription,
              knowsAbout: [
                "Distributed Systems",
                "Microservices",
                "Redis",
                "PostgreSQL",
                "Spring Boot",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      <body className={`${robotoCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
