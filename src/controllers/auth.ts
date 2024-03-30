import { Request, Response } from 'express'
import { loginUser, registerNewUser } from '../services/auth'
import { handleHttp } from '../utils/error.handle'

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body)
    res.status(200).send(responseUser)
  } catch (error) {
    handleHttp(res, 'ERROR_REGISTER_USER', error)
  }
}

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body
    const responseUser = await loginUser({ email, password })

    if (responseUser === 'PASSWORD_INCORRECT') {
      res.status(403).send(responseUser)
    } else {
      res.status(200).send(responseUser)
    }
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN_USER', error)
  }
}

export { registerCtrl, loginCtrl }
