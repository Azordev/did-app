import { ShoppingCart } from './../../../utils/shoppingCart';
import { Notify } from 'quasar';
import { Product } from 'src/utils/apollo.types';
import { PRODUCTS_BY_ID } from 'src/services';
import { useQuery, GetProductsByIdReturnTypes, logger } from 'src/utils';
import { ref } from 'vue';

/**
 * Return a list of Products with the updated information from the database
 * @param products
 * @returns Product
 */
export const getUpdatedProducts = async (products: ShoppingCart[]) => {
  const updatedProducts = ref<Product[]>();

  const productsWithId = products.filter((product) => product.productId);

  const productsIdList = productsWithId.map((product) => ({
    id: { _eq: product.productId },
  }));

  const variables = {
    filters: productsIdList,
  };

  await useQuery<GetProductsByIdReturnTypes>(PRODUCTS_BY_ID, variables)
    .then(({ products }) => {
      updatedProducts.value = products;
    })
    .catch((err) => {
      Notify.create({
        message: 'Parece que hubo un error, por favor vuelve a intentarlo',
        type: 'negative',
      });

      logger(err);
    });

  return { updatedProducts };
};
