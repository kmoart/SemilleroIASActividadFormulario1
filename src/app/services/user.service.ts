import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  guardar(){
    console.log('Campos guardados');
    }

  consultar(forma:NgForm){
  console.log( forma.value );
  }
}
