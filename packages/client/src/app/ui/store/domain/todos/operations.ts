import { createAsyncThunk } from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Repository from '~client/app/application/businesses/todos/repository';
import * as Connection from '~client/app/application/types/connection';
import * as GraphQLTypes from '~client/app/application/types/gen/api';
import { AsyncThunkConfig } from '~client/app/ui/store';

import * as Constants from './constants';
import * as Types from './types';

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

export const fetchTodos = createAsyncThunk<
  Types.Payload['operation']['fetchTodos'],
  { pageInfo?: Connection.PageInfo },
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchTodos`, async (args, thunkAPI) => {
  try {
    const { data, errors } = await thunkAPI.extra.api.query<
      GraphQLTypes.TodosQuery,
      GraphQLTypes.TodosQueryVariables
    >({
      query: GraphQLTypes.TodosDocument,
      variables: { page: { after: args.pageInfo?.endCursor, first: 5 } },
    });

    if (errors && errors.length > 0) {
      return thunkAPI.rejectWithValue({ message: errors[0].message });
    }

    return {
      pageInfo: new Repository.TodosRepository(data).toEntityPageInfo,
      todos: new Repository.TodosRepository(data).toEntityTodos,
      totalCount: data.todos.totalCount,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export const fetchMoreTodos = createAsyncThunk<
  Types.Payload['operation']['fetchMoreTodos'],
  void,
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchMoreTodos`, async (_, thunkAPI) => {
  const { pageInfo } = thunkAPI.getState().domain.todos;
  thunkAPI.dispatch(fetchTodos({ pageInfo }));
});

export const createTodo = createAsyncThunk<
  { todo: Entity.Todo | null },
  Types.Payload['operation']['createTodo'],
  AsyncThunkConfig<{ message: string }>
>(`${name}/createTodo`, async (args, thunkAPI) => {
  try {
    const { data, errors } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.CreateTodoMutation,
      GraphQLTypes.CreateTodoMutationVariables
    >({
      mutation: GraphQLTypes.CreateTodoDocument,
      variables: { input: { description: args.description } },
    });

    if (!data) throw new Error(JSON.stringify(errors));

    return {
      todo: new Repository.CreateTodoRepository(data).toEntityTodo,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export const updateTodo = createAsyncThunk<
  { todo: Pick<Entity.Todo, 'id' | 'isDone' | 'updatedAt'> | null },
  Types.Payload['operation']['updateTodo'],
  AsyncThunkConfig<{ message: string }>
>(`${name}/updateTodo`, async (args, thunkAPI) => {
  try {
    const { data, errors } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.UpdateTodoMutation,
      GraphQLTypes.UpdateTodoMutationVariables
    >({
      mutation: GraphQLTypes.UpdateTodoDocument,
      variables: { input: { id: args.id, isDone: args.isDone } },
    });

    if (!data) throw new Error(JSON.stringify(errors));

    return {
      todo: new Repository.UpdateTodoRepository(data).toEntityTodo,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export const removeTodo = createAsyncThunk<
  { todo: Pick<Entity.Todo, 'id'> | null },
  Types.Payload['operation']['removeTodo'],
  AsyncThunkConfig<{ message: string }>
>(`${name}/removeTodo`, async (args, thunkAPI) => {
  try {
    const { data, errors } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.RemoveTodoMutation,
      GraphQLTypes.RemoveTodoMutationVariables
    >({
      mutation: GraphQLTypes.RemoveTodoDocument,
      variables: { input: { id: args.id } },
    });

    if (!data) throw new Error(JSON.stringify(errors));

    return {
      todo: new Repository.RemoveTodoRepository(data).toEntityTodo,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});
