import { InventoryManager } from "./InventoryManager.js";
import { PaymentGateway } from "./PaymentGateway.js";
import { ShippingService } from "./ShippingService.js";

export class StoreFacade {
  constructor() {
    this.inventory = new InventoryManager();
    this.payment = new PaymentGateway();
    this.shipping = new ShippingService();
  }

  placeOrder(productId, amount) {
    console.log("Starting order process...");
    this.inventory.checkStock(productId);

    !this.payment.processPayment(amount);

    this.shipping.shipProduct(productId);
    console.log("Order placed successfully!");
  }
}
