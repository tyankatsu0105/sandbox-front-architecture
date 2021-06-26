import * as Repository from '~client/app/application/businesses/todos/repository';
import { state } from '~client/app/ui/store/mock';

import * as MockData from './mock-data';
import * as Operations from './operations';

describe('operations', () => {
  let dispatch: any;
  let getState: any;
  let extra: any;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => state);
    extra = {};
  });
  describe('fetchTodos', () => {
    it('when succeed query, then return transformed data', async () => {
      const data = MockData.responseTodosQuery;
      extra = {
        api: {
          query: jest.fn().mockResolvedValue({ data }),
        },
      };
      const args: Parameters<typeof Operations.fetchTodos>[0] = {
        pageInfo: {},
      };

      const result = await Operations.fetchTodos(args)(
        dispatch,
        getState,
        extra
      );

      expect(result.payload).toStrictEqual({
        pageInfo: new Repository.TodosRepository(data).toEntityPageInfo,
        todos: new Repository.TodosRepository(data).toEntityTodos,
        totalCount: data.todos.totalCount,
      });
    });

    it('when fail query, then return error message', async () => {
      const error: ReturnType<
        typeof Operations.fetchTodos['rejected']
      >['error'] = {
        message: 'aaaaaaaaaa',
      };
      extra = {
        api: {
          query: jest.fn().mockRejectedValue(error),
        },
      };
      const args: Parameters<typeof Operations.fetchTodos>[0] = {
        pageInfo: {},
      };

      const result = await Operations.fetchTodos(args)(
        dispatch,
        getState,
        extra
      );

      expect(result.payload).toStrictEqual(error);
    });
  });
});
