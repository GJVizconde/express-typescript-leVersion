import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { JwtPayload } from 'jsonwebtoken'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.status(200).send({
      data: 'ESTO SOLO LO VE LAS PERSONAS CON SESSION / JWT',
      user: req.user
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ORDERS', e)
  }
}

export { getItems }
