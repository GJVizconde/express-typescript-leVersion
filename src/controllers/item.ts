import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { getCars, insertCar, getCar, updateCar, deleteCar } from '../services/item'

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getCar(id)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (_req: Request, res: Response) => {
  try {
    console.log('Estoy en GetItems')
    const response = await getCars()

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    console.log('Estoy en UPDATE')
    const response = await updateCar(id, body)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  const { id } = params
  try {
    const responseItem = await deleteCar(id)

    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
