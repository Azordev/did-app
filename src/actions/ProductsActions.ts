import { Notify } from 'quasar';
import { PRODUCTS_BY_PROVIDER, PRODUCT_BY_ID } from '../services';
import {
  useQuery,
  getProviderReturnType,
  getProductByIdReturnTypes,
  product,
} from '../utils';
import { logger } from '../utils/logger';

export const getProductsByProvider = (id: string, query = '') => {
  const parsedQuery = `%${query}%`;

  const variables = {
    id,
    query: parsedQuery,
  };

  return new Promise<product[]>((resolve, reject) => {
    useQuery<getProviderReturnType>(PRODUCTS_BY_PROVIDER, variables)
      .then(({ providers }) => {
        if (!providers || !providers.length) {
          Notify.create({
            message: 'No se encontro al proveedor',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(providers[0].products || []);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};

export const getProductById = (id: string) => {
  return new Promise<product>((resolve, reject) => {
    useQuery<getProductByIdReturnTypes>(PRODUCT_BY_ID, { id })
      .then(({ products }) => {
        if (!products || !products.length) {
          Notify.create({
            message: 'No se encontro el producto',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(products[0]);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
