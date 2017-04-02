import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

@Component({
  template: `
    <ion-list no-lines>
      <ion-list-header>Add new</ion-list-header>
      <button ion-item>Game</button>
      <button ion-item>Review</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(private navParams: NavParams) {

  }

}


@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  gameType: string = 'board';

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
