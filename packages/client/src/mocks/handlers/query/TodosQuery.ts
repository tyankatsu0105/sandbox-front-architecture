import { graphql } from 'msw';

import * as GraphQLTypes from '~mock-server/app/types/gen/api';

export const initialData: GraphQLTypes.TodosQuery = {
  todos: {
    __typename: 'TodoConnection',
    edges: [
      {
        __typename: 'TodoConnectionEdge',
        node: {
          __typename: 'Todo',
          createdAt: '2020-02-02T03:47:05.713Z',
          description: 'District Branding Coordinator',
          id: '066eef12-c162-4079-97b5-001e90baf565',
          isDone: true,
          updatedAt: '2021-06-16T00:28:10.631Z',
        },
      },
      {
        __typename: 'TodoConnectionEdge',
        node: {
          __typename: 'Todo',
          createdAt: '2019-10-05T02:32:28.278Z',
          description: 'Dynamic Division Officer',
          id: 'c722ca14-190e-4b3b-b965-d71cf2c64763',
          isDone: true,
          updatedAt: '2021-06-16T12:44:08.219Z',
        },
      },
      {
        __typename: 'TodoConnectionEdge',
        node: {
          __typename: 'Todo',
          createdAt: '2019-12-24T17:44:21.650Z',
          description: 'Direct Data Producer',
          id: '87ee6fdf-4f2a-4a39-96d0-1b6d6364f1dc',
          isDone: true,
          updatedAt: '2020-08-07T00:59:12.772Z',
        },
      },
      {
        __typename: 'TodoConnectionEdge',
        node: {
          __typename: 'Todo',
          createdAt: '2020-08-31T16:14:20.323Z',
          description: 'Corporate Web Administrator',
          id: 'cb5bd8c3-a754-4903-a484-8e8d75357b24',
          isDone: false,
          updatedAt: '2021-06-15T15:27:50.985Z',
        },
      },
      {
        __typename: 'TodoConnectionEdge',
        node: {
          __typename: 'Todo',
          createdAt: '2020-05-16T00:05:19.322Z',
          description: 'District Marketing Associate',
          id: 'abab5cc1-6937-45f5-9c3c-da9aac2f271b',
          isDone: false,
          updatedAt: '2020-09-07T12:13:36.375Z',
        },
      },
    ],
    pageInfo: {
      __typename: 'PageInfo',
      endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
    },
    totalCount: 5,
  },
};

export const handlers = [
  graphql.query<GraphQLTypes.TodosQuery, GraphQLTypes.TodosQueryVariables>(
    'Todos',
    (_req, res, ctx) => {
      const data = initialData;

      return res(ctx.data({ ...data }));
    }
  ),
];
