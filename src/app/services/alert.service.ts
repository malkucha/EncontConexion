import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert(alertHeader: any, alerSubtHeader: any, message: any ) {
    const alert = await this.alertCtrl.create({
      header: alertHeader,
      subHeader: alerSubtHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
