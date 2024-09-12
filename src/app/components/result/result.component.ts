import { Component, Input } from '@angular/core';
import { Result } from '../../models/donut-model';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() DisplayDonut: Result = {} as Result;
}
