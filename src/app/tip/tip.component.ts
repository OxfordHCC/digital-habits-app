import {Component, Input, OnInit} from '@angular/core';
import {DataService, Tip} from '../services/data.service';
import {ToastController} from '@ionic/angular';
import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {
  @Input() tip: Tip;

  constructor(public data: DataService,
              private toastController: ToastController,
              private localNotifications: LocalNotifications) { }

  ngOnInit() {}

  async toggleGoal() {
    await this.data.toggleGoal(this.tip.id);

    if (this.data.isGoal(this.tip.id)) {
      const toast = await this.toastController.create({
        header: 'Goal added',
        message: 'A reminder will be shown in 7 days.',
        position: 'top',
        duration: 2000
      });
      await toast.present();

      // Check out: https://stackoverflow.com/questions/53925894/ionic-what-is-the-correct-way-to-change-icon-in-local-notifications-plugin/54115579#54115579
      this.localNotifications.schedule({
        id: this.tip.id,
        text: 'Keep track of your goals',
        title: this.tip.title,
        trigger: { in: 7, unit: ELocalNotificationTriggerUnit.DAY },
        smallIcon: 'res://ic_stat_notify',
        // icon: 'file://assets/public/assets/icon/favicon.png',
        sound: null
      });
    } else {
      await this.localNotifications.cancel(this.tip.id);
    }
  }
}
