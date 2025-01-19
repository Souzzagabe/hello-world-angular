import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './modules/hello-world/hello-world-one/hello-world.component';
import { HeaderComponent } from "./header/header/header.component";
import { FooterComponent } from './modules/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hello-world-app';
}
