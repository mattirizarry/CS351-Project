import { ChangeEvent, useState } from "react"
import InputComponent from "../components/InputComponent"

export default function Home() {

  const [userNum, setUserNum] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const _handleSetUserNum = (e: ChangeEvent<HTMLInputElement>) =>
    setUserNum(e.currentTarget.value)
  const _handleSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  async function handleLogin() {
    const response = await fetch('/api/v1/auth/sign_in',
    {
      method: "POST",
      body: JSON.stringify({
        userNum: userNum,
        password: password
      })
    })
      .then((resp) => resp.json())

    console.log(response)
  }

  return (
    <main className="page-content login-screen">
      <section className="login-form">
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
