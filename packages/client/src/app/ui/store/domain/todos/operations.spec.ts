import { GraphQLError } from 'graphql';
import { graphql } from 'msw';

import * as Repository from '~client/app/application/businesses/todos/repository';
import { store } from '~client/app/ui/store/mock';
import { Query } from '~client/mocks/handlers';
import { server } from '~client/mocks/server';
import { Apollo } from '~client/modules';

import * as Operations from './operations';

beforeAll(() => server.listen());
beforeEach(() => Apollo.client.cache.reset());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('operations', () => {
  describe('fetchTodos', () => {
    it('when succeed query, then return transformed data', async () => {
      const args: Parameters<typeof Operations.fetchTodos>[0] = {
        pageInfo: {},
      };

      const result = await store.dispatch(Operations.fetchTodos(args));

      expect(result.payload).toStrictEqual({
        pageInfo: new Repository.TodosRepository(Query.TodosQuery.initialData)
          .toEntityPageInfo,
        todos: new Repository.TodosRepository(Query.TodosQuery.initialData)
          .toEntityTodos,
        totalCount: Query.TodosQuery.initialData.todos.totalCount,
      });
    });

    it('when fail query, then return error message', async () => {
      const errors: Partial<GraphQLError>[] = [
        {
          message: 'aaaaa',
        },
      ];
      server.use(
        graphql.query('Todos', (_req, res, ctx) => {
          return res(ctx.errors(errors));
        })
      );
      const args: Parameters<typeof Operations.fetchTodos>[0] = {
        pageInfo: {},
      };

      const result = await store.dispatch(Operations.fetchTodos(args));

      expect(result.payload).toStrictEqual(errors[0]);
    });
  });
});
