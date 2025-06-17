import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecetasLectorService } from '../../servicios/recetas-lector.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas: Foto[] = [];

  constructor(private recetasLectorService: RecetasLectorService) {}

  ngOnInit(): void {
    this.recetasLectorService.getRecetas().subscribe({
      next: (data) => this.recetas = data,
      error: (e) => console.error('Error al cargar las recetas:', e)
    });
  }
}