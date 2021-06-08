import { ApolloError } from '@apollo/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/todo/entity';
import * as Repository from '~client/app/application/businesses/todo/repository';
import * as GraphQLTypes from '~client/app/application/types/gen/api';
import { AsyncThunkConfig } from '~client/app/ui/store';

import * as Constants from './constants';
import * as Types from './types';

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

export const fetch = createAsyncThunk<
  { todo: Entity.Todo | null },
  Types.Payload['operation']['fetchTodo'],
  AsyncThunkConfig<ApolloError>
>(`${name}/fetchTodo`, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.query<
      GraphQLTypes.TodoQuery,
      GraphQLTypes.TodoQueryVariables
    >({
      query: GraphQLTypes.TodoDocument,
      variables: { id: args.id },
    });

    return {
      todo: new Repository.TodoRepository(data).toEntityTodo,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
