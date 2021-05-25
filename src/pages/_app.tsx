import '../styles/global.css'
import type { AppProps } from 'next/app'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChanllengesContext'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}
export default MyApp
