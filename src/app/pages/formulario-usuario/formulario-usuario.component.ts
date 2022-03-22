import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  usuario ={
    identificacion: '',
    nombre: '',
    apellido: '',
    edad: 0
  }

  constructor( private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  guardar(forma:NgForm){
   this.userService.guardar();
  }

  consultar(forma:NgForm ){
    this.userService.consultar(forma);
  }

}
