import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    // console.log('number table composant header', this.getNumber());
  }
  getNumber(): number | string {
    const number = localStorage.getItem('number');

    if (number != null) {
      const numberTable = parseInt(number);
      if (numberTable <= 14 && numberTable >= 1) {
        return numberTable;
      } else {
        return '';
      }
    }
    return '';
  }
  updateNamberTable() {
    console.log(this.getNumber());
    this.router.navigate(['']);
  }
}
