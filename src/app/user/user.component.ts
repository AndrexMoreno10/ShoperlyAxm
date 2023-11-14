import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUserSelect?: number = undefined;
  crearEditar: boolean = false;
  nameUser: string = "";
  ageUser: number = 0;
  phoneUser: string = "";
  addressUser: string = "";
  emailUser: string = "";
  passwordUser: string = "";
  usernameUser: string = "";


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //  this.getAllSuppliers();
 }

  // /*getAllUsers() {
  //   this.supplierService.getAllSupplier().subscribe(data => {
  //     this.suppliers = data;
  //   })
  // }*/

  // eliminar(id?: number) {
  //   if (id) {
  //     this.userService.deleteUser(id).subscribe(
  //       (data) => {
  //         alert('Se elimino de manera satisfactoria');
  //         //this.getAllUsers();
  //       },
  //       (error) => {
  //         alert('el provedor contiene un producto y no se puede eliminar ');
  //       }
  //     )
  //   }

  // }

  // guardar() {
  //   const aux: User = {
      
  //     name: this.nameUser,
  //     age: this.ageUser,
  //     phone: this.phoneUser,
  //     address: this.addressUser,
  //     email: this.emailUser,
  //     password: this.passwordUser,
  //     username: this.usernameUser
  //   }
  //   this.userService.createUser(aux).subscribe(
  //     (data) => {
  //       alert('Se agregó de manera satisfactoria');
  //       //this.getAllUsers();
  //       this.crearEditar = false;
  //       this.limpiarCampos();
  //     },
  //     (error) => {
  //       alert('No se pudo agregar el usuario');
  //     }
  //   )

  // }

  /*limpiarCampos(){
    this.nameSupplier = "";
    this.phoneSupplier = "";
    this.addressSupplier= "";
  }*/

  // mostrarForm(idUserSelect?: number) {
  //   if (idUserSelect) {
  //     this.idUserSelect = idUserSelect
  //     this.buscarPorArreglo();
  //   }else{
  //     this.idUserSelect = undefined
  //   }
  //   this.crearEditar = true;
  // }

  // editar(id: number) {
  //   const auxEditar: User = {
  //     name: this.nameUser,
  //     age: this.ageUser,
  //     phone: this.phoneUser,
  //     address: this.addressUser,
  //     email: this.emailUser,
  //     password: this.passwordUser,
  //     username: this.usernameUser
  //   }
  //   this.userService.putUser(id, auxEditar).subscribe(
  //     (data) => {
  //       alert('Se editó de manera satisfactoria');
  //       //this.getAllSuppliers();
  //       this.crearEditar = false;
  //       this.idUserSelect = undefined;
  //     },
  //     (error) => {
  //       alert('No se pudo editar el supplier');
  //     }
  //   )

  // }

  // buscarPorArreglo() {
  //   const objetoFiltrado = this.suppliers.filter(supplier => supplier.id === this.idSupplierSelect)[0];
  //   this.nameSupplier = objetoFiltrado.name;
  //   this.addressSupplier = objetoFiltrado.address;
  //   this.phoneSupplier = objetoFiltrado.phone;
  // }

  // finalizar() {
  //   if (this.idUserSelect) {
  //     this.editar(this.idUserSelect);
  //   } else {
  //     this.guardar();
  //   }

  // }

}
