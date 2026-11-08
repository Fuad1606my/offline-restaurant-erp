// Week 2: Typed reusable billing functions
import type { OrderLine } from './types'

export function calculateSubtotal(lines: OrderLine[]): number {
  return lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0)
}

export function calculateDiscount(subtotal: number, discountPercent: number): number {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100.')
  }
  return subtotal * (discountPercent / 100)
}

export function calculateTotal(lines: OrderLine[], discountPercent = 0): number {
  const subtotal = calculateSubtotal(lines)
  return subtotal - calculateDiscount(subtotal, discountPercent)
}
