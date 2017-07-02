import { Component } from '@angular/core';

import { App, PopoverController, ViewController } from 'ionic-angular';

import { AddGamePage } from '../add-game/add-game';

@Component({
  template: `
    <ion-list no-lines>
      <ion-list-header>Add new</ion-list-header>
      <button ion-item (click)="addGame()">Game</button>
      <button ion-item>Review</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public appCtrl: App, public viewCtrl: ViewController) {}

  addGame() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(AddGamePage);
  }

}


@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  gameType: string = 'board';

  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
