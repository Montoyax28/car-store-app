import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInfoComponent } from './car-info.component';
import { CarInfoRoutingModule } from './car-info-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [CarInfoComponent],
  imports: [CommonModule, CarInfoRoutingModule, ComponentsModule],
})
export class CarInfoModule {}
