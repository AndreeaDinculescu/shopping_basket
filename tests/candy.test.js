import {it,describe,expect} from "@jest/globals"
import {Candy} from "../src/candy.js";
describe("Candy Class",()=>{

  it("Should return the name and the price",() => {
const candy = new Candy("Mars",4.99)
      expect(candy.getName()).toEqual("Mars")
      expect(candy.getPrice()).toEqual(4.99)
    })
 })

