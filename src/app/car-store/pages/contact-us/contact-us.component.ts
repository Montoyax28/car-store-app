import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  seleccionado: string = ''; // Inicializar vacío para evitar errores
  opciones: string[] = ['Email', 'Phone'];

  ngOnInit() {
    this.seleccionado = this.opciones[0]; // Asignar el primer valor
  }
}
