// Abstract Furniture Factory

import { IChair } from './chair/chair'
import ChairFactory from './chair/chair-factory'
import { ITable } from './table/table'
import TableFactory from './table/table-factory'

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
    // This indicates that the method might return either an IFurniture object (if furniture creation is successful) or undefined (if there's an error or the requested furniture type is not found).
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (
                ['SmallChair', 'MediumChair', 'BigChair'].indexOf(
                    furniture
                ) > -1
            ) {
                return ChairFactory.getChair(furniture)
            }
            if (
                ['SmallTable', 'MediumTable', 'BigTable'].indexOf(
                    furniture
                ) > -1
            ) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}