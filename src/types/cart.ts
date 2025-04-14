export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }
  
  export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    itemCount: number;
  }