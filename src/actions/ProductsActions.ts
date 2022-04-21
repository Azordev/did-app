import { Notify } from 'quasar';
import { getListOfProductsQuery } from '../services';
import { useQuery } from '../utils/apollo';

interface getListOfProductsTypes {
  products: object[];
  totalProducts: number;
}

export const getListOfProducts = ({ limit = 10, offset = 0, query = '' }) => {
  query = `%${query}%`;

  return new Promise<getListOfProductsTypes>((res, rej) => {
    const variables = {
      name: query,
      offset,
      limit,
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
