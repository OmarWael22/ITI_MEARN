export class Pizza {
    
  getRecipe() {
    return `
            Size: ${this.size}
            Sauce: ${this.sauce}
            Cheese: ${this.cheese}
            Oil: ${this.oil}
            Baked: ${this.baked ? "yes" : "no"}`;
  }
}
