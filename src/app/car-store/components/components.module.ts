import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarComponent } from './card-car/card-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardBodyKitComponent } from './card-body-kit/card-body-kit.component';
import { CardPartComponent } from './card-part/card-part.component';

import { NotifierComponent } from './notifier/notifier.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CardCarComponent,
    CardBodyKitComponent,
    CardPartComponent,
    FooterComponent,
    NavbarComponent,
    NotifierComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardCarComponent,
    CardBodyKitComponent,
    CardPartComponent,
    FooterComponent,
    NavbarComponent,
    NotifierComponent,
  ],
})
export class ComponentsModule {}
