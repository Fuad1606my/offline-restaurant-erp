// Week 1: Loops
const today'sOrders = [250, 180, 320, 150]
let totalSales = 0

for (const orderAmount of today'sOrders) {
  totalSales += orderAmount
}

console.log('Orders:', today'sOrders.length)
console.log('Total sales:', totalSales, 'BDT')
