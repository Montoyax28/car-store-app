import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: () =>
      import('./car-store/car-store.module').then((m) => m.CarStoreModule),
  },
  {
    path: '**',
    redirectTo: 'store',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
