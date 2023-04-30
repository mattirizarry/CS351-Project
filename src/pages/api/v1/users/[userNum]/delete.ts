// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { decodeJWT } from "@/src/lib/authlib";
import prisma from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method == "DELETE") {
    try {
      const token = req.headers.authorization?.split(' ')[1];
    
      if (!token) {
        return res.status(401).json({ message: 'Authentication failed: Missing token' });
      }    

      decodeJWT(token)

      if (typeof req.query.userNum == "string") {
        const result = await prisma.user.delete({
          where: {
            userNum: req.query.userNum
          }
        })
      }
      res.status(200).json({ success: "Successfully deleted user."})
    } catch (error) { 
      res.status(401).json({ message: 'Authentication failed: Invalid token' })
    }
  }
}
