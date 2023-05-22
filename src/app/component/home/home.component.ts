import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food/food-list.service';
import { Foods } from 'src/app/shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foodList:Foods[]=[];

  //injected food service with home page
  constructor(private foodListService:FoodListService){}

  ngOnInit(): void {
    this.foodList = this.foodListService.getAllFoodList();
  }

}
