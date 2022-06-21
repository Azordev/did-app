import { ShoppingCartProduct } from './concatProductsAndQuantity';

export const calculateTotalPrice = (
  cartProducts?: ShoppingCartProduct[]
): string => {
  const prices = cartProducts?.map(
    (cartProduct) => cartProduct.product.base_price_sol * cartProduct.quantity
  );

  const total = prices?.reduce((a, b) => a + b).toFixed(2);

  return total || '0';
};
