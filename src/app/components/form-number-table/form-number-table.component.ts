import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-number-table',
  templateUrl: './form-number-table.component.html',
  styleUrls: ['./form-number-table.component.css'],
})
export class FormNumberTableComponent {
  formNumberTable!: FormGroup;
  error: string = '';
  // @Output() newItemEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.formNumberTable = this.formBuilder.group({
      numberTable: [null],
    });
    this.stockNumber();
  }

  getInput() {
    return this.formNumberTable.value.numberTable;
  }

  validateNumber() {
    const number = this.getInput();

    console.log(typeof this.getInput());
    //console.log(number);
    if (number >= 1 && number <= 14) {
      this.router.navigate(['all-products']);
    } else {
      this.error = 'Numéro de table incorrecte.';
    }
    this.stockNumber();
  }
  stockNumber() {
    console.log('local storage', this.getInput());
    localStorage.setItem('number', this.getInput());
  }
}
