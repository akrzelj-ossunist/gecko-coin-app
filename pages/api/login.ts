import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from "../../data"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === "POST"){
        const newUser = {
            username: req.body.username,
            password: req.body.password
        }
        users.push(newUser)
        res.status(201).json(newUser)
    }else if(req.method === "GET")
         res.status(200).json(users)
}
