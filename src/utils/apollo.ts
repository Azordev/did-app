// Adding provideApolloClient to can use useQuery out of .vue file
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

import {
  provideApolloClient,
  useQuery as _useQuery,
} from '@vue/apollo-composable';

import { DocumentNode } from 'graphql';

import { Notify } from 'quasar';

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_URL,
});

// Cache implementation
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

provideApolloClient(apolloClient);

export interface queryResult {
  data: queryData;
}

interface queryData {
  users?: any;
  providers?: any;
}

export const useQuery = (query: DocumentNode, variables: object = {}) => {
  return new Promise<queryResult>((res, rej) => {
    const { onResult, onError } = _useQuery(query, variables);

    onError((err) => {
      Notify.create({
        message: 'Ha ocurrido un error, por favor vuelve a intentarlo',
        type: 'negative',
      });

      rej(err);
    });

    onResult((result) => {
      res(result);
    });
  });
};
