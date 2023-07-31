'use client'

import { StyledLink } from '~/src/components/elements/Link'

export default function GlobalError({ error }: { error: Error }) {
  console.log(error)
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <StyledLink href='/'>to top</StyledLink>
      </body>
    </html>
  )
}
