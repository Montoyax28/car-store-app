import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-purchase-inspection',
  templateUrl: 'pre-purchase-inspection.component.html',
  styleUrls: ['pre-purchase-inspection.component.scss'],
})
export class PrePurchaseInspectionComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    this.loading = false;
  }
}
