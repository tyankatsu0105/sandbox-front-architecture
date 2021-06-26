import { status } from '~client/app/ui/store/status';
import { TodosQuery } from '~client/mocks/handlers/query';

import { State } from './types';

export const responseTodosQuery = TodosQuery.initialData;

export const mockState: State = {
  entities: {
    '0e4afb55-12c3-4a60-9386-788b6da19b58': {
      createdAt: '2019-10-23 03:04',
      description: 'District Accountability Designer',
      id: '0e4afb55-12c3-4a60-9386-788b6da19b58',
      isDone: false,
      updatedAt: '2021-02-18 23:07',
    },
    '27e222f6-b945-4586-a455-8afa1d7ba7c6': {
      createdAt: '2019-07-04 09:14',
      description: 'Central Implementation Associate',
      id: '27e222f6-b945-4586-a455-8afa1d7ba7c6',
      isDone: true,
      updatedAt: '2020-12-21 20:48',
    },
    '31a1450e-65f4-4b26-8634-020cc1977b63': {
      createdAt: '2019-06-27 00:31',
      description: 'Forward Communications Consultant',
      id: '31a1450e-65f4-4b26-8634-020cc1977b63',
      isDone: false,
      updatedAt: '2020-08-29 06:30',
    },
    '5ae8f405-3a38-44f9-ab82-0e7384a73364': {
      createdAt: '2020-06-09 01:45',
      description: 'Product Factors Associate',
      id: '5ae8f405-3a38-44f9-ab82-0e7384a73364',
      isDone: true,
      updatedAt: '2021-01-31 06:00',
    },
    '940e969c-cafc-43e9-9248-5a343234e248': {
      createdAt: '2020-05-25 04:03',
      description: 'Direct Assurance Developer',
      id: '940e969c-cafc-43e9-9248-5a343234e248',
      isDone: true,
      updatedAt: '2020-11-15 08:59',
    },
  },
  ids: [
    '0e4afb55-12c3-4a60-9386-788b6da19b58',
    '940e969c-cafc-43e9-9248-5a343234e248',
    '5ae8f405-3a38-44f9-ab82-0e7384a73364',
    '31a1450e-65f4-4b26-8634-020cc1977b63',
    '27e222f6-b945-4586-a455-8afa1d7ba7c6',
  ],
  pageInfo: {
    endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
  },
  status: status.SUCCESS,
  totalCount: 5,
};
