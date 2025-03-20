import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './create-account.component';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [CommonModule, CreateAccountRoutingModule, ComponentsModule],
})
export class CreateAccountModule {}
