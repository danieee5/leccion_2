import { Component, OnInit } from '@angular/core';
import { RecetasLectorService } from '../../servicios/recetas-lector.service';
import { Foto } from '../../interfaz/foto';
import { CommonModule } from '@angular/common';
import { HttpClientModule
 } from '@angular/common/http';

@Component({
  selector: 'app-recetas',
  standalone: true,  
  imports: [CommonModule, HttpClientModule],  // Añade HttpClientModule
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent implements OnInit {
  recetas: Foto[] = [];

  constructor(private recetasLectorService: RecetasLectorService) { }

  ngOnInit(): void {
    this.recetasLectorService.getRecetas().subscribe(
      (data: Foto[]) => {
        this.recetas = data;
      },
      (error) => {
        console.error('Error al cargar las recetas:', error);
      }
    );
  }
}