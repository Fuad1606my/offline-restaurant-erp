import type { MenuItem, OrderLine } from './types'
import { calculateTotal } from './bill'

const burger: MenuItem = { id: 1, name: 'Chicken Burger', price: 180, available: true }
const tea: MenuItem = { id: 2, name: 'Milk Tea', price: 40, available: true }

const order: OrderLine[] = [
  { item: burger, quantity: 2 },
  { item: tea, quantity: 1 },
]

console.log('Order total:', calculateTotal(order, 5), 'BDT')
