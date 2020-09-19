import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products-repository/services/products.service';
import { ProductMini } from '../../shared/products-repository/interfaces/Product/ProductMini';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductMini[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllMiniProducts();
  }

}
