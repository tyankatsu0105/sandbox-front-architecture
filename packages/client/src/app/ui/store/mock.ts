import configureStore from 'redux-mock-store';

import * as Todos from './domain/todos';
export * as TodosMock from './domain/todos';
import { RootState } from './index';

const mockStore = configureStore();

export const state: RootState = {
  domain: {
    todos: Todos.mockState,
  } as any,
};

export const store = mockStore(state);
