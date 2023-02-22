import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ngOnInit() {
    console.log('number table composant header', this.getNumber());
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
}
