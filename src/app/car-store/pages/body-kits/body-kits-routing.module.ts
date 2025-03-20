import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyKitsComponent } from './body-kits.component';

const routes: Routes = [
  {
    path: '',
    component: BodyKitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyKitsRoutingModule {}
