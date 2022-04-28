import { Notify } from 'quasar';
import { getListOfProvidersQuery, getProviderDetailsQuery } from '../services';
import {
  useQuery,
  actionCallbackReturnTypes,
  actionCallbackParamsTypes,
} from '../utils/apollo';

export const getListOfProviders = ({
  limit = 10,
  offset = 0,
  query = '',
}: actionCallbackParamsTypes) => {
  return new Promise<actionCallbackReturnTypes>((resolve, reject) => {
    const name = `%${query}%`;

    const variables = {
      name,
      offset,
      limit,
    };

    useQuery(getListOfProvidersQuery, variables)
      .then(({ providers, providers_aggregate }) => {
        if (!providers || !providers[0]) {
          Notify.create({
            message: 'No se encontraron resultados para la busqueda actual',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve({
          items: providers,
          totalItems: providers_aggregate.aggregate.count,
        });
      })
      .catch((err) => {
        reject(null);
        return null;
      });
  });
};

export const getSpecificProvider = (id: string) => {
  return new Promise<string[]>((resolve, reject) => {
    useQuery(getProviderDetailsQuery, { id }).then(({ providers }) => {
      if (!providers || !providers[0]) {
        Notify.create({
          message: 'No se encontro al proveedor',
          type: 'negative',
        });

        reject(null);
        return null;
      }

      resolve(providers[0]);
    });
  });
};
