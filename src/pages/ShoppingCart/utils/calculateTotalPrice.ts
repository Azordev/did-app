import { Notify } from 'quasar';
import { ShoppingCartProduct } from './concatProductsAndQuantity';

export const calculateTotalPrice = (
  cartProducts?: ShoppingCartProduct[]
): string => {
  const prices = cartProducts?.map((cartProduct) => {
    const basePrice = Number(cartProduct.product.base_price_sol);
    const quantity = Number(cartProduct.quantity);

    if (isNaN(basePrice) || isNaN(quantity)) {
      Notify.create({
        message: `Ocurrio un error calculando el precio de ${cartProduct.product.name}, por lo que no se ha incluido en la cuenta, por favor intenta removerlo de tu carrito e incluyendolo nuevamente.`,
        color: 'negative',
      });
      return 0;
    }

    return cartProduct.product.base_price_sol * cartProduct.quantity;
  });

  const total = prices?.reduce((current, sum) => current + sum).toFixed(2);

  return total || '0';
};
