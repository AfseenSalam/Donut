import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { DonutModel } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {

  donutResult:DonutModel = {} as DonutModel;
showForm:boolean = false;
  constructor(private service:DonutService){}
ngOnInit(){
  this.callDonutApi();
}
callDonutApi(){
  this.service.getDonut().subscribe((response:DonutModel)=>{
    console.log(response);
    this.donutResult =response;
  })
}
toggle():void{
  this.showForm = !this.showForm;
}
}
