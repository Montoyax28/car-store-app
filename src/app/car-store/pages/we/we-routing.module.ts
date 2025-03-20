import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeComponent } from './we.component';

const routes: Routes = [
  {
    path: '',
    component: WeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeRoutingModule {}
