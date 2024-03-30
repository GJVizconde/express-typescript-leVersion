import { Router } from 'express'
import multerMiddleware from '../middleware/file'
import { getFile } from '../controllers/upload'

/**
 * Esta ruta soloo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */

const router = Router()

router.post('/', multerMiddleware.single('myfile'), getFile)

export { router }
