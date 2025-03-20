import { NgModule } from '@angular/core';
import { DragRacingComponent } from './drag-racing.component';
import { CommonModule } from '@angular/common';
import { DragRacingRoutingModule } from './drag-racing-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [DragRacingComponent],
  imports: [CommonModule, DragRacingRoutingModule, ComponentsModule],
})
export class DragRacingModule {}
