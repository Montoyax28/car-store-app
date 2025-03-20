import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../services/parts.service';
import { Part } from '../../interfaces/parts.interfaces';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit {
  loading = true;

  constructor(private service: PartsService) {}

  parts: Part[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getParts().subscribe((data) => {
      this.parts = data;
      this.loading = false;
    });
  }
}
