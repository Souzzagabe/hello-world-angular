import { Routes } from '@angular/router';

export const routes: Routes = [
     {
        path: 'home',
      loadComponent: () =>
          import('./modules/hello-world/hello-world-one/hello-world.component').then(
            (c) => c.HelloWorldComponent
          ),
      },
      {
        path: 'back',
      loadComponent: () =>
          import('../app/header/header/header.component').then(
            (a) => a.HeaderComponent
          ),
      },
 ];
