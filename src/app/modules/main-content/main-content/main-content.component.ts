import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainComponent {
  constructor(public router: Router) {
  }

  trocaPagina(pagina: string) {
  this.router.navigateByUrl(pagina)
  }

}
