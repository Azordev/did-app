import { Notify } from 'quasar';
import { PROVIDERS, PROVIDER_BY_ID } from '../services';
import {
  useQuery,
  actionCallbackReturnTypes,
  actionCallbackParamsTypes,
  Provider,
  getListOfProvidersReturnTypes,
  getProviderReturnType,
} from '../utils';
import { logger } from '../utils/logger';

export const getListOfProviders = (variables: actionCallbackParamsTypes) => {
  return new Promise<actionCallbackReturnTypes<Provider>>((resolve, reject) => {
    useQuery<getListOfProvidersReturnTypes>(PROVIDERS, variables)
      .then(({ providers, providers_aggregate }) => {
        if (!providers || !providers.length) {
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
  return new Promise<Provider>((resolve, reject) => {
    useQuery<getProviderReturnType>(PROVIDER_BY_ID, { id })
      .then(({ providers }) => {
        if (!providers || !providers.length) {
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

export interface GetListOfProvidersForHomeProps {
  limit: number;
}
