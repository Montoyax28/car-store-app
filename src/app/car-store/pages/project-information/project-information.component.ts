import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss'],
})
export class ProjectInformationComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    this.loading = false;
  }
}
