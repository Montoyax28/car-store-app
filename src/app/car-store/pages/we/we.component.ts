import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we',
  templateUrl: 'we.component.html',
  styleUrls: ['we.component.scss'],
})
export class WeComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    this.loading = false;
  }
}
