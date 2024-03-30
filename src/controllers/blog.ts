import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getItem = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

const getItems = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}

const updateItem = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}
const postItem = ({ body }: Request, res: Response) => {
  console.log('Estoy en postItem')
  try {
    console.log('Hola')
    res.send(body)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}

const deleteItem = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
