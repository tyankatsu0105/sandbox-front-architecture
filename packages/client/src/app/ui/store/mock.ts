import createMockStore from 'redux-mock-store';

import * as Todos from './domain/todos';
export * as TodosMock from './domain/todos';

import { AppDispatch, RootState } from './index';
import { createMiddleware } from './middleware';

export const state: RootState = {
  domain: {
    todo: {} as any,
    todos: Todos.mockState,
    user: {} as any,
    users: {} as any,
  },
};

const { middleware } = createMiddleware();
export const store = createMockStore<RootState, AppDispatch>(middleware)(state);
