import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInfoComponent } from './car-info.component';

const routes: Routes = [
  {
    path: ':id',
    component: CarInfoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarInfoRoutingModule {}
