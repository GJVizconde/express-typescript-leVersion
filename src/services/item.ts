import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item'

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item)

  return responseInsert
}

const getCars = async () => {
  const responseItem = await ItemModel.find({})
  return responseItem
}

const getCar = async (id: string) => {
  const responseItem = await ItemModel.find({ _id: id })
  return responseItem
}

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true //Response el objeto ya actualizado
  })

  return responseItem
}

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id })
  const data = response.deletedCount !== 0 ? response : 'NOT FOUND'
  return data
}

export { insertCar, getCars, getCar, updateCar, deleteCar }
