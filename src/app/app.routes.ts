import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];