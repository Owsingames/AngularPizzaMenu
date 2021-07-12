import { Component } from '@angular/core';
import {Menu} from "./Menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaMenu';

  //name, catagory, price, topping
  menuItems: Menu[] = [
    {name: "Chicken Tenders", catagory:"Dinner", price:11.99, topping: ["Garlic Parm", "Honey BBQ", "Thai Curry"]},
    {name: "Pepperoni Pizza", catagory:"Dinner", price:11.99, topping:["Zesty tomato sauce", "Mozzeralla Cheese", "Pepperoni"]},
    {name: "Boneless Wings", catagory:"Side", price:8.99, topping:["Garlic Parm", "Honey BBQ", "Thai Curry"]},
    {name: "Bread Stix", catagory:"Side", price:4.00, topping:["Garlic butter", "Parmesan Cheese", "Marinara sauce"]},
    {name: "Ceasar Salad", catagory:"Side", price:4.99, topping:["Fresh Romaine", "House dressing", "Bacon bits", "Tomatos", "onions"]},
    {name: "Cini Stix", catagory:"Desert", price:4.99, topping:["Cinimon sugar", "Enchanced butter", "Icing"]}
  ];

}
