import { Notify } from 'quasar';
import { PROVIDERS, PROVIDER_BY_ID } from '../services';
import {
  useQuery,
  Provider,
  getListOfProvidersReturnTypes,
  getProviderReturnType,
} from '../utils';
import { logger } from '../utils/logger';

type getListOfProvidersProps = {
  query?: string;
  limit?: number;
};

export const getListOfProviders = (variables: getListOfProvidersProps) => {
  return new Promise<Provider[]>((resolve, reject) => {
    useQuery<getListOfProvidersReturnTypes>(PROVIDERS, variables)
      .then(({ providers }) => {
        if (!providers || !providers.length) {
          Notify.create({
            message: 'No se encontraron resultados para la busqueda actual',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(providers);
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
