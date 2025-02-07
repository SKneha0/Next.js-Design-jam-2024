export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    weight?: string
  }
  
  export interface CartState {
    items: CartItem[]
    subtotal: number
    shipping: number
    discount: number
    tax: number
    total: number
    couponCode?: string
  }
  