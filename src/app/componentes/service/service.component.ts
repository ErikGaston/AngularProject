import { Component, OnInit } from '@angular/core';
import {Contact} from '../../modelo/contacto.usuario';
import {ContactoService} from '../../service/contacto.usuario.service';
import { Global } from '../../service/global';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [ContactoService]
})
export class ServiceComponent implements OnInit {

  public contacts: Contact[];
  public url: string;

  constructor(
    private _contactService : ContactoService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getContacts;
  }

  getContacts(){
    this._contactService.getContacts().subscribe(
      response => {
        if(response.contacts){
          console.log(response);
          this.contacts = response.contacts;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getContact(id){
    this._contactService.getContacts().subscribe(
      response => {
          this.contacts = response.contacts;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteContact(id){
    this._contactService.deleteContact(id).subscribe(
      response => {
        if(response.contact){
          
        }
      },
      error =>{
        console.log(<any>error);
      }
      
    )
  }

}
