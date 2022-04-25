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
import { ref } from 'vue';
import { getOffset, getTotalPages } from './pagination';

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
  users?: any;
  providers?: any;
  providers_aggregate?: any;
}

export const useQuery = (query: DocumentNode, variables: object = {}) => {
  return new Promise<queryResult>((resolve, reject) => {
    const { onResult, onError } = _useQuery(query, variables);

    onError((err) => {
      Notify.create({
        message: 'Ha ocurrido un error, por favor vuelve a intentarlo',
        type: 'negative',
      });

      reject(err);
    });

    onResult((result) => {
      const { data } = result;
      resolve(data);
    });
  });
};

export interface actionCallbackReturnTypes {
  items: object[];
  totalItems: number;
}

export interface orderByGraphQLVariablesTypes {
  label?: string;
  value?: string;
  name?: string;
}

export interface actionCallbackParamsTypes {
  limit: number;
  offset: number;
  query: string;
  order_by?: orderByGraphQLVariablesTypes;
}

export type actionCallback =
  ({}: actionCallbackParamsTypes) => Promise<actionCallbackReturnTypes>;

export const handleListQuery = (actionCallback: actionCallback) => {
  // Editable states
  const searchText = ref<string>('');

  // States
  const isLoading = ref<boolean>(false);
  const currentPage = ref<number>(1);

  // Filters
  const order_by = ref<orderByGraphQLVariablesTypes>({
    label: '',
    value: '',
    name: '',
  });
  const limit = ref<number>(10);
  const query = ref<string>('');

  // Results
  const totalPages = ref<number>(1);
  const totalItems = ref<number>(0);
  const items = ref<object[]>([]);

  const getOrderByGraphQLVariables = (
    order_by: orderByGraphQLVariablesTypes
  ) => {
    if (!order_by.value || !order_by.name) return {};

    return { [order_by.name]: order_by.value };
  };

  const getItemsList = (
    _currentPage: number,
    _query: string,
    _order_by: orderByGraphQLVariablesTypes
  ) => {
    isLoading.value = true;
    currentPage.value = _currentPage;
    query.value = _query;
    order_by.value = _order_by;

    const offset = getOffset({
      currentPage: currentPage.value,
      limit: limit.value,
    });

    const variables = {
      offset,
      limit: limit.value,
      query: `%${query.value}%`,
      ...(order_by.value && getOrderByGraphQLVariables(order_by.value)),
    };

    actionCallback(variables)
      .then((result) => {
        items.value = result.items;

        totalItems.value = result.totalItems;

        totalPages.value = getTotalPages({
          totalItems: totalItems.value,
          limit: limit.value,
        });

        isLoading.value = false;
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const onClearSearch = () => {
    searchText.value = '';

    if (query.value) {
      getItemsList(1, '', order_by.value);
    }
  };

  return {
    items,
    limit,
    query,
    totalItems,
    totalPages,
    currentPage,
    isLoading,
    searchText,
    order_by,
    onClearSearch,
    getItemsList,
  };
};
