import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { Usuario } from '../modelos/usuario';
import { ResponseLogin } from '../modelos/responseLogin';
import { ResponseMessage } from '../modelos/responseMessage';
import { EnvService } from './env.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://e20.webkit.com.ar';
  token: any;
  authSubject  =  new  BehaviorSubject(false);
  responseLogin: ResponseLogin;
  btoatoken = btoa('encontrarse:prueba');

  constructor(private httpClient: HTTP, private storage: Storage) { }

  login2(usuario: Usuario): Observable<any> {

      this.httpClient.setHeader('Authorization', String('username'), String('encontrarse'));
      this.httpClient.setHeader('Authorization', String('password'), String('prueba'));

      this.httpClient.post(`${this.API_URL}/API/api_login.php`,  JSON.stringify(
        { pass: usuario.password, usua : usuario.email}
      ), null)
      .then(
        res => {
          if ( res.data.token) {
                // this.storage.set('TOKEN_KEY', res.data.token);
                // this.storage.set('user_username', res.data.ck_usua);
                // this.authSubject.next(true);
                this.responseLogin.token = res.data;
              }
        }
      ).catch(response => {console.log(response.status);
                           console.log(response.error); });

      const studentsObservable = new Observable(observer => {
            observer.next(this.responseLogin);
      });

      return studentsObservable;

  }

  login(usuario: Usuario) {

    //this.httpClient.setHeader('Authorization', String('encontrarse'), String('prueba'));
    // 'Authorization': 'Basic ' + this.btoatoken,
    //     'Accept': 'application/json',
    //     'accept-language':'en-eu',
    //     this.httpClient.setHeader('Content-Type': 'application/json'
    // // this.httpClient.setHeader('Authorization', String('password'), String(''));

    this.httpClient.sendRequest(`${this.API_URL}/API/api_login.php`,
    {
      method: 'post',
      data: { "usua" : `${usuario.email}`, "pass": `${usuario.password}`},
      serializer: 'json',
      headers: {Authorization: 'Basic ' + this.btoatoken, Accept: 'application/json', 'accept-language': 'en-eu',
      'Content-Type': 'aplication/json'},
      timeout: 5000
    }
  )
    .then(response => {
      // prints 200
      console.log(response.status);
      console.log(response.data);
    })
    .catch(response => {
      // prints 403
      debugger;
      console.log(response.status);

      // prints Permission denied
      console.log(response.error);
    });
  }

  async logout() {
    await this.removeSessionInfo();
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  async removeSessionInfo() {
    await this.storage.remove('TOKEN_KEY');
    await this.storage.remove('user_info');
    await this.storage.remove('gps_configuration');
    await this.storage.remove('hiddenHelp');
    await this.storage.remove('user_username');
  }

  // getMessages(token, session): Observable<ResponseMessage> {
  //     return this.httpClient.post<ResponseLogin>(`${this.API_URL}/API/api_bandeja.php`,  JSON.stringify(
  //     { ck_sesID:  this.storage.get('ck_sesID'), token  : this.storage.get('TOKEN_KEY')}
  //   ), {headers: new HttpHeaders().set('Authorization', 'basic username=encontrarse&password=prueba')}).pipe(
  //     tap(async (res: ResponseMessage) => {
  //       if ( res.token) {
  //         await this.storage.set('TOKEN_KEY', res.token);
  //         await this.storage.set('user_username', res.ck_usua);
  //         this.authSubject.next(true);
  //       }
  //     })
  //   );
  // }


}
