import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Status from '~client/app/ui/store/status';

import * as Constants from './constants';
import * as Operations from './operations';
import * as Types from './types';

// ==================================================
// Setups
// ==================================================

export const adapter = ReduxToolkit.createEntityAdapter<Entity.Todo>({
  selectId: (user) => user.id,
});

export const initialState: Types.State = adapter.getInitialState({
  pageInfo: {},
  status: Status.status.PRISTINE,
  totalCount: 0,
});

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(Operations.fetchTodos.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.fetchTodos.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (action.payload.todos) adapter.addMany(state, action.payload.todos);
        state.pageInfo = action.payload.pageInfo;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(Operations.fetchTodos.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) console.error(action.payload.message);
      })

      .addCase(Operations.fetchMoreTodos.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.fetchMoreTodos.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) console.error(action.payload.message);
      })

      .addCase(Operations.createTodo.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.createTodo.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (action.payload.todo) adapter.addOne(state, action.payload.todo);
      })
      .addCase(Operations.createTodo.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) console.error(action.payload.message);
      })

      .addCase(Operations.updateTodo.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.updateTodo.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (action.payload.todo)
          adapter.updateOne(state, {
            changes: { ...action.payload.todo },
            id: action.payload.todo.id,
          });
      })
      .addCase(Operations.updateTodo.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) console.error(action.payload.message);
      })

      .addCase(Operations.removeTodo.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.removeTodo.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (action.payload.todo)
          adapter.removeOne(state, action.payload.todo.id);
      })
      .addCase(Operations.removeTodo.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) console.error(action.payload.message);
      });
  },
  initialState: initialState as Types.State,
  name,
  reducers: {
    toInitialState: () => initialState,
  },
});

export const { actions, reducer } = slice;
