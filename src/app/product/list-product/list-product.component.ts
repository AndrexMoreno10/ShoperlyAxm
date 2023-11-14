import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  filtproducts: Product[] = [];
  categoriesId: string = "";
  category: any
  idParam: any
  constructor(private productService: ProductServiceService,
    private route: ActivatedRoute, private cartService: ShoppingCartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idParam = params['id'];
      // Ahora, this.productId contiene el valor del parámetro de ruta 'id'
      console.log('Valor del parámetro id:', this.idParam);

      if (this.idParam !== undefined) {
        this.categoriesId = this.idParam;
        this.loadProduct();
      } else {
        this.productService.getAllProducts().subscribe(products => {
          this.products = products;
        })

      }
    });



  }

  loadProduct() {
    this.productService.findByCategory(parseInt(this.categoriesId)).subscribe(
      (data) => {
        this.products = data;

      },
      (error) => {
        console.error('Error al cargar la category:', error);
      }
    );
  }

}

