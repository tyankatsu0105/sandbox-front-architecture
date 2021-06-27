import * as ReduxToolkit from '@reduxjs/toolkit';
import * as ReactRedux from 'react-redux';

import * as Middleware from './middleware';
import * as Reducer from './reducer';

export const createStore = () => {
  const { reducer } = Reducer.createReducer();
  const { middleware } = Middleware.createMiddleware();

  return ReduxToolkit.configureStore({
    middleware,
    reducer,
  });
};

// ==================================================
// types
// ==================================================
type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

/**
 * Override type AsyncThunkConfig of ReduxToolkit
 * @see https://github.com/reduxjs/redux-toolkit/blob/de1282c1ec7eb8db1590a60c55f0ec21004b8675/src/createAsyncThunk.ts#L65-L70
 */
export type AsyncThunkConfig<RejectValue = unknown> = {
  dispatch: AppDispatch;
  extra: Middleware.ExtraArgument;
  rejectValue: RejectValue;
  state: RootState;
};

// ==================================================
// hooks override
// ==================================================
export const useSelector: ReactRedux.TypedUseSelectorHook<RootState> =
  ReactRedux.useSelector;
