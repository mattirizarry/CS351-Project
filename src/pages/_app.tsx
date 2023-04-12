import type { AppProps } from "next/app"

import "@/src/styles/app.sass"
import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
