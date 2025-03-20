import { NgModule } from '@angular/core';
import { PayComponent } from './pay.component';
import { CommonModule } from '@angular/common';
import { PayRoutingModule } from './pay-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PayComponent],
  imports: [CommonModule, PayRoutingModule, ComponentsModule, FormsModule],
})
export class PayModule {}
