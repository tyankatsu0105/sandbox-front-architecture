import { setupServer } from 'msw/node';

import * as Handlers from './handlers';

const handlers = [...Handlers.Query.TodosQuery.handlers];

export const server = setupServer(...handlers);
