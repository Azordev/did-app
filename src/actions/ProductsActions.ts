import { Notify } from 'quasar';
import { getListOfProductsQuery, getProviderProductsQuery } from '../services';
import {
  useQuery,
  actionCallbackReturnTypes,
  actionCallbackParamsTypes,
} from '../utils/apollo';

export const getListOfProducts = (variables: actionCallbackParamsTypes) => {
  return new Promise<actionCallbackReturnTypes>((resolve, reject) => {
    useQuery(getListOfProductsQuery, variables)
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
          totalItems: providers[0].products_aggregate.aggregate.count,
        });
      })
      .catch((err) => {
        reject(null);
        return null;
      });
  });
};

export const getProductsByProvider = (id: string) => {
  return new Promise<string[]>((resolve, reject) => {
    useQuery(getProviderProductsQuery, { id }).then(({ providers }) => {
      if (!providers || !providers[0]) {
        Notify.create({
          message: 'No se encontro al proveedor',
          type: 'negative',
        });

        reject(null);
        return null;
      }

      resolve(providers[0].products);
    });
  });
};
