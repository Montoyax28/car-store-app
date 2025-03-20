import { NgModule } from '@angular/core';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndConditionsRoutingModule {}
