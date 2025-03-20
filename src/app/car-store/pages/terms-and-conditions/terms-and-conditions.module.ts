import { NgModule } from '@angular/core';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [CommonModule, TermsAndConditionsRoutingModule, ComponentsModule],
})
export class TermsAndConditionsModule {}
