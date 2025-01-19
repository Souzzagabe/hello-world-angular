import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
    constructor(public router: Router) {
    }

    trocaPaginaDenovo(pagina: string) {
    this.router.navigateByUrl(pagina)
    }



}
