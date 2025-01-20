import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importação necessária para usar ngClass

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule], // ✅ Adicionando CommonModule
})
export class HeaderComponent {
  menuAberto = false;

  constructor(public router: Router) {}

  trocaPaginaDenovo(pagina: string) {
    this.router.navigateByUrl(pagina);
    this.menuAberto = false;
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
