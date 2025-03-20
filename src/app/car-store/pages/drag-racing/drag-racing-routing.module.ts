import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragRacingComponent } from './drag-racing.component';

const routes: Routes = [
  {
    path: '',
    component: DragRacingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragRacingRoutingModule {}
