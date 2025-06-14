import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from "./componentes/header/header.component";
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';

import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
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
