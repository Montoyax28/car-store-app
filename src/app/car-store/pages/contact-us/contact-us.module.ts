import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class ContactUsModule {}
