import { Injectable } from '@angular/core';

import { ProductsContainer } from '../interfaces/Product/ProductsContainer';
import { Product } from '../interfaces/Product/Product';

import { CategoriesService } from './categories.service';
import { SkinAreaService } from './skin-area.service';

import * as productsJson from 'src/assets/json/products-container.json';
import { ProductMini } from '../interfaces/Product/ProductMini';
import { EntityRepopulation } from '../../common-interfaces/interfaces/entity-repopulation.interface';
import { ProductUnitTypeService } from './product-unit-type.service';
import { ObjectHelperService } from '../../common-utils/utility-services/object-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements EntityRepopulation {

  private productsContainer: ProductsContainer;
  private productsMini: ProductMini[];

  constructor(private categoriesService: CategoriesService, private skinAreaService: SkinAreaService,
    private productUnitTypeService: ProductUnitTypeService, private objectHelper: ObjectHelperService) {
    this.productsContainer = (productsJson as any).default as ProductsContainer;
    this.productsContainer.Products.forEach(a => this.repopulate(a));
    this.productsMini = this.productsContainer.Products.map(product => this.convertProductToMini(product));
  }

  repopulate(product: Product) {
    product.Categories = [];
    for (let i = 0; i < product.CategoryIds.length; i++) {
      let category = this.categoriesService.getById(product.CategoryIds[i]);
      product.ImagePath = this.productsContainer.ImageBasePath + this.categoriesService.generatePathWithCategory(category) + product.ImagePath;
      product.Categories.push(category);
    }
    product.SkinAreas = product.SkinAreaIds.map(a => this.skinAreaService.getSkinAreaById(a));
    product.Tags = product.Tags;
    if (!this.objectHelper.isEmptyOrZero(product.ProductUnitTypeId))
      product.ProductUnitType = this.productUnitTypeService.getById(product.ProductUnitTypeId);
  }

  getAllProducts() {
    return this.productsContainer.Products;
  }

  getAllMiniProducts() {
    return this.productsMini;
  }

  convertProductToMini(product: Product): ProductMini {
    let productMini = new ProductMini();
    productMini.Id = product.Id;
    productMini.ImagePath = product.ImagePath;
    productMini.Name = product.Name;
    // productMini.ParentCategoryNames = this.categoriesService.generateParentCategoryNamesWithHigherOrder(product.Categories, 2);
    return productMini;
  }

}
