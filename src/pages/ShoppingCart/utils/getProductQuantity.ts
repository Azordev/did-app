import { ShoppingCart } from 'src/utils';

export const getProductQuantity = (
  productId: string,
  shoppingCart: ShoppingCart[]
) => {
  return shoppingCart.find((product) => product.productId === productId)
    ?.quantity;
};
