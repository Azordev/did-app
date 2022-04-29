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
import {
  getOffset,
  getTotalPages,
  orderByParamTypes,
  orderByGraphQLParamType,
  actionCallbackType,
} from './index';

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

export const useQuery = <returnType>(
  query: DocumentNode,
  variables: object = {}
) => {
  return new Promise<returnType>((resolve, reject) => {
    const { onResult, onError } = _useQuery(query, variables, {
      fetchPolicy: 'cache-and-network',
    });

    onError((err) => {
      Notify.create({
        message: 'Ha ocurrido un error, por favor vuelve a intentarlo',
        type: 'negative',
      });

      reject(err);
    });

    onResult(({ data }) => {
      resolve(data);
    });
  });
};

export const handleListQuery = (actionCallback: actionCallbackType) => {
  // Editable states
  const searchText = ref<string>('');

  // States
  const isLoading = ref<boolean>(false);
  const currentPage = ref<number>(1);

  // Filters
  const order_by = ref<orderByParamTypes>({
    label: '',
    column: '',
    content: '',
  });
  const limit = ref<number>(10);
  const query = ref<string>('');

  // Results
  const totalPages = ref<number>(1);
  const totalItems = ref<number>(0);
  const items = ref<object[]>([]);

  const getOrderByGraphQLVariables = (
    order_by: orderByParamTypes
  ): orderByGraphQLParamType => {
    if (!order_by.content || !order_by.column) return {};

    return { [order_by.column]: order_by.content };
  };

  const getItemsList = (
    _currentPage: number,
    _query: string,
    _order_by: orderByParamTypes
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
      ...(query.value && { query: `%${query.value}%` }),
      ...(order_by.value?.content && {
        order_by: getOrderByGraphQLVariables(order_by.value),
      }),
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
