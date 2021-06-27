import * as ApolloClient from '@apollo/client';
import * as ReduxToolkit from '@reduxjs/toolkit';

import { environment } from '~client/environments/environment';
import * as Modules from '~client/modules';

const client = new ApolloClient.ApolloClient({
  cache: Modules.Apollo.cache,
  defaultOptions: Modules.Apollo.defaultOptions,
  uri: environment.apiEndpoint,
});

export type ExtraArgument = {
  api: {
    mutate: typeof client.mutate;
    query: typeof client.query;
  };
};

export const extraArgument: ExtraArgument = {
  api: {
    mutate: client.mutate,
    query: client.query,
  },
};

export const createMiddleware = () => {
  const middleware = ReduxToolkit.getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: {
      extraArgument,
    },
  });
  return { middleware };
};
