import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (_req: Request, _res: Response) => {
  console.log('HOLAAAAAs')
})

export { router }
