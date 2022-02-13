import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiveMoneyBtnComponent} from "./give-money-btn/give-money-btn.component";
import {ToggleBoxComponent} from "./toggle-box/toggle-box.component";
import {NComponent} from "./n/n.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'btn',
    pathMatch: 'full'
  },
  {
    path: 'btn',
    component: GiveMoneyBtnComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'tog',
    component: ToggleBoxComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'nir',
    component: NComponent,
    data: { animation: 'isRight' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
