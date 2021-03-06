import { Category } from '../Category/Category';
import { SkinArea } from '../SkinArea';
import { ProductUnitType } from './ProductUnitType';

export interface Product {
    Id: number,
    Name: string,
    Description: string,
    Price: number,
    ImagePath: string,
    CategoryIds: number[],
    SkinAreaIds: number[],
    Tags: string[],
    Categories: Category[],
    SkinAreas: SkinArea[],
    ProductUnitTypeId: number,
    ProductUnitType: ProductUnitType
}