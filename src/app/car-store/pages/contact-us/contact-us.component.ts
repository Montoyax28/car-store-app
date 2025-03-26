import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  seleccionado: string = '';
  opciones: string[] = ['Email', 'Phone'];

  loading = true;

  ngOnInit() {
    this.loading = false;
    this.seleccionado = this.opciones[0];
  }
}
