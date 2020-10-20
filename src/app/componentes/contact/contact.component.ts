import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../../modelo/contacto.usuario';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public contacto: ContactoUsuario;

  constructor() { 
    this.title = "Escribinos...";
    this.contacto = new ContactoUsuario("","","","");
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.contacto);
  }

}
