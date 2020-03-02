import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tips',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tips/tips.module').then(m => m.TipsPageModule)
          }
        ]
      },
      {
        path: 'goals',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../goals/goals.module').then(m => m.GoalsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/goals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/goals',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
