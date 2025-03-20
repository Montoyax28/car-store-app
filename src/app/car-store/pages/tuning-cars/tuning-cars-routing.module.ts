import { NgModule } from '@angular/core';
import { TuningCarsComponent } from './tuning-cars.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TuningCarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuningCarsRoutingModule {}
