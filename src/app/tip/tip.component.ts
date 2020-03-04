import { Component, OnInit, Input } from '@angular/core';
import {DataService, Tip} from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {
  @Input() tip: Tip;

  constructor(private data: DataService,
              private toastController: ToastController,
              private localNotifications: LocalNotifications) { }

  ngOnInit() {}

  async toggleGoal() {
    await this.data.toggleGoal(this.tip.id);

    if (this.data.findGoal(this.tip.id) >= 0) {
      const toast = await this.toastController.create({
        message: 'Goal added. A reminder will be shown in 7 days.',
        duration: 2000
      });
      await toast.present();

      const sevenDays = new Date();
      sevenDays.setDate(sevenDays.getDate() + 7);

      // Check out: https://stackoverflow.com/questions/53925894/ionic-what-is-the-correct-way-to-change-icon-in-local-notifications-plugin/54115579#54115579
      this.localNotifications.schedule({
        text: 'Keep track of your goals',
        title: this.tip.title,
        trigger: {at: sevenDays},
        smallIcon: 'res://ic_stat_notify',
        // icon: 'file://assets/public/assets/icon/favicon.png',
        sound: null
      });
    }
  }
}
