import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName : string = ""
  password : string = ""

  constructor(private userService : UserService){

  }

 iniciarSesion(username: string, password: string){
  this.userService.loginUser(username,password).subscribe(
    (data) => {

      console.log(data)
              alert('Se inicio sesion correctamente')
              localStorage.setItem("user",JSON.stringify(data))
              
            },
            (error) => {
             alert('No se pudo iniciar sesion correctamente');
            }

  )
 }

}
