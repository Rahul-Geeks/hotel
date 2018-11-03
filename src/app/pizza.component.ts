import { Component } from '@angular/core';

@Component({
    selector:"app-pizza",
    template:`<h1>Welcome To {{pizzaShop}}</h1>
    <h4>Pizza Of Your Choice Will Be Prepared Here || One Of them is {{pizza[0]}}</h4>`,
    styles:["h1{background-color:orange}"]
})

export class PizzaComponent {
    pizza: string[] = ["Cheese Pizza", "Butter Pizza", "Simple Pizza"];
    pizzaShop: string = "Pizza Hut";
    makePizza(): string {
        return this.pizza[0];
    }
}

