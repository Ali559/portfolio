import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteShell } from '@/components/layout/SiteShell'
import { contactLinks } from '@/data/content'
import { bricolage, notoArabic } from '@/lib/fonts'
import { LocaleProvider } from '@/lib/locale'
import { siteUrl } from '@/lib/site'

const title = 'Ali Barznji — Software Engineer'
const description =
  'Portfolio of Ali Barznji, a software engineer who builds backends for Lalengi and Codex Solutions, and tools for students in Kurdistan.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Ali Barznji',
  },
  description,
  keywords: [
    'Ali Barznji',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Vue Developer',
    'Node.js Developer',
    'TypeScript',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Ali Barznji', url: siteUrl }],
  creator: 'Ali Barznji',
  publisher: 'Ali Barznji',
  alternates: {
    canonical: '/',
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
    type: 'website',
    url: siteUrl,
    siteName: 'Ali Barznji',
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/img/avatar-square.png',
        width: 768,
        height: 768,
        alt: 'Ali Barznji',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/img/avatar-square.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaff' },
    { media: '(prefers-color-scheme: dark)', color: '#110a2e' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ali Barznji',
  url: siteUrl,
  image: `${siteUrl}/img/avatar-square.png`,
  jobTitle: 'Software Engineer',
  email: `mailto:${contactLinks.email}`,
  sameAs: [contactLinks.github, contactLinks.linkedin],
  knowsAbout: [
    'TypeScript',
    'JavaScript',
    'React',
    'Vue.js',
    'Next.js',
    'Node.js',
    'NestJS',
    'Go',
    'C#',
    '.NET',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${notoArabic.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="antialiased">
        <LocaleProvider>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  )
}
