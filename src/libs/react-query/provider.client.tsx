'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export const ReactQueryProviders = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }))

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}
