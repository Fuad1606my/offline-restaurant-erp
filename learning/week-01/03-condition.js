
 // Week 1: Conditions

// Part 1: Stock Management

const stockQuantity = 10;
const reorderLevel = 5;

if (stockQuantity <= reorderLevel) {
  console.log('Low stock: please reorder.');
} else {
  console.log('Stock level is okay.');
}


// Part 2: Restaurant Opening Status

const isRestaurantOpen = true;

if (isRestaurantOpen) {
  console.log('Restaurant is accepting orders.');
} else {
  console.log('Restaurant is currently closed.');
}


// Part 3: Advanced Stock Alert

const currentStock = 3;

if (currentStock === 0) {
  console.log('Out of stock.');
} else if (currentStock <= 5) {
  console.log('Low stock.');
} else if (currentStock <= 20) {
  console.log('Stock available.');
} else {
  console.log('Stock sufficient.');
}
