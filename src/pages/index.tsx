import { ChangeEvent, useState } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const _handleSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value)
  const _handleSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  return (
    <main className="page-content login-screen">
      <form className="login-form">
        <input
          onChange={_handleSetEmail}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={_handleSetPassword}
          value={password}
          type="text"
          placeholder="Password"
        />
      </form>
    </main>
  )
}
