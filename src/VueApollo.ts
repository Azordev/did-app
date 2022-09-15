import { RetryLink } from '@apollo/client/link/retry';
// Vue apollo settings
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_URL,
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
  },
  attempts: {
    max: 10,
    retryIf: (error) => !!error,
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: ApolloLink.from([retryLink, httpLink]),
  cache,
});

export { apolloClient, DefaultApolloClient };
