import { Country } from "./country.js";

export class CountryProxy {
  constructor() {
    this.service = new Country();
    this.cache = null;
  }

  getCountries() {
    if (this.cache === null) {
      console.log("Fetching countries");
      this.cache = this.service.getCountries(); 
    } else {
      console.log("Cache hit Returning cached data");
    }
    return this.cache;
  }
}