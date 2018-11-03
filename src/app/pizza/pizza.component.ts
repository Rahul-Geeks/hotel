import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.services';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  burger = {
    name: [],
    provider: "",
    flavours: [],
    chef: ""
  };
  pizzaName:string;
  flavour:string;
  // pizzaName = this.pizzaName.pizza.name;
  constructor(public pizza: PizzaService) {
    this.pizzaName = pizza.name;
    this.flavour = pizza.flavour;
  }
  ngOnInit() {
  }
  showPizza() {
    console.log(this.pizzaName);
    console.log(this.flavour);
  }
}
