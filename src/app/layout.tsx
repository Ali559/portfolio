import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteShell } from '@/components/layout/SiteShell'
import { allSocials } from '@/data'

const siteUrl = 'https://alibarznji.dev'
const title = 'Ali Barznji — Full Stack Developer'
const description =
  'Portfolio of Ali Barznji, a full stack developer with 5+ years of experience building scalable web applications with React, Vue, Node.js, Go, and .NET'

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
        url: '/img/avatar.jpg',
        width: 1200,
        height: 1200,
        alt: 'Ali Barznji',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/img/avatar.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ali Barznji',
  url: siteUrl,
  image: `${siteUrl}/img/avatar.jpg`,
  jobTitle: 'Full Stack Developer',
  email: `mailto:${allSocials.email.link}`,
  sameAs: [`https://${allSocials.github.link}`, `https://${allSocials.linkedin.link}`],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
