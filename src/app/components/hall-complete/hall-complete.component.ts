import { Component, Input } from '@angular/core';
import { Complete } from '../../models/hall-model';

@Component({
  selector: 'app-hall-complete',
  standalone: true,
  imports: [],
  templateUrl: './hall-complete.component.html',
  styleUrl: './hall-complete.component.css'
})
export class HallCompleteComponent {
  @Input() DisplayHall: Complete = {} as Complete;
}
