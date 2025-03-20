import { NgModule } from '@angular/core';
import { WeComponent } from './we.component';
import { CommonModule } from '@angular/common';
import { WeRoutingModule } from './we-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [WeComponent],
  imports: [CommonModule, WeRoutingModule, ComponentsModule],
})
export class WeModule {}
