import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { PartsInfoComponent } from './parts-info.component';
import { PartsInfoRoutingModule } from './parts-info-routing.module';

@NgModule({
  declarations: [PartsInfoComponent],
  imports: [CommonModule, PartsInfoRoutingModule, ComponentsModule],
})
export class PartsInfoModule {}
