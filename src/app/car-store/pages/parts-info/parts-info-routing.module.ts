import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsInfoComponent } from './parts-info.component';

const routes: Routes = [
  {
    path: ':id',
    component: PartsInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartsInfoRoutingModule {}
