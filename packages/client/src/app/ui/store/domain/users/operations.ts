import { createAsyncThunk } from '@reduxjs/toolkit';

import * as Repository from '~client/app/application/businesses/users/repository';
import * as Connection from '~client/app/application/types/connection';
import * as GraphQLTypes from '~client/app/application/types/gen/api';
import { AsyncThunkConfig } from '~client/app/ui/store';

import * as Constants from './constants';
import * as Types from './types';

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

export const fetchUsers = createAsyncThunk<
  Types.Payload['operation']['fetchUsers'],
  { pageInfo?: Connection.PageInfo },
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchUsers`, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.query<
      GraphQLTypes.UsersQuery,
      GraphQLTypes.UsersQueryVariables
    >({
      query: GraphQLTypes.UsersDocument,
      variables: { page: { after: args.pageInfo?.endCursor, first: 5 } },
    });

    return {
      pageInfo: data.users.pageInfo,
      totalCount: data.users.totalCount,
      users: new Repository.UsersRepository(data).toEntityUsers,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export const fetchMoreUsers = createAsyncThunk<
  Types.Payload['operation']['fetchMoreUsers'],
  void,
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchMoreUsers`, async (_, thunkAPI) => {
  const { pageInfo } = thunkAPI.getState().domain.users;
  thunkAPI.dispatch(fetchUsers({ pageInfo }));
});
