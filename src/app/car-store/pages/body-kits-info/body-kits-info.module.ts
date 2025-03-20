import { NgModule } from '@angular/core';
import { BodyKitsInfoComponent } from './body-kits-info.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { BodyKitsInfoRoutingModule } from './body-kits-info-routing.module';

@NgModule({
  declarations: [BodyKitsInfoComponent],
  imports: [CommonModule, BodyKitsInfoRoutingModule, ComponentsModule],
})
export class BodyKitsInfoModule {}
