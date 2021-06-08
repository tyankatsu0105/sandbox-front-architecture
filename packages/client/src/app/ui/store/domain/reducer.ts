import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Todo from './todo';
import * as Todos from './todos';
import * as User from './user';
import * as Users from './users';

export type State = {
  [User.featureKey]: User.State;
  [Users.featureKey]: Users.State;
  [Todo.featureKey]: Todo.State;
  [Todos.featureKey]: Todos.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [User.featureKey]: User.reducer,
  [Users.featureKey]: Users.reducer,
  [Todo.featureKey]: Todo.reducer,
  [Todos.featureKey]: Todos.reducer,
});
