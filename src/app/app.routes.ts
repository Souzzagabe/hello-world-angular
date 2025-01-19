import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/main-content/main-content/main-content.component').then(
        (c) => c.MainComponent
      ),
  },
  {
    path: 'back',
    loadComponent: () =>
      import('../app/layout/header/header/header.component').then(
        (a) => a.HeaderComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/layout/about/about.component').then(
        (b) => b.AboutComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/layout/contact/contact.component').then(
        (c) => c.ContactComponent
  )},
];
