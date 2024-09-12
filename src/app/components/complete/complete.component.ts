import { Component } from '@angular/core';
import { HallModel } from '../../models/hall-model';
import { HallService } from '../../services/hall.service';
import { HallCompleteComponent } from '../hall-complete/hall-complete.component';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [HallCompleteComponent],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.css'
})
export class CompleteComponent {
  hallResult:HallModel ={} as HallModel;
  showForm:boolean =true;
  constructor(private hallService: HallService){

  }
ngOnInit(){
  this.callHallApi();
}
callHallApi(){
  this.hallService.getHall().subscribe((response:HallModel)=>{
    console.log(response);
    this.hallResult = response;
  })
}
toggle():void{
  this.showForm = !this.showForm;
}
}
