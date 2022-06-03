import { Notify } from 'quasar';
import { getListOfProductsQuery, getProviderProductsQuery } from '../services';
import {
  useQuery,
  actionCallbackReturnTypes,
  actionCallbackParamsTypes,
  getProviderReturnType,
  product,
} from '../utils';
import { logger } from '../utils/logger';

export const getListOfProducts = (variables: actionCallbackParamsTypes) => {
  return new Promise<actionCallbackReturnTypes>((resolve, reject) => {
    useQuery<getProviderReturnType>(getListOfProductsQuery, variables)
      .then(({ providers }) => {
        if (!providers || !providers[0] || !providers[0].products) {
          Notify.create({
            message: 'No se encontraron resultados para la busqueda actual',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve({
          items: providers[0].products,
          totalItems: providers[0]?.products_aggregate?.aggregate.count || 0,
        });
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};

export const getProductsByProvider = (id: string, query = '') => {
  const parsedQuery = `%${query}%`;

  const variables = {
    id,
    query: parsedQuery,
  };

  return new Promise<product[]>((resolve, reject) => {
    useQuery<getProviderReturnType>(getProviderProductsQuery, variables)
      .then(({ providers }) => {
        if (!providers || !providers[0]) {
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
