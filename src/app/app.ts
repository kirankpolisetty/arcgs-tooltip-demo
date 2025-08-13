import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(' routing t MAP.....');
    this.router.navigate(['/map']); // Auto-redirect to map
  }
}
