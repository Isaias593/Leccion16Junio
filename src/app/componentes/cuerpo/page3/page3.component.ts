import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  nombre = 'Nain Isaias';
  apellido = 'Coronel Zapa';
  correo = 'nain.coronelz@ug.edu.ec';
  redirigirATwitter() {
    window.location.href = 'https://twitter.com';
  }
  redirigirAfcr() {
    window.location.href = 'https://facebook.com';
  }
  }

