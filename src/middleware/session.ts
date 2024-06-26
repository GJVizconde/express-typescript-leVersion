import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { JwtPayload } from 'jsonwebtoken'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop() // ['Bearer','1111']

    console.log('JWT=>', jwt)

    const isUser = verifyToken(`${jwt}`)
    if (!isUser) {
      res.status(401).send('NO_TIENES_UN_JWT_VALIDO')
    } else {
      req.user = isUser
    }
    console.log({ jwtByUser })

    next()
  } catch (e) {
    console.log(e)
    res.status(400).send('SESSION_NOT VALIDATE')
  }
}

export { checkJwt }
