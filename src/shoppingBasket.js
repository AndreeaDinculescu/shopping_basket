export class ShoppingBasket {
    constructor() {
        this.candies = []
        this.discount = 0
    }

    addItem = (candy) => this.candies.push(candy)



//    getTotalPrice = () => this.candies
//        .reduce((total, item) => {
//            let price = item.getPrice()
//            total += price
//            return total
//        },0)
    applyDiscount = (discount) => {
        discount = this.discount;
    }
    getTotalPrice() {
        let totalPrice = 0;
        this.candies.forEach((candy) => {
            totalPrice += candy.getPrice();
        });

        return totalPrice - this.discount;
    }

}