const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function () {
    test('Cart should default to an empty array.', function () {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });

    test('Total should default to 0.', function () {
        expect(cart.total).toEqual(0);
    });
});


describe('Cart Methods:', function () {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    });

    test('addToCart() should add a car object to the cart array.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    });

    test('addToCart() should increase the total property.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        expect(cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price);
    });

    test('removeFromCart() should remove a car object from the cart array.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);
    });

    test('removeFromCart() should decrease the total property.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[2].price);

        expect(cart.total).toEqual(cars[8].price);
    });

    test('checkout() should empty the cart array and set total to 0.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    });
});

// Create a test for the cart property:
// This test should expect cart to be an empty Array.
// Hint: test for type and length.
// Create a test for the total property:
// This test should expect the total property to be 0.
// Hint: test for value and type. "0" does not equal 0.
// Create a test for the addToCart method:
// This test should expect the cart length to increase by 1 on each call.
// This test should expect the car object to appear at the end of the cart array.
// This method should have a single argument: the car object that is being added.
// Create a test for the addToCart method:
// This test should expect the total property to increase by the car object's price on each call.
// Create a test for the removeFromCart method:
// This test should expect the cart length to decrease by 1 on each call.
// This test should expect the cart array to maintain the order of car objects in the cart array.
// For example remove( 3 ): [ 1, 2, 3, 4, 5 ] -> [ 1, 2, 4, 5 ]
// This method should have two arguments:
// The first argument should be the index of the car object in the cart array.
// The second argument should be the price property's value on the car object.
// Create a test for the removeFromCart method:
// This test should expect the total property to decrease by the car object's price on each call.
// Create a test for the checkout method:
// This test should expect the cart length to equal 0.
// This test should expect the total property to equal 0.