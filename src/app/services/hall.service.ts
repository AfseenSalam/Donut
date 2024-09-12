import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HallModel } from '../models/hall-model';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private http:HttpClient) { }
  getHall():Observable<HallModel>{
    return this.http.get<HallModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
