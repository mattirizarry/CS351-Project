import { ChangeEvent, useState } from "react"
import { login } from "@/src/lib/authlib"
import InputComponent from "@/src/components/InputComponent"
import { useRouter } from "next/router"

export default function Login() {

  const [userNum, setUserNum] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()

  const _handleSetUserNum = (e: ChangeEvent<HTMLInputElement>) =>
    setUserNum(e.currentTarget.value)
  const _handleSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  async function handleLogin() {
    const didLogin = await login(userNum, password)
      .catch((err) => console.log(err))

    if (didLogin) {
      router.push('/dashboard')
    }
  }

  return (
    <main className="page-content login-screen">
      <img src="/hero.jpeg" />
      <section className="login-form">
        <h1>CS351 Final Project</h1>
        <InputComponent
          type="userNum"
          handler={_handleSetUserNum}
          id="userNum"
          value={userNum}
          placeholder="User Num"
        />
        <InputComponent
          type="password"
          handler={_handleSetPassword}
          id="password"
          value={password}
          placeholder="Password"
        />
        <button 
          onClick={handleLogin}
          className="btn delete">Login</button>
      </section>
    </main>
  )
}
