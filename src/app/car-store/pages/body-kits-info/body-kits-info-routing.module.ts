import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyKitsInfoComponent } from './body-kits-info.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: ':id',
    component: BodyKitsInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyKitsInfoRoutingModule {}
