import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import configuracion from './app.config';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  getUsers(): Observable<Response>{
    let base = "https://"+configuracion.endpoint+"/user";
    return this.http.get(base).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registerUser(usuario:any):Observable<Response>{
    let base = "https://"+configuracion.endpoint+"/api/usuario/mcrear";
    usuario.active=1;
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registrarParticipante(usuario:any):Observable<Response>{
    let base = "https://"+configuracion.endpoint+"/api/usuario/mcrear";
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  login(usuario:any):Observable<Response>{
    let base = "https://"+configuracion.endpoint+"/api/usuario/mlogin";
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }

}
