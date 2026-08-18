const eventEmitter = require("events");
const emmiter = new eventEmitter();

emmiter.on("order-pizza", (size, topping) => {
  console.log(`Order received! ${size} pizza with ${topping}`);
});

emmiter.on("order-pizza", (size, topping) => {
  console.log(`Enjoy your ${size} pizza with ${topping}!`);
});

emmiter.emit("order-pizza", "large", "mushrooms");
emmiter.emit("order-burger", "large", "vegetables");
