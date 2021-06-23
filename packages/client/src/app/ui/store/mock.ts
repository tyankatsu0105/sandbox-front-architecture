import configureStore from 'redux-mock-store';

import * as Todos from './domain/todos';
export * as TodosMock from './domain/todos';
import { RootState } from './index';

const mockStore = configureStore<RootState>();

export const state: RootState = {
  domain: {
    todo: {} as any,
    todos: Todos.mockState,
    user: {} as any,
    users: {} as any,
  },
};

export const store = mockStore(state);
