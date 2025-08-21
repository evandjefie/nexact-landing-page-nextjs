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
