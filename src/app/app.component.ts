import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from "./componentes/header/header.component";
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
          HeaderComponent, 
          HomeComponent,
          FooterComponent,
          RecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'leccion_2';
}
