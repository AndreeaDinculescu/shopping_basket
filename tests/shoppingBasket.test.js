import {describe, expect, it} from "@jest/globals";
import {ShoppingBasket} from "../src/shoppingBasket.js";
//import {Candy} from "../src/candy.js";
 describe("Shopping Basket",()=>{
  it("should add a Candy Item",() => {
      const basket = new ShoppingBasket()
      const candyDouble = {
          name:"Skittle",
          price:3.99,
          getName:() => "Skittle",
          getPrice:() => 3.99
      };
      basket.addItem(candyDouble)
      expect(basket.getTotalPrice()).toEqual(3.99)
    })
 })