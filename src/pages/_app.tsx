import "../styles/global.css";
import type { AppProps } from "next/app";

import {
  ChallengesContext,
  ChallengesProvider,
} from "../contexts/ChanllengesContext";
import React from "react";
import { CountdownContextProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <CountdownContextProvider>
        <Component {...pageProps} />
      </CountdownContextProvider>
    </ChallengesProvider>
  );
}
export default MyApp;
