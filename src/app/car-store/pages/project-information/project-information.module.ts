import { NgModule } from '@angular/core';
import { ProjectInformationComponent } from './project-information.component';
import { CommonModule } from '@angular/common';
import { ProjectInformationRoutingModule } from './project-information-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ProjectInformationComponent],
  imports: [CommonModule, ProjectInformationRoutingModule, ComponentsModule],
})
export class ProjectInformationModule {}
