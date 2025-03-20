import { NgModule } from '@angular/core';
import { PartsComponent } from './parts.component';
import { CommonModule } from '@angular/common';
import { PartsRoutingModule } from './parts-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [PartsComponent],
  imports: [CommonModule, PartsRoutingModule, ComponentsModule],
})
export class PartsModule {}
