import { LocalStorage } from 'quasar';
import { Product } from 'src/utils';
import { ref } from 'vue';

enum SHOPPING_CART {
  KEY = 'shoppingCart',
}

export const handleShoppingCart = () => {
  const shoppingCart = ref<Product[]>([]);

  const storagedProducts = LocalStorage.getItem(SHOPPING_CART.KEY);

  const parsedProducts = storagedProducts
    ? JSON.parse(storagedProducts as string)
    : [];

  shoppingCart.value = parsedProducts;

  const addNewProduct = (product: Product) => {
    const products = JSON.parse(JSON.stringify(shoppingCart.value));
    products.push(product);

    LocalStorage.set(SHOPPING_CART.KEY, JSON.stringify(products));

    shoppingCart.value = products;
  };

  const removeProduct = (id: string) => {
    const products: Product[] = JSON.parse(JSON.stringify(shoppingCart.value));

    const productToRemove = products.findIndex((product) => product.id === id);

    if (productToRemove >= 0) {
      products.splice(productToRemove, 1);

      LocalStorage.set(SHOPPING_CART.KEY, JSON.stringify(products));

      shoppingCart.value = products;
    }
  };

  const clearShoppingCart = () => {
    LocalStorage.remove(SHOPPING_CART.KEY);
  };

  return {
    shoppingCart,
    addNewProduct,
    removeProduct,
    clearShoppingCart,
  };
};

export const isProductInCart = (
  id: string,
  shoppingCart: Product[] | undefined
) => {
  if (!shoppingCart) return false;

  return shoppingCart.findIndex((product) => product.id === id) >= 0;
};
