import { useCart } from '../context/CartContext';

export const useCartActions = () => {
  const cart = useCart();
  
  return {
    ...cart,
    // Add any additional cart-related functions here
  };
};