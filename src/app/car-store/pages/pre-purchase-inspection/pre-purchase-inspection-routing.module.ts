import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrePurchaseInspectionComponent } from './pre-purchase-inspection.component';

const routes: Routes = [
  {
    path: '',
    component: PrePurchaseInspectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrePurchaseInspectionRoutingModule {}
