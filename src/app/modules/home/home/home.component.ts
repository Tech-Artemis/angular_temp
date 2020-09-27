import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products-repository/services/products.service';
import { ProductMini } from '../../shared/products-repository/interfaces/Product/ProductMini';
import { AppConfigService } from '../../core/services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductMini[];
  isCartEnabled: boolean;

  constructor(private productsService: ProductsService, private appConfigService: AppConfigService) { }

  ngOnInit() {
    this.products = this.productsService.getAllMiniProducts();
    this.isCartEnabled = this.appConfigService.IsCartEnabled;
  }

}
