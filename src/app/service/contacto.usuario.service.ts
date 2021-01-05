import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactoUsuario } from '../modelo/contacto.usuario';
import { Global } from './global';



@Injectable()
export class ContactoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    saveContact(contacto: ContactoUsuario): Observable<any>{
        let params = JSON.stringify(contacto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-contact', params, {headers: headers});
    }

}
