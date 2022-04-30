import { Notify } from 'quasar';
import { getListOfProvidersQuery, getProviderDetailsQuery } from '../services';
import {
  useQuery,
  actionCallbackReturnTypes,
  actionCallbackParamsTypes,
  provider,
  getListOfProvidersReturnTypes,
  getProviderReturnType,
} from '../utils';
import { logger } from '../utils/logger';

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

    useQuery<getListOfProvidersReturnTypes>(getListOfProvidersQuery, variables)
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
        logger(err);
        reject(null);
      });
  });
};

export const getSpecificProvider = (id: string) => {
  return new Promise<provider>((resolve, reject) => {
    useQuery<getProviderReturnType>(getProviderDetailsQuery, { id })
      .then(({ providers }) => {
        if (!providers || !providers[0]) {
          Notify.create({
            message: 'No se encontro al proveedor',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(providers[0]);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
