import { NgModule } from '@angular/core';
import { DragRacingInfoComponent } from './drag-racing-info.component';
import { CommonModule } from '@angular/common';
import { DragRacingInfoRoutingModule } from './drag-racing-info-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [DragRacingInfoComponent],
  imports: [CommonModule, DragRacingInfoRoutingModule, ComponentsModule],
})
export class DragRacingInfoModule {}
