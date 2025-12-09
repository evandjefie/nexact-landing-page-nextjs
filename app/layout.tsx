import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NEXACT | Certification et développement des compétences numériques",
  description: "NEXACT : la plateforme ivoirienne de développement et de certification des compétences numériques. Évaluez vos aptitudes, suivez des parcours d'apprentissage personnalisés et obtenez des certifications officielles. Idéal pour étudiants, professionnels et citoyens.",
  icons: {
    icon: '/img/logo nexact.svg',
  },
  keywords: [
    'NEXACT', 'compétences numériques', 'certification', 'évaluation', 'Côte d\'Ivoire',
    'citoyenneté numérique', 'apprentissage', 'badge', 'parcours'
  ],
  metadataBase: new URL('https://nexact.ci'),
  alternates: {
    canonical: 'https://nexact.ci/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'NEXACT | Certification et développement des compétences numériques',
    description: "NEXACT : la plateforme ivoirienne de développement et de certification des compétences numériques.",
    url: 'https://nexact.ci/',
    siteName: 'NEXACT',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXACT | Certification des compétences numériques',
    description: "Évaluez, progressez et certifiez vos compétences numériques avec NEXACT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${nunitoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
