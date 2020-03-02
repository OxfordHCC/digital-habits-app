import { Component } from '@angular/core';
import { DataService, Tip } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'tips.page.html',
  styleUrls: ['tips.page.scss'],
})
export class TipsPage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getTips(): Tip[] {
    return this.data.getTips();
  }

}
