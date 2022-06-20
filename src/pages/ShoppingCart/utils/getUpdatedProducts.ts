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
export const getUpdatedProducts = (products: Product[]) => {
  const updatedProducts = ref<Product[]>();

  const productsWithId = products.filter((product) => product.id);

  const productsIdList = productsWithId.map((product) => ({
    id: { _eq: product.id },
  }));

  const variables = {
    list: productsIdList,
  };

  useQuery<GetProductsByIdReturnTypes>(PRODUCTS_BY_ID, variables)
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