import { NgModule } from '@angular/core';
import { TuningCarsComponent } from './tuning-cars.component';
import { CommonModule } from '@angular/common';
import { TuningCarsRoutingModule } from './tuning-cars-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [TuningCarsComponent],
  imports: [CommonModule, TuningCarsRoutingModule, ComponentsModule],
})
export class TuningCarsModule {}
