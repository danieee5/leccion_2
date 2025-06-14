import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,  // Añade esto
  imports: [CommonModule, RouterModule],  // Añade RouterModule
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}