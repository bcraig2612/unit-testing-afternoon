// In this step, you'll create the solutions to each method and property in cart.js. You can use the Unit Tests to determine when you have the correct answer. There won't be any detailed instructions for this step. Use the Unit Tests as a reference for when you have the correct answer. Take a look at the solution code only as a last resort.

const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function (car) {
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart: function (index, price) {
    this.cart.splice(index, 1);
    this.total -= price;
  },

  checkout: function () {
    this.cart = [];
    this.total = 0;
  }
};