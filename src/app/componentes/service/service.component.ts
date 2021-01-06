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

  constructor(
    private _contactService : ContactoService
  ) { }

  ngOnInit(): void {
    this.getContacts;
  }

  getContacts(){
    this._contactService.getContacts().subscribe(
      response => {
        if(response.contacts){
          this.contacts = response.contacts;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
