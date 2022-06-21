<template>
  <shopping-cart-layout
    :provider="provider"
    :cartProducts="productsWithQuantity"
    :total="total"
    @on-quantity-change="
      (event) =>
        onQuantityChange({
          productId: event.productId,
          newQuantity: event.quantity,
        })
    "
  />
</template>

<script setup lang="ts">
import ShoppingCartLayout from './ShoppingCart.layout.vue';
import { handleShoppingCart, confirmBeforeExit } from 'src/utils';
import { getUpdatedProducts } from './utils/getUpdatedProducts';
import { getProviderById } from './utils/getProviderById';
import { calculateTotalPrice } from './utils/calculateTotalPrice';
import {
  concatProductsAndQuantity,
  ShoppingCartProduct,
} from './utils/concatProductsAndQuantity';
import { ref, computed } from 'vue';
import { Notify } from 'quasar';
import { useRoute } from 'vue-router';

const route = useRoute();

const productsWithQuantity = ref<ShoppingCartProduct[]>();

const { shoppingCart, editProductQuantity } = handleShoppingCart();

const { provider } = await getProviderById();
const { updatedProducts } = await getUpdatedProducts(shoppingCart.value);

if (updatedProducts.value?.length && shoppingCart.value?.length) {
  productsWithQuantity.value = concatProductsAndQuantity(
    updatedProducts.value,
    shoppingCart.value
  );
}

const onQuantityChange = ({
  productId,
  newQuantity,
}: {
  productId: string;
  newQuantity: number;
}) => {
  if (!productsWithQuantity.value?.length) {
    Notify.create({
      message: 'Ha ocurrido un error, por favor vuelve a intentar',
      type: 'negative',
    });

    return;
  }

  // Updating LocalStorage
  editProductQuantity(productId, newQuantity);

  // Updating local products data
  const productIndex = productsWithQuantity.value.findIndex(
    (cartProduct) => cartProduct.product.id === productId
  );

  if (productIndex >= 0) {
    const selectedProduct = productsWithQuantity.value[productIndex];
    productsWithQuantity.value[productIndex] = {
      ...selectedProduct,
      quantity: newQuantity,
    };
  }
};

const total = computed(() => calculateTotalPrice(productsWithQuantity.value));

confirmBeforeExit({
  currentRouteParent: route.matched[0].path,
  message:
    'Si sales de la página, se perderá lo que guardaste en el carrito de compras',
});
</script>
