import { Component, OnInit } from '@angular/core';

export interface Cliente {
  customer_id: number | null;

}

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
