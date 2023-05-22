import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor() { }

  getAllFoodList():Foods[]{
    return[
      {
        id: 1,
        name:'Chicken Burger',
        origins:['Italy','Spanish'],
        tags: ['FastFood', 'Burger', 'Brunch'],
        price: 10.55,
        favorite: false,
        rating: 4,
        imageUrl: '/assets/chicken_burger.png',
      },
      {
        id: 2,
        name:'Crispy Samosa',
        origins:['Indian'],
        tags: ['FastFood', 'Snack', 'Brunch'],
        price: 12.45,
        favorite: false,
        rating: 4.2,
        imageUrl: '/assets/crispy_samosa.jpeg',
      },
      {
        id: 3,
        name:'French Fries',
        origins:['Spanish','England'],
        tags: ['FastFood', 'Snack', 'Brunch','Dinner'],
        price: 5.45,
        favorite: false,
        rating: 4.5,
        imageUrl: '/assets/french_fries.webp',
      },
      {
        id: 4,
        name:'Peri Peri Fries',
        origins:['Indian'],
        tags: ['FastFood', 'Snack', 'Brunch'],
        price: 8.45,
        favorite: false,
        rating: 5.0,
        imageUrl:  '/assets/peri_peri_fries.jpeg',
      },
      {
        id: 5,
        name:'Egg Sandwitch',
        origins:['Indian','Italian'],
        tags: ['FastFood', 'Sandwitch', 'Breakfast'],
        price: 10.45,
        favorite: false,
        rating: 5.0,
        imageUrl: '/assets/egg_sandwitch.jpeg',
      },
      {
        id: 6,
        name:'Ham Sandwitch',
        origins:['Spanish','Italian'],
        tags: ['FastFood', 'Sandwitch', 'Breakfast'],
        price: 11.45,
        favorite: false,
        rating: 5.0,
        imageUrl: '/assets/ham_sandwitch.png',
      },
      {
        id: 7,
        name:'Barbecue Chicken Pizza',
        origins:['Italian',"Irani"],
        tags: ['FastFood', 'Pizza', 'Brunch', 'Dinner'],
        price: 12.45,
        favorite: false,
        rating: 4.5,
        imageUrl: '/assets/barbecue_chiecken_pizza.jpeg',
      },
      {
        id: 8,
        name:'Veggie Pizza',
        origins:['India'],
        tags: ['FastFood', 'Pizza', 'Brunch', 'Dinner'],
        price: 12.45,
        favorite: false,
        rating: 5.0,
        imageUrl: '/assets/veggie_pizza.webp'
      }
          ];
  }
}
