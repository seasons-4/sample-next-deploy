import { Metadata } from 'next'
import { NextAuthProvider } from '~/src/libs/next-auth'
import { ReactQueryProviders } from '~/src/libs/react-query'

import '~/src/styles/globals.css'

export const metadata: Metadata = {
  title: '野党.app',
  description: '霜降り明星のオールナイトニッポン',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: usePageLoading実装
  return (
    <html lang='ja'>
      <body>
        <NextAuthProvider>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </NextAuthProvider>
      </body>
    </html>
  )
}
