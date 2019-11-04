import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})

export class MensajesPage implements OnInit {

  constructor(public router: Router, private authService: AuthService,private storage: Storage) { }

  users;

  ngOnInit() {
    // this.authService.getMessages(this.storage.get('TOKEN_KEY'), this.storage.get('ck_sesID')).subscribe((res) => {
    //   this.users = res;
    // });
  }

}
