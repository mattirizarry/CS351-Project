import type { AppProps } from "next/app"

import "@/src/styles/app.sass"
import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"
import { useRouter } from "next/router"
import { FC, createContext, useEffect, useState } from "react"
import { isAuthenticated } from "../lib/authlib"
import Cookies from "js-cookie"

const Main: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export const authState = {
  token: Cookies.get('token') || "",
}

export const AuthContext = createContext(authState);

export default function App(props: AppProps) {

  const [state, setState] = useState(authState)

  return (
    <AuthContext.Provider value={state}>
      <Main { ...props } />
    </AuthContext.Provider>
  )
}