<template>
  <shopping-cart-layout
    :provider="provider"
    :cartProducts="productsWithQuantity"
    :total="total"
    :whatsapp-link="whatsappLink"
    :emailLink="emailLink"
    @on-quantity-change="
      (event) =>
        onQuantityChange({
          productId: event.productId,
          newQuantity: event.quantity,
        })
    "
    @back-to-provider="
      $router.push({
        name: 'providerDetail',
        params: { provider: route.params.provider },
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
  getInvoiceText,
  getWebWhatsappLink,
  getEmailLink,
} from './utils/getCustomerServiceLink';
import {
  concatProductsAndQuantity,
  ShoppingCartProduct,
} from './utils/concatProductsAndQuantity';
import { ref, computed, ComputedRef } from 'vue';
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

const total: ComputedRef<string> = computed(() =>
  calculateTotalPrice(productsWithQuantity.value)
);

const invoiceText: ComputedRef<string | undefined> = computed(() => {
  if (!productsWithQuantity.value) {
    return;
  }

  return getInvoiceText(productsWithQuantity.value);
});

const whatsappLink: ComputedRef<string | undefined> = computed(() => {
  const phone = provider.value?.b2b_phone;

  if (!invoiceText.value || !phone) {
    return;
  }

  return getWebWhatsappLink({
    message: invoiceText.value,
    phone: phone,
  });
});

const emailLink: ComputedRef<string | undefined> = computed(() => {
  const email = provider.value?.b2b_email;

  if (!invoiceText.value || !email) {
    return;
  }

  return getEmailLink({
    message: invoiceText.value,
    email: email,
  });
});

confirmBeforeExit({
  currentRouteParent: route.matched[0].path,
  message:
    'Si sales de la página, se perderá lo que guardaste en el carrito de compras',
});
</script>
