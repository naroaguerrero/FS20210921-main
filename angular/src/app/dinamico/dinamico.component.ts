import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({

  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']

})

export class DinamicoComponent implements OnInit {

  menu = [
    { texto: 'Contactos', icono: 'fas fa-user-tie', componente: ContactosComponent },
    { texto: 'Formulario Cliente', icono: 'fas fa-user-tie', componente: ClienteFormularioComponent },
    { texto: 'Formulario', icono: 'fas fa-user-tie', componente: FormularioComponent },
    { texto: 'Calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent },
    { texto: 'Inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'Demos', icono: 'fas fa-chalkboard-teacher', componente: DemosComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
