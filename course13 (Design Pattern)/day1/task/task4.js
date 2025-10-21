class Pizza {
    getRecipe() {
        return `
            Size: ${this.size}
            Sauce: ${this.sauce}
            Cheese: ${this.cheese}
            Oil: ${this.oil}
            Baked: ${this.baked ? 'yes' : 'no'}`;
}

}

class PizzaBuilder {
    constructor(){
        this.pizza = new Pizza();
    }
    setSize(size){
        this.pizza.size = size;
        return this;
    }
    addSauce(sauce){
        this.pizza.sauce = sauce;
        return this;
    }
    addCheese(type){
        this.pizza.cheese = type;
        return this;
    }
    addOil(type){
        this.pizza.oil = type;
        return this;
    }
    bake(){
        this.pizza.baked = true;
        return this;
    }
    getPizza(){
        if (this.pizza.baked)
            return this.pizza
        else
            console.log('pizza isnot baked pls bake pizza first');

    }
}
let builder = new PizzaBuilder();
builder.setSize('xl').addSauce('tomato').addCheese('modzarila').addOil('oilve');
builder.bake()
let mypizza = builder.getPizza();
console.log(mypizza.getRecipe());