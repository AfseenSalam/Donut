import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { CompleteComponent } from "./components/complete/complete.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutComponent, CompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Donut';
}
