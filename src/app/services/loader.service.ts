import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController) { }

  public async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      translucent: true
    });

    return await this.loading.present();
  }

  public dismissLoading() {
    if (this.loading) {
      //setTimeout(() => {
      this.loading.dismiss();
    //}
    //, 2000);
    }
  }
}
