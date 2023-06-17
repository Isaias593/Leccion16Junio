import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  email: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos al servidor y validarlos
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
}
}