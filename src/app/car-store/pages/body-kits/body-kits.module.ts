import { NgModule } from '@angular/core';
import { BodyKitsComponent } from './body-kits.component';
import { CommonModule } from '@angular/common';
import { BodyKitsRoutingModule } from './body-kits-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [BodyKitsComponent],
  imports: [CommonModule, BodyKitsRoutingModule, ComponentsModule],
})
export class BodyKitsModule {}
