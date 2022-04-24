import { Notify } from 'quasar';
import { getListOfProductsQuery } from '../services';
import { useQuery } from '../utils/apollo';

interface getListOfProductsReturnTypes {
  products: object[];
  totalProducts: number;
}

interface getListOfProductsTypes {
  limit: number;
  offset: number;
  query: string;
  order_by: getListOfProductsOrderByTypes;
}

interface getListOfProductsOrderByTypes {
  order_by_price?: any;
  order_by_name?: any;
}

export const getListOfProducts = ({
  limit = 10,
  offset = 0,
  query = '',
  order_by = {
    order_by_price: null,
    order_by_name: null,
  },
}: getListOfProductsTypes) => {
  const name = `%${query}%`;

  return new Promise<getListOfProductsReturnTypes>((resolve, reject) => {
    const variables = {
      name,
      offset,
      limit,
      ...order_by,
    };

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
          products: providers[0].products,
          totalProducts: providers[0].products_aggregate.aggregate.count,
        });
      })
      .catch((err) => {
        reject(null);
        return null;
      });
  });
};
