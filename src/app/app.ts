import { Component, signal } from '@angular/core';
import { ArcgisMap } from './arcgis-map/arcgis-map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/map']); // Auto-redirect to map
  }
}
