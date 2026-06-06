import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  // ─── SEO PRIMARIO ───
  title: "Alma & Luz | Lecturas de Tarot y Limpiezas Energéticas en Argentina",
  description:
    "Lecturas de Tarot personalizadas por WhatsApp (audios) y Limpiezas Energéticas con reporte PDF. Claridad, paz y transformación real. Consultas para toda Argentina. Agendá ahora.",
  keywords: [
    "lectura de tarot argentina",
    "lectura de tarot por whatsapp",
    "limpieza energética online",
    "tarot personalizado argentina",
    "consulta espiritual online",
    "tarot audios whatsapp",
    "limpieza energetica pdf",
    "tarotista argentina",
    "lectura de tarot buenos aires",
    "consulta de tarot online argentina",
  ],
  // ─── OPEN GRAPH (para redes sociales e Instagram) ───
  openGraph: {
    title: "Alma & Luz | Lecturas de Tarot & Limpiezas Energéticas",
    description:
      "Claridad, paz y respuestas concretas. Lecturas de Tarot por WhatsApp y Limpiezas con PDF detallado. Consultá sin compromiso.",
    url: "https://www.almaluz.com.ar", // ← reemplazá con tu dominio real
    siteName: "Alma & Luz",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // ← subí una imagen 1200x630px a /public
        width: 1200,
        height: 630,
        alt: "Alma & Luz – Lecturas de Tarot y Limpiezas Energéticas",
      },
    ],
  },
  // ─── TWITTER/X CARD ───
  twitter: {
    card: "summary_large_image",
    title: "Alma & Luz | Tarot & Energía",
    description: "Lecturas de Tarot por WhatsApp y Limpiezas Energéticas con reporte PDF. Argentina.",
    images: ["/og-image.jpg"],
  },
  // ─── TÉCNICO ───
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.almaluz.com.ar", // ← tu dominio
  },
};

// ─── SCHEMA MARKUP (JSON-LD) ───
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.almaluz.com.ar/#business",
      name: "Alma & Luz",
      description:
        "Servicios de Lecturas de Tarot personalizadas y Limpiezas Energéticas. Consultas online para toda Argentina vía WhatsApp.",
      url: "https://www.almaluz.com.ar",
      telephone: "+541133049156",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      serviceType: ["Lectura de Tarot", "Limpieza Energética"],
      priceRange: "$$",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
        contactOption: "TollFree",
      },
    },
    {
      "@type": "Service",
      name: "Lectura de Tarot Personalizada",
      description:
        "Lectura de Tarot profunda y personalizada entregada en audios por WhatsApp. Sin videollamada. Para consultas de amor, trabajo, propósito y más.",
      provider: { "@id": "https://www.almaluz.com.ar/#business" },
      areaServed: "Argentina",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/541133049156",
        serviceSmsNumber: "+541133049156",
      },
    },
    {
      "@type": "Service",
      name: "Limpieza Energética con Reporte PDF",
      description:
        "Trabajo energético completo con diagnóstico de chakras, corte de lazos y liberación de bloqueos. Incluye reporte PDF detallado con recomendaciones personalizadas.",
      provider: { "@id": "https://www.almaluz.com.ar/#business" },
      areaServed: "Argentina",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/541133049156",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <meta name="geo.region" content="AR" />
        <meta name="geo.country" content="Argentina" />
      </head>
      <body className="bg-cream font-jost antialiased">{children}</body>
    </html>
  );
}
