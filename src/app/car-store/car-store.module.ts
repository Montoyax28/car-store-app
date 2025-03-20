import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarStoreRoutingModule } from './car-store-routing.module';
import { CarStoreComponent } from './car-store.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [CarStoreComponent],
  imports: [
    CommonModule,
    CarStoreRoutingModule,
    ComponentsModule,
    RouterModule,
  ],
})
export class CarStoreModule {}
