import { NgModule } from '@angular/core';
import { PrePurchaseInspectionComponent } from './pre-purchase-inspection.component';
import { CommonModule } from '@angular/common';
import { PrePurchaseInspectionRoutingModule } from './pre-purchase-inspection-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [PrePurchaseInspectionComponent],
  imports: [CommonModule, PrePurchaseInspectionRoutingModule, ComponentsModule],
})
export class PrePurchaseInspectionModule {}
