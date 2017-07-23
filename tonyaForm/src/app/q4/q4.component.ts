import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {

  constructor(private sumPointsService: SumPointsService) {}

  ngOnInit() {}

  chooseYes(){
   this.sumPointsService.onYes();
  }
  chooseNo(){
	 this.sumPointsService.onNo();
  }

}