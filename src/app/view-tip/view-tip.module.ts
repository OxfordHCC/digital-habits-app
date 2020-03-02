import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewTipPage } from './view-tip.page';

import { IonicModule } from '@ionic/angular';

import { ViewTipPageRoutingModule } from './view-tip-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTipPageRoutingModule
  ],
  declarations: [ViewTipPage]
})
export class ViewTipPageModule {}
