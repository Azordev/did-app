import { LocalStorage } from 'quasar';
import { Product } from 'src/utils';
import { ref } from 'vue';

enum SHOPPING_CART {
  KEY = 'shoppingCart',
}

export interface ShoppingCart {
  productId: string;
  quantity: number;
}

export const checkIsProductInCart = (
  id: string,
  shoppingCart: ShoppingCart[] | undefined
) => {
  if (!shoppingCart) return false;

  return shoppingCart.findIndex((product) => product.productId === id) >= 0;
};

export const handleShoppingCart = () => {
  const shoppingCart = ref<ShoppingCart[]>([]);

  const storagedProducts = LocalStorage.getItem(SHOPPING_CART.KEY);

  const parsedProducts = storagedProducts
    ? JSON.parse(storagedProducts as string)
    : [];

  shoppingCart.value = parsedProducts;

  const addNewProduct = (product: Product) => {
    const products = JSON.parse(JSON.stringify(shoppingCart.value));

    products.push({ productId: product.id, quantity: 1 });

    LocalStorage.set(SHOPPING_CART.KEY, JSON.stringify(products));

    shoppingCart.value = products;
  };

  const removeProduct = (id: string) => {
    const products: ShoppingCart[] = JSON.parse(
      JSON.stringify(shoppingCart.value)
    );

    const productToRemove = products.findIndex(
      (product) => product.productId === id
    );

    if (productToRemove >= 0) {
      products.splice(productToRemove, 1);

      LocalStorage.set(SHOPPING_CART.KEY, JSON.stringify(products));

      shoppingCart.value = products;
    }
  };

  /**
   * This function adds a new Product (update the ShoppingCart var with a new product and update the LocalStorage) in case it still doesn't exist in the ShoppingCart.
   * If the product was already on the shopping cart var, it will be removed from the shopping cart var and will be updated the LocalStorage with the changes.
   * @param product
   */
  const toggleProduct = (product?: Product) => {
    if (!product) {
      return;
    }

    if (checkIsProductInCart(product.id, shoppingCart.value)) {
      removeProduct(product.id);
      return;
    }

    addNewProduct(product);
  };

  const editProductQuantity = (productId: string, newQuantity: number) => {
    const productIndex = shoppingCart.value.findIndex(
      (product) => productId === product.productId
    );

    if (productIndex >= 0) {
      const productToEdit = shoppingCart.value[productIndex];

      shoppingCart.value[productIndex] = {
        ...productToEdit,
        quantity: newQuantity,
      };

      LocalStorage.set(SHOPPING_CART.KEY, JSON.stringify(shoppingCart.value));
    }
  };

  const clearShoppingCart = () => {
    LocalStorage.remove(SHOPPING_CART.KEY);
  };

  return {
    shoppingCart,
    addNewProduct,
    removeProduct,
    toggleProduct,
    clearShoppingCart,
    editProductQuantity,
  };
};
