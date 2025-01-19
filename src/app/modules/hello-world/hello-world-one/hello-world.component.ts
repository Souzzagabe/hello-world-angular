import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hello-world',
  imports: [ButtonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  constructor(public router: Router) {
  }

  trocaPagina(pagina: string) {
  this.router.navigateByUrl(pagina)
  }

}
