import { Pizza } from "./pizza.js";
export class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }
  setSize(size) {
    this.pizza.size = size;
    return this;
  }
  addSauce(sauce) {
    this.pizza.sauce = sauce;
    return this;
  }
  addCheese(type) {
    this.pizza.cheese = type;
    return this;
  }
  addOil(type) {
    this.pizza.oil = type;
    return this;
  }
  bake() {
    this.pizza.baked = true;
    return this;
  }
  getPizza() {
    if (this.pizza.baked) return this.pizza;
    else console.log("pizza isnot baked pls bake pizza first");
  }
}
