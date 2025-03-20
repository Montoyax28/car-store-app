import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragRacingInfoComponent } from './drag-racing-info.component';

const routes: Routes = [
  {
    path: '',
    component: DragRacingInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragRacingInfoRoutingModule {}
