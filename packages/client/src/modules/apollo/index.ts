import * as ApolloClient from '@apollo/client';

import { environment } from '~client/environments/environment';

import { link } from './link';

export const cache = new ApolloClient.InMemoryCache({ addTypename: false });

export const defaultOptions: ApolloClient.DefaultOptions = {
  mutate: {
    errorPolicy: 'all',
  },
  query: {
    errorPolicy: 'all',
    fetchPolicy: 'cache-first',
  },
  watchQuery: {
    errorPolicy: 'all',
    fetchPolicy: 'cache-and-network',
  },
};

export const client = new ApolloClient.ApolloClient({
  cache,
  defaultOptions,
  link,
  uri: environment.apiEndpoint,
});
