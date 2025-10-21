import { PizzaBuilder } from "./pizzabuilder.js";

let builder = new PizzaBuilder();
builder.setSize('xl').addSauce('tomato').addCheese('modzarila').addOil('oilve');
builder.bake()
let mypizza = builder.getPizza();
console.log(mypizza.getRecipe());