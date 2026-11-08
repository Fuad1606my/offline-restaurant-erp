// Week 2: TypeScript types and interfaces
export type PaymentMethod = 'cash' | 'card' | 'mobile_banking'

export interface MenuItem {
  id: number
  name: string
  price: number
  available: boolean
}

export interface OrderLine {
  item: MenuItem
  quantity: number
}
