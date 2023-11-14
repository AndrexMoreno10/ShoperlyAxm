import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  resultStatus = true;
  idCategorySelect?: number = undefined;
  crearEditar: boolean = false;
  nameCategory: string = "";
  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
  }

  eliminar(id?: number) {
    if (id) {
      this.categoryService.deleteCategory(id).subscribe(
        (data) => {
          alert('Se elimino de manera satisfactoria');
          this.getAllCategories();
        },
        (error) => {
          alert('la categoria contiene un producto y no se puede eliminar ');
        }
      )
    }


  }

  guardar() {
    const aux: Category = {
      name: this.nameCategory
    }
    this.categoryService.createCategory(aux).subscribe(
      (data) => {
        alert('Se agregó de manera satisfactoria');
        this.getAllCategories();
        this.crearEditar = false;
        this.nameCategory = "";
      },
      (error) => {
        alert('No se pudo agregar la categoria');
      }
    )

  }

  mostrarForm(idCategory?: number) {
    if (idCategory) {
      this.idCategorySelect = idCategory
      console.log("hola")
      this.buscarPorArreglo();
    }else{
      console.log("chao")
      this.idCategorySelect = undefined
    }
    this.crearEditar = true;
  }

  editar(id: number) {
    const auxEditar: Category = {
      name: this.nameCategory
    }
    this.categoryService.putCategory(id, auxEditar).subscribe(
      (data) => {
        alert('Se editó de manera satisfactoria');
        this.getAllCategories();
        this.crearEditar = false;
        this.idCategorySelect = undefined;
      },
      (error) => {
        alert('No se pudo editar la categoria');
      }
    )

  }

  buscarPorArreglo() {
    const objetoFiltrado = this.categories.filter(category => category.id === this.idCategorySelect)[0];
    this.nameCategory = objetoFiltrado.name;
  }

  finalizar() {
    if (this.idCategorySelect) {
      this.editar(this.idCategorySelect);
      console.log("holi")
    } else {
      this.guardar();
      console.log("chaoo")
    }

  }
}








