import { Router } from 'express'
// import itemRouter from '../routes/item'
import { readdirSync } from 'fs'

const router = Router()

const PATH_ROUTER = `${__dirname}`
const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log('Se esta cargarndo la ruta', cleanName)
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

// router.use('/item', itemRouter)

export { router }
