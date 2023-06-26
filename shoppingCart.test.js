const shoppingCart = require('./shoppingCart');


//expected pass
describe("addToCart(apple, 4) adds 4 apples to cart ", () => {
        test("addToCart(apple,4) should add 4 apples to cart", () => {
            shoppingCart.addToCart('apple', 4);
            expect(shoppingCart.cart).toEqual({apple:4});
        })
    })
  