import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTipPage } from './view-tip.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTipPageRoutingModule {}
