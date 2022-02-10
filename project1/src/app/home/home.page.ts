import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  async actionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action sheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('delete button clicked');
          }
        }, {
          text: 'Play',
          icon: 'musical-notes',
          handler: () => {
            console.log('play button is clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share button is clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel button is clicked');
          }
        }
      ],
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: false,
      keyboardClose: false,
      // mode: 'ios'
    });
    actionSheet.present();

    actionSheet.onWillDismiss().then(() => {
      console.log('fist close');
    });

    actionSheet.onDidDismiss().then(() =>{
      console.log('second close');
    });
  }

}
