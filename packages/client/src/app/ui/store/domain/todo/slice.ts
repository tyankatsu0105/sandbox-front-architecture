import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Status from '~client/app/ui/store/status';

import * as Constants from './constants';
import * as Operations from './operations';
import * as Types from './types';

// ==================================================
// Setups
// ==================================================

const initialState: Types.State = {
  createdAt: '',
  description: '',
  id: '',
  isDone: false,
  status: Status.status.PRISTINE,
  updatedAt: '',
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder.addCase(Operations.fetch.fulfilled, (state, action) => {
      state.status = Status.status.VALID;
      if (action.payload.todo == null) return;

      state.id = action.payload.todo.id;
      state.description = action.payload.todo.description;
      state.isDone = action.payload.todo.isDone;
      state.createdAt = action.payload.todo.createdAt;
      state.updatedAt = action.payload.todo.updatedAt;

      state.status = Status.status.SUCCESS;
    });
    builder.addCase(Operations.fetch.rejected, (state, action) => {
      state.status = Status.status.INVALID;

      console.error('action.error', JSON.stringify(action.error));
      console.error('action.payload', JSON.stringify(action.payload));
    });
  },
  initialState: initialState as Types.State,
  name,
  reducers: {
    toInitialState: () => initialState,
  },
});

export const { actions, reducer } = slice;
