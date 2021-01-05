import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/service/contacto.usuario.service';
import {ContactoUsuario} from '../../modelo/contacto.usuario';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactoService]
})

export class ContactComponent implements OnInit {
  public title: string;
  public contacto: ContactoUsuario;

  constructor(
    private _contactService: ContactoService
  ) { 
    this.title = "Escribinos...";
    this.contacto = new ContactoUsuario("","","","");
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.contacto);
    this._contactService.saveContact(this.contacto).subscribe(
      response =>{
        if(response.contact){
          console.log("Se creo con exito");
        }
        else{
          console.log("No se creo!");
        }
      }
    )
  }

}
