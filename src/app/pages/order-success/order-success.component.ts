import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent {
  // constructor(private router: Router) {}
  // ngOnInit() {

  // }
  getNumber(): string | null {
    const number = localStorage.getItem('number');
    return number;
  }
}
