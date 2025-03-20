import { Component, OnInit } from '@angular/core';
import { bodyKit } from '../../interfaces/body-Kit.interfaces';
import { BodyKitService } from '../../services/body-kit.service';

@Component({
  selector: 'app-body-kits',
  templateUrl: './body-kits.component.html',
  styleUrls: ['body-kits.component.scss'],
})
export class BodyKitsComponent implements OnInit {
  loading = true;

  constructor(private service: BodyKitService) {}

  bodyKits: bodyKit[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getBodyKits().subscribe((data) => {
      this.bodyKits = data;
      this.loading = false;
    });
  }
}
