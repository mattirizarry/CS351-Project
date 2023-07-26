import type { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import prisma from "@/src/lib/prisma"

interface UserInfo {
  userNum: string
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userInfo: UserInfo = JSON.parse(req.body)

  const user = await prisma.user.findUnique({
    where: { 
      userNum: userInfo.userNum
    }
  })
    
  if (!user) {
    return res.status(404).json({ message: "User not found." })
  }

  if (!user.password) {
    return res.status(401).json({ message: "Unauthorized"})
  }

  const hash = await bcrypt.hash(user.password, 10)

  console.log("USER PWD HASH: " + hash)
  
  const auth = await bcrypt.compare(userInfo.password, user.password)

  console.log("USER HAS AUTH  "+ auth)

  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  } else {
    //@ts-ignore
    const jwt = jsonwebtoken.sign({ userNum: userInfo.userNum }, process.env.JWT_SECRET)

    res.status(200).json({ token: jwt, user })
  }
}
