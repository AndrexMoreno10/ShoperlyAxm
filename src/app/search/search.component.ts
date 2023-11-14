import { Component } from '@angular/core';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { ProductServiceService } from '../product/product-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchKeyword: string = ""
  products : Product[]=[]

  constructor(private activatedRoute :ActivatedRoute ,private productService: ProductServiceService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['name']
      this.searchMovie()
    })

  }

  searchMovie() {
    this.productService.searchProductsByName(this.searchKeyword).subscribe((res) => {
      this.products = res.results
          }, (error) => {
      // SwalUtils.customMessageError('Error', "Error en la consulta")
      console.log(error)
    })
  }

}
