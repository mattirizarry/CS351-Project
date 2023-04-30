import Cookies from 'js-cookie'
import jwt, { Secret } from 'jsonwebtoken'

export const login = async (userNum: string, password: string) => {
	const response = await fetch('/api/v1/auth/sign_in', {
    method: "POST",
    body: JSON.stringify({
      userNum: userNum,
      password: password
    })
	})
    .then((resp) => resp.json())

  if (response.message) 
    return false

  Cookies.set('token', response.token)

	return true
}

export const signOut = () => {
  Cookies.remove('token')
  Cookies.remove('user')
}

export const isAuthenticated = () => {

	const token = Cookies.get('token')

	if (!token) return null

  return token
};

export const decodeJWT = (token: string) => jwt.verify(token, process.env.JWT_SECRET as Secret)