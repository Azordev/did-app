import { Product, ShoppingCart } from 'src/utils';
import { getProductQuantity } from './getProductQuantity';

export interface ShoppingCartProduct {
  product: Product;
  quantity: number;
}

export const concatProductsAndQuantity = (
  products: Product[],
  cartProducts: ShoppingCart[]
): ShoppingCartProduct[] => {
  return products.map((product) => ({
    quantity: getProductQuantity(product.id, cartProducts) || 1,
    product,
  }));
};
