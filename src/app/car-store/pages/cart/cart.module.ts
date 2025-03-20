import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, ComponentsModule, FormsModule],
})
export class CartModule {}
