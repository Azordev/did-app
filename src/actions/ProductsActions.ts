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
  query = `%${query}%`;

  return new Promise<getListOfProductsReturnTypes>((res, rej) => {
    const variables = {
      name: query,
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

          rej(null);
          return null;
        }

        res({
          products: providers[0].products,
          totalProducts: providers[0].products_aggregate.aggregate.count,
        });
      })
      .catch((err) => {
        rej(null);
        return null;
      });
  });
};
